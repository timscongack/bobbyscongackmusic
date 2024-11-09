'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Crown, Medal, Trophy } from 'lucide-react'

const titles = [
  "Acoustic Performer.",
  "Construction Maintenance Electrician.",
  "Local Celebrity.",
  "Heart Breaker."
]

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < titles[titleIndex].length) {
      const typingTimer = setTimeout(() => {
        setCurrentTitle(prev => prev + titles[titleIndex][charIndex])
        setCharIndex(charIndex + 1)
      }, 50)
      return () => clearTimeout(typingTimer)
    } else {
      const pauseTimer = setTimeout(() => {
        setCurrentTitle('')
        setCharIndex(0)
        setTitleIndex((titleIndex + 1) % titles.length)
      }, 2000)
      return () => clearTimeout(pauseTimer)
    }
  }, [charIndex, titleIndex])

  return (
    <section className="mb-12">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src="/images/bobbydock.webp"
            alt="Bobby Scongack playing guitar at sunset"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src="/images/bobbygreen.webp"
            alt="Bobby Scongack outdoor acoustic performance"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="sr-only">Bobby Scongack is a </span>
          <span aria-live="polite" className="inline-block min-h-[1.2em]">
            {currentTitle}
          </span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Based in Southern Ontario, Canada
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
         <div className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
            <Trophy className="h-8 w-8" />
            <span className="text-sm font-medium">Harvest Star Search Winner</span>
          </div>
          <div className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
            <Crown className="h-8 w-8" />
            <span className="text-sm font-medium">Queens Battle Of The Bands Winner</span>
          </div>
          <div className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
            <Medal className="h-8 w-8" />
            <span className="text-sm font-medium">Sing For The Shot Finalist</span>
          </div>
        </div>
      </div>
    </section>
  )
}