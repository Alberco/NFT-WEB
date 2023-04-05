import Image from "next/image"
import { RiTwitterFill,
  RiFacebookCircleFill,
  RiTelegramFill,
  RiYoutubeFill,
  RiDiscordFill,
  RiVimeoFill,
  RiArrowRightSFill
} from "react-icons/ri";
import logo from "./../../../public/img/logo.png"

function Footer() {
  return (
    <div className="bg-[#0D0D11] flex flex-wrap h-auto py-20 justify-center gap-20 lg:gap-60">
      <div className="w-[20rem] flex flex-col justify-center">
        <Image src={logo} alt="logg" />
        <p className="text-white">Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 lg:gap-10">
        <div className="flex flex-col justify-center">
          <p className="text-white font-bold mb-8">My Account</p>
          <ul className="flex flex-col gap-4 text-white">
            <li>Authors</li>
            <li>Collection</li>
            <li>Author Profile</li>
            <li>Create Item</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white font-bold mb-8">Resources</p>
          <ul className="flex flex-col gap-4 text-white">
            <li>Help & Support</li>
            <li>Live Auctions</li>
            <li>Item Details</li>
            <li>Activity</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white font-bold mb-8">Company</p>
          <ul className="flex flex-col gap-4 text-white">
            <li>Explore</li>
            <li>Contact Us</li>
            <li>Our Blog</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-96">
        <p className="text-white text-xl font-bold mb-8">Subscribe Us</p>
        <form action="" method="get" className="relative mb-6">
          <input type="text" className="text-white bg-transparent border-gray-100/40 outline-none border-2 py-2 rounded-lg w-72 px-3" placeholder="info@youtgmail.com" />
        </form>
        <ul className="flex justify-center gap-3 w-full">
          <li><RiTwitterFill className="text-3xl text-white bg-[#343444] rounded-lg p-1 w-10 h-10 " /></li>
          <li><RiFacebookCircleFill className="text-3xl text-white bg-[#343444] rounded-lg p-1 w-10 h-10 " /></li>
          <li><RiTelegramFill  className="text-3xl text-white bg-[#343444] rounded-lg p-1 w-10 h-10 "/></li>
          <li><RiYoutubeFill className="text-3xl text-white bg-[#343444] rounded-lg p-1 w-10 h-10 " /></li>
          <li><RiVimeoFill className="text-3xl text-white bg-[#343444] rounded-lg p-1 w-10 h-10 " /></li>
          <li><RiDiscordFill className="text-3xl text-white bg-[#343444] rounded-lg p-1 w-10 h-10 "  /></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer