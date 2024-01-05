import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import { Raleway } from 'next/font/google'
import { SliderData } from '../components/SliderData'
import Instagram from '@/components/Instagram'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Home() {
  return (
    <main className={raleway.className}>
      <Hero heading='Capture Photography' message='I capture moments in nature and keep them alive' bg={'h-screen'} />
      <Slider slides={SliderData} />
      <Instagram />
    </main>
  )
}
