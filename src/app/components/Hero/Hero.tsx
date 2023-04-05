import Image from "next/image"
import hero1 from "./../../../../public/img/hero1.png"
import hero2 from "./../../../../public/img/hero2.png"
import hero3 from "./../../../../public/img/hero3.png"

function Hero() {
  return (
    <section className="bg-[#14141F] z-40 py-10 flex flex-wrap justify-center items-center px-2">
        <div className="container mx-auto flex lg:justify-center gap-4 snap-x overflow-x-auto py-6 relative overflow-hidden lg:overflow-x-hidden">
            <div className="snap-start scroll-ml-2 shrink-0  md:w-auto relative z-0 overflow-hidden text-white ">
                <p className="absolute z-10 left-8 top-8 text-2xl font-extrabold">CYBER ART</p>
                <p className="absolute z-10 left-8 top-16 text-sm font-medium text-white">Graphic Art 3D</p>
                <Image src={hero2} alt="fondo" width={500} className="object-cover hover:scale-110 transition-all duration-700"/>
            </div>
            <div className="snap-start scroll-ml-2 shrink-0  md:w-auto relative z-0 overflow-hidden text-white">
                <p className="absolute z-10 left-8 top-8 text-2xl font-extrabold">HOT LAVA</p>
                <p className="absolute z-10 left-8 top-16 text-sm font-medium text-white">Graphic Art 3D</p>
                <Image src={hero1} alt="fondo" width={500} className="object-cover hover:scale-110 transition-all duration-700"/>
            </div>
            <div className="snap-start scroll-ml-2 shrink-0  md:w-auto relative z-0 overflow-hidden text-white">
                <p className="absolute z-10 left-8 top-8 text-2xl font-extrabold">LIVE ARTS</p>
                <p className="absolute z-10 left-8 top-16 text-sm font-medium text-white">Graphic Art 3D</p>
                <Image src={hero3} alt="fondo" width={500} className="object-cover hover:scale-110 transition-all duration-700"/>
            </div>
            <div className="text-[#14141F] absolute lg:flex justify-center gap-4 -bottom-0 lg:left-1/2 z-30 hidden">
                <span className="cursor-pointer border-2 w-3 h-3 rounded-full border-white/70 bg-white flex items-center justify-center">.</span>
                <span className="cursor-pointer border-2 w-3 h-3 rounded-full border-white/70 bg-transparent flex items-center justify-center">.</span>
                <span className="cursor-pointer border-2 w-3 h-3 rounded-full border-white/70 bg-transparent flex items-center justify-center">.</span>
                <span className="cursor-pointer border-2 w-3 h-3 rounded-full border-white/70 bg-transparent flex items-center justify-center">.</span>
            </div>
        </div>
    </section>
  )
}

export default Hero