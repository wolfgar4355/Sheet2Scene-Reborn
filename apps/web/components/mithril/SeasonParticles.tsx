'use client'

/**
 * 🍃 Mithril Engine — SeasonParticles v1.5.1
 * Génère des particules (pluie, neige, feuilles, poussière)
 * selon la saison actuelle détectée dans le DOM.
 *
 * - Se synchronise avec AmbientManager via body.dataset.season
 * - Utilise Canvas 2D pour performance maximale
 * - Ajoute de la profondeur et des mouvements aléatoires
 */

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  r: number
  speed: number
  drift: number
  color: string
}

export default function SeasonParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particles = useRef<Particle[]>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /** 🌤️ Initialisation des particules */
    const initParticles = () => {
      const season = document.body.dataset.season || 'summer'
      const count =
        season === 'winter'
          ? 180
          : season === 'autumn'
          ? 120
          : season === 'spring'
          ? 80
          : 50

      particles.current = Array.from({ length: count }, () => {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const r = Math.random() * 3 + 1
        const speed = Math.random() * 0.8 + 0.3
        const drift = Math.random() * 0.5 - 0.25
        const color =
          season === 'winter'
            ? 'rgba(255,255,255,0.8)' // neige
            : season === 'autumn'
            ? `rgba(${200 + Math.random() * 55},${100 +
                Math.random() * 80},0,0.7)` // feuilles
            : season === 'spring'
            ? 'rgba(180,255,180,0.5)' // pollen
            : 'rgba(255,255,255,0.2)' // poussière/été

        return { x, y, r, speed, drift, color }
      })
    }

    initParticles()

    /** 🌀 Animation principale */
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const season = document.body.dataset.season || 'summer'

      for (const p of particles.current) {
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        // mouvement selon saison
        if (season === 'winter' || season === 'autumn') {
          p.y += p.speed
          p.x += p.drift
        } else {
          p.y += p.speed * 0.3
          p.x += p.drift * 0.5
        }

        // respawn
        if (p.y > canvas.height + 5) {
          p.y = -10
          p.x = Math.random() * canvas.width
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    // 🔄 Recrée les particules à chaque changement de saison
    const observer = new MutationObserver(() => {
      initParticles()
    })
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-season'],
    })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{
        mixBlendMode: 'screen',
      }}
    />
  )
}
