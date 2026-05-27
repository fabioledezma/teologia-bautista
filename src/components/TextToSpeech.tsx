'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Section {
  title: string
  content: string
}

interface TextToSpeechProps {
  sections: Section[]
}

export default function TextToSpeech({ sections }: TextToSpeechProps) {
  const [state, setState] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [currentIdx, setCurrentIdx] = useState(-1)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    synthRef.current = window.speechSynthesis
    return () => {
      if (synthRef.current) synthRef.current.cancel()
    }
  }, [])

  const getSpanishVoice = (): SpeechSynthesisVoice | null => {
    const synth = synthRef.current
    if (!synth) return null
    const voices = synth.getVoices()
    return voices.find((v) => v.lang.startsWith('es')) ?? null
  }

  const speakSection = useCallback((index: number) => {
    if (index >= sections.length) {
      setState('idle')
      setCurrentIdx(-1)
      return
    }
    const synth = synthRef.current
    if (!synth) return

    const text = `${sections[index].title}. ${sections[index].content}`
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'es-ES'
    utterance.rate = 0.9
    utterance.pitch = 1

    const voice = getSpanishVoice()
    if (voice) utterance.voice = voice

    utterance.onend = () => {
      speakSection(index + 1)
    }

    utterance.onerror = () => {
      setState('idle')
      setCurrentIdx(-1)
    }

    utteranceRef.current = utterance
    setCurrentIdx(index)
    synth.speak(utterance)
  }, [sections])

  const start = useCallback(() => {
    if (synthRef.current?.speaking && state === 'paused') {
      synthRef.current.resume()
      setState('playing')
      return
    }
    const idx = currentIdx >= 0 ? currentIdx : 0
    speakSection(idx)
    setState('playing')
  }, [state, currentIdx, speakSection])

  const pause = useCallback(() => {
    synthRef.current?.pause()
    setState('paused')
  }, [])

  const stop = useCallback(() => {
    synthRef.current?.cancel()
    setState('idle')
    setCurrentIdx(-1)
  }, [])

  return (
    <div className="flex items-center gap-2 mb-6">
      {state === 'idle' && (
        <button
          onClick={start}
          className="inline-flex items-center gap-1.5 text-[11px] text-gold bg-gold/10 hover:bg-gold/20 border border-gold/30 px-3 py-1.5 rounded-full transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Escuchar
        </button>
      )}
      {state === 'playing' && (
        <>
          <button
            onClick={pause}
            className="inline-flex items-center gap-1.5 text-[11px] text-gold bg-gold/10 hover:bg-gold/20 border border-gold/30 px-3 py-1.5 rounded-full transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
            Pausar
          </button>
          <button
            onClick={stop}
            className="inline-flex items-center gap-1.5 text-[11px] text-text-2 hover:text-red-400 border border-border px-3 py-1.5 rounded-full transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h12v12H6z" />
            </svg>
            Detener
          </button>
        </>
      )}
      {state === 'paused' && (
        <>
          <button
            onClick={start}
            className="inline-flex items-center gap-1.5 text-[11px] text-gold bg-gold/10 hover:bg-gold/20 border border-gold/30 px-3 py-1.5 rounded-full transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Reanudar
          </button>
          <button
            onClick={stop}
            className="inline-flex items-center gap-1.5 text-[11px] text-text-2 hover:text-red-400 border border-border px-3 py-1.5 rounded-full transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h12v12H6z" />
            </svg>
            Detener
          </button>
        </>
      )}
      {currentIdx >= 0 && (
        <span className="text-[10px] text-text-3 ml-1">
          {currentIdx + 1} / {sections.length}
        </span>
      )}
    </div>
  )
}
