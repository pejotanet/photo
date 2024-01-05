import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

export default function work() {
  return (
    <div>
        <Hero heading='Meus Trabalhos' message='This is some of my recent work traveling the world' bg={'h-[600px]'} />
        <Portfolio />
    </div>
  )
}
