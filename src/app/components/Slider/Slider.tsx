"use client"
import Image from 'next/image'
import slider1 from "./../../../../public/img/slider3.jpg"
import slider2 from "./../../../../public/img/slider2.jpg"
import slider3 from "./../../../../public/img/slider1.jpg"
import perfil1  from "./../../../../public/img/perfil1.jpg"
import perfil2  from "./../../../../public/img/perfil2.jpg"
import perfil3  from "./../../../../public/img/perfil3.jpg"
import { RiHeart3Line , RiFirefoxFill } from "react-icons/ri";

function Slider() {

  let horaActual: Date = new Date()
  let hora = horaActual.getHours()
  let minuto = horaActual.getMinutes()
  let segundos = horaActual.getSeconds()

  return (
    <section className='bg-[#1F1F2C] py-20'>
      <div className='flex flex-wrap justify-between m-auto pb-8'>
        <p className='text-4xl text-white font-extrabold '>Live Auctions</p>
        <p className='text-white font-bold border-b-2 border-[#BF50E5]' >EXPLORE MORE</p>
      </div>
      <div className='flex flex-wrap gap-4 w-full justify-center'>
          <div className='bg-[#343444] rounded-3xl py-6 px-5'>
            <div className="relative">
              <Image src={slider1} alt="slide" className="rounded-2xl" />
              <p className='absolute flex items-center gap-1 text-white text-xl font-bold bg-[#14141F] top-4 right-4 rounded-lg px-2'>
              <span><RiHeart3Line /></span>100</p>
              <div className='absolute bottom-2 left-16 md:left-32 bg-[#14141F] flex items-center gap-2 p-2 px-6 rounded-xl'>
                  <RiFirefoxFill className='text-2xl text-[#5142FC]' />
                  <p className='text-white text-xl font-extrabold'>5:{hora}:{minuto}:{segundos}</p>
              </div>
            </div>
            <p className="text-2xl font-extrabold text-white relative py-6">"Triumphant Awakening..
              <span className='absolute right-0 top-7 text-sm font-bold px-3 py-1 bg-[#5142FC] rounded-xl'>BSC</span>
            </p>
            <div className="relative">
                <Image src={perfil1} alt="" className="rounded-2xl" />
                <p className='absolute top-0 left-14 text-gray-400'>Creator</p>
                <p className='absolute top-6 left-14 text-white font-extrabold text-xl'>Salvador Dali</p>
                <p className='absolute right-0 top-0 text-gray-400'>Current Bid</p>
                <p className='absolute right-0 top-7 text-white font-extrabold'>4.89 ETH</p>
            </div>
          </div>
          <div className='bg-[#343444] rounded-3xl py-6 px-5'>
            <div className="relative">
              <Image src={slider2} alt="slide" className="rounded-2xl" />
              <p className='absolute flex items-center gap-1 text-white text-xl font-bold bg-[#14141F] top-4 right-4 rounded-lg px-2'>
              <span><RiHeart3Line /></span>100</p>
              <div className='absolute bottom-2 left-16 md:left-32 bg-[#14141F] flex items-center gap-2 p-2 px-6 rounded-xl'>
                  <RiFirefoxFill className='text-2xl text-[#5142FC]' />
                  <p className='text-white text-xl font-extrabold'>5:{hora}:{minuto}:{segundos}</p>
              </div>
            </div>
            <p className="text-2xl font-extrabold text-white relative py-6">"Triumphant Awakening..
              <span className='absolute right-0 top-7 text-sm font-bold px-3 py-1 bg-[#5142FC] rounded-xl'>BSC</span>
            </p>
            <div className="relative">
                <Image src={perfil2} alt="" className="rounded-2xl" />
                <p className='absolute top-0 left-14 text-gray-400'>Creator</p>
                <p className='absolute top-6 left-14 text-white font-extrabold text-xl'>Salvador Dali</p>
                <p className='absolute right-0 top-0 text-gray-400'>Current Bid</p>
                <p className='absolute right-0 top-7 text-white font-extrabold'>4.89 ETH</p>
            </div>
          </div>
          <div className='bg-[#343444] rounded-3xl py-6 px-5'>
            <div className="relative">
              <Image src={slider3} alt="slide" className="rounded-2xl" />
              <p className='absolute flex items-center gap-1 text-white text-xl font-bold bg-[#14141F] top-4 right-4 rounded-lg px-2'>
              <span><RiHeart3Line /></span>100</p>
              <div className='absolute bottom-2 left-16 md:left-32 bg-[#14141F] flex items-center gap-2 p-2 px-6 rounded-xl'>
                  <RiFirefoxFill className='text-2xl text-[#5142FC]' />
                  <p className='text-white text-xl font-extrabold'>5:{hora}:{minuto}:{segundos}</p>
              </div>
            </div>
            <p className="text-2xl font-extrabold text-white relative py-6">"Triumphant Awakening..
              <span className='absolute right-0 top-7 text-sm font-bold px-3 py-1 bg-[#5142FC] rounded-xl'>BSC</span>
            </p>
            <div className="relative">
                <Image src={perfil3} alt="" className="rounded-2xl" />
                <p className='absolute top-0 left-14 text-gray-400'>Creator</p>
                <p className='absolute top-6 left-14 text-white font-extrabold text-xl'>Salvador Dali</p>
                <p className='absolute right-0 top-0 text-gray-400'>Current Bid</p>
                <p className='absolute right-0 top-7 text-white font-extrabold'>4.89 ETH</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Slider