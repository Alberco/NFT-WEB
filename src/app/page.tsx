import Image from 'next/image'
import { Hero, Pasarela, Slider } from './components'

export default function Home() {
  return (
    <main className="bg-slate-600 min-h-screen z-10">
        <Hero />
        <div className='bg-[#1F1F2C] '>
          <div className="container mx-auto px-2">
            <Slider />
          </div>
        </div>
        <div className='bg-[#14141F]'>
          <div className="container mx-auto px-2">
            <Pasarela />
          </div>
        </div>

    </main>
  )
}
