import Image from "next/image"
import { RxChevronDown } from "react-icons/rx";
import { RiBook3Line, RiMoonFill, RiSunFill, RiSearchLine } from "react-icons/ri";
import logo from "./../../../public/img/logo.png"
function Navbar() {
  return (
    <nav className="bg-[#14141F] py-6 flex items-center justify-around border-b-2 border-gray-500/10">
        <ul className="flex items-center">
            <li>
                <Image src={logo} alt="logo" />
            </li>
        </ul>
        <ul className="flex gap-5 text-lg font-bold items-center">
            <li className="text-gray-200 text-md">
              <form action="get" className="relative">
                <input type="text" placeholder="Type to search..." className="bg-[#1F1F2C] py-2 rounded-full border-transparent min-w-[35rem] pl-14 focus:caret-indigo-600 focus:border-indigo-600 border-2 outline-0" />
                <RiSearchLine className="absolute top-4 left-6" />
              </form>
            </li>
            <li className="text-gray-200">
                Home
            </li>
            <li className="flex items-center gap-1 text-gray-200">
              Explore
              <span>
                  <RxChevronDown />
              </span>
            </li>
            <li className="flex items-center gap-1 text-gray-200">
              Activity
              <span>
                  <RxChevronDown />
              </span>
            </li>
            <li className="flex items-center gap-1 text-gray-200">
              Comunity
              <span>
                  <RxChevronDown />
              </span>
            </li>
            <li className="flex items-center gap-1 text-gray-200">
              Pages
              <span>
                  <RxChevronDown />
              </span>
            </li>
            <li className="text-gray-200">
              Contact
            </li>
        </ul>
        <ul className="flex font-bold">
            <li>
              <button className="flex flex-row-reverse gap-2 justify-center items-center border-2 w-48 border-[#5142FC] text-white px-2 py-2 rounded-full">
                Wallet connect
                <span>
                  <RiBook3Line />
                </span>
              </button>
            </li>
        </ul>
        <ul className="flex gap-2">
          <li>
            <button className="bg-[#343444] text-white text-2xl rounded-xl p-2">
              <RiSunFill />
            </button>
          </li>
          <li>
            <button className="bg-[#343444] text-white text-2xl rounded-xl p-2">
              <RiMoonFill />
            </button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar