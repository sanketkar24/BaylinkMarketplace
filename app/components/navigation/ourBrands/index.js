import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from '../../../../images/paradyes_logo.webp';
import img2 from '../../../../images/pepper_originals.webp';
import img3 from '../../../../images/offo_store.jpg';
import img4 from '../../../../images/img4.jpeg';
import img5 from '../../../../images/img5.jpeg';
// import img6 from '../../../../images/pepper_marquee.jpeg';
import Image from 'next/image';
function brands() {
  return (
    <>
    <main className='flex flex-col justify-center items-center h-[100%] bg-orange-100'>
  <div className="text-4xl pt-20 pb-5">Our <span className="font-semibold bg-blue-300 px-1 rounded-md ">Brands</span></div>
    <div className='font-light tablet:text-base text-sm '>Discover the brands thriving through our services in the retail marketplace.</div>
    <div className='flex tablet:flex-row flex-col mt-8 mb-8 items-center text-center'>
    <div className="my-10">
              <Marquee speed={"60"} pauseOnHover={true}>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
                <Image src={img2} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
                <Image src={img3} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
                <Image src={img2} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
                <Image src={img2} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
                <Image src={img2} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
              </Marquee>
            </div>
    </div>
  </main>
    </>
  )
}

export default brands