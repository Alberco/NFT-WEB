import React from 'react'
import Image from "next/image"
import { RxChevronDown } from "react-icons/rx";
import { RiBook3Line, RiMoonFill, RiSunFill, RiSearchLine, RiMenuFill } from "react-icons/ri";
import logo from "./../../../public/img/logo.png"

function NavbarMobile() {
  return (
    <nav className="bg-[#14141F] px-4 py-6 flex items-center justify-between border-b-2 border-gray-500/10">
    <ul className="flex items-center">
        <li>
            <Image src={logo} alt="logo" />
        </li>
    </ul>
    <div className='flex gap-2'>
        <ul className="flex font-bold">
            <li>
            <button className="flex flex-row-reverse gap-2 justify-center items-center border-2 w-10 border-[#5142FC] text-white py-2 rounded-xl">
                <span>
                <RiBook3Line />
                </span>
            </button>
            </li>
        </ul>
        <ul className="flex gap-2">
        <li>
            <button className="bg-[#343444] text-white text-lg rounded-xl p-2">
            <RiSunFill />
            </button>
        </li>
        <li>
            <button className="bg-[#343444] text-white text-lg rounded-xl p-2">
            <RiMoonFill />
            </button>
        </li>
        <li>
            <button className="bg-[#343444] text-white text-lg rounded-xl p-2">
            <RiMenuFill />
            </button>
        </li>
        </ul>
    </div>
</nav>
  )
}

export default NavbarMobile