import { RiBookmarkFill,RiImage2Fill, RiLayoutGridFill, RiCalendarFill } from "react-icons/ri";

function Pasarela() {
  return (
    <section className="bg-[#14141F] w-full">
        <div className="flex gap-4 py-20 flex-wrap px-4 justify-center lg:flex-nowrap lg:px-0">
                <div className="w-96">
                    <RiCalendarFill  className="text-3xl text-white bg-[#5142FC] w-14 h-14 p-3 rounded-lg"/>
                    <p className="text-2xl gap-4 text-white font-extrabold py-2 mt-4">Set Up Your Wallet</p>
                    <p className="text-white">Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                </div>
                <div className="w-96" >
                    <RiLayoutGridFill  className="text-3xl text-white bg-[#47A432] w-14 h-14 p-3 rounded-lg"/>
                    <p className="text-2xl gap-4 text-white font-extrabold py-2 mt-4">Create Your Collection</p>
                    <p className="text-white">Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection</p>
                </div>
                <div className="w-96">
                    <RiImage2Fill  className="text-3xl text-white bg-[#9835FB] w-14 h-14 p-3 rounded-lg "/>
                    <p className="text-2xl gap-4 text-white font-extrabold py-2 mt-4">Add Your NFTs</p>
                    <p className="text-white">Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                </div>
                <div className="w-96">
                    <RiBookmarkFill  className="text-3xl text-white bg-[#df4949] w-14 h-14 p-3 rounded-lg "/>
                    <p className="text-2xl gap-4 text-white font-extrabold py-2 mt-4">List Them For Sale</p>
                    <p className="text-white">Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!</p>
                </div>
        </div>
    </section>
  )
}

export default Pasarela