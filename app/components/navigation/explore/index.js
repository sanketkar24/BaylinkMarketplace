import React from 'react'
import Image from 'next/image';
import img4 from '../../../../images/arrow_icon.png';
import Link from 'next/link';

const handleClick = (e, path) => {
    if (path === "/Listings") {
      console.log("I am being redirected to the listings page");
    }
  };

function explore() {
  return (
    <main className='flex flex-col justify-center items-center h-[100%] min-w-screen '>
    <div className="text-4xl pt-20 pb-5"><span className="font-semibold bg-amber-300 ">Explore</span></div>
      <div className='font-light tablet:text-base text-sm '>Explore exciting offline shelf space opportunities for your  </div>
      <div className='font-light tablet:text-base text-sm '> brand's products and services right here</div>
      <div className='flex tablet:flex-row flex-col flex-wrap overflow- mt-8 mb-8 items-center text-center justify-center'>
      <div className=" flex flex-col h-96 w-96 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-[url('../images/explore_img1.jpeg')] bg-contain text-white font-bold text-lg text-start px-4 justify-end pb-10">
           StoreName
           <div className="text-sm font-light text-white">
            Location
        </div> 
        </div>
        <div className=" flex flex-col h-96 w-96 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-[url('../images/explore_img2.jpeg')] bg-contain text-white font-bold text-lg text-start px-4 justify-end pb-10">
           StoreName
           <div className="text-sm font-light text-white">
            Location
        </div> 
        </div>
        <div className=" flex flex-col h-96 w-96 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-[url('../images/explore_img3.jpeg')] bg-contain text-white font-bold text-lg text-start px-4 justify-end pb-10">
           StoreName
           <div className="text-sm font-light text-white">
            Location
        </div> 
        </div>
        <div className=" flex flex-col h-96 w-96 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-[url('../images/explore_img4.jpeg')] bg-contain text-white font-bold text-lg text-start px-4 justify-end pb-10">
           StoreName
           <div className="text-sm font-light text-white">
            Location
        </div> 
        </div>
        <div className=" flex flex-col h-96 w-96 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-[url('../images/explore_img5.jpeg')] bg-contain text-white font-bold text-lg text-start px-4 justify-end pb-10">
           StoreName
           <div className="text-sm font-light text-white">
            Location
        </div> 
        </div>
        <div className=" flex flex-col h-96 w-96 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-gray-700 text-white font-bold text-2xl px-4 pt-20 items-center">
           Looking to list your <span className='pt-1'>Shelf ?</span>
            <Link href={"/listings"} className='text-black w-[50%] rounded-full py-6 mt-20 text-xl bg-white hover:bg-[#22B2E6] ease-in duration-300 hover:text-white flex flex-row px-6 '>
                Join us <Image src={img4} alt="img1" className='h-8 w-8 ml-2' />
            </Link>
        </div>
      </div>
    </main>
  )
}

export default explore