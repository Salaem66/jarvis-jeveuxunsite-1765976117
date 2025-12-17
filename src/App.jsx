import React, { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { GraduationCap, Award, Star, Sparkles, PartyPopper } from 'lucide-react'

function App() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)

    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)

    const bigConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FF69B4', '#9370DB', '#00CED1', '#FF6347']
      })
    }

    bigConfetti()
    const bigInterval = setInterval(bigConfetti, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(bigInterval)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50 backdrop-blur-sm"></div>
      
      <div className="absolute top-10 left-10 animate-float">
        <Star className="w-12 h-12 text-yellow-300 fill-yellow-300" />
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-16 h-16 text-pink-400" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Award className="w-14 h-14 text-purple-400" />
      </div>
      <div className="absolute bottom-32 right-32 animate-float" style={{ animationDelay: '0.5s' }}>
        <PartyPopper className="w-12 h-12 text-blue-300" />
      </div>

      <div 
        className={`relative z-10 text-center transition-all duration-1000 transform ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        <div className="mb-8 animate-bounce-slow">
          <GraduationCap className="w-32 h-32 mx-auto text-yellow-400 drop-shadow-2xl" />
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
          <span className="text-gradient">Maël</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse-slow">
            🎉 Félicitations 🎉
          </h2>
          <p className="text-2xl md:text-4xl font-semibold text-gradient">
            pour ton diplôme !
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-5xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎓</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌟</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎊</span>
          <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🏆</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎉</span>
        </div>

        <p className="mt-8 text-xl md:text-2xl text-white/80 font-medium">
          Tu as réussi ! Bravo pour tout ce travail acharné ! 🚀
        </p>
      </div>
    </div>
  )
}

export default App