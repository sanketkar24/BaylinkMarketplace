import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from '../../../../images/paradyes_logo.webp';
import img2 from '../../../../images/img2.jpeg';
import img3 from '../../../../images/img3.jpeg';
import img4 from '../../../../images/img4.jpeg';
import img5 from '../../../../images/img5.jpeg';
import img6 from '../../../../images/pepper_marquee.jpeg';
import Image from 'next/image';
function brands() {
  return (
    <>
    <main className='flex flex-col justify-center items-center h-[100%] bg-orange-100'>
  <div className="text-4xl pt-20 pb-5">Our <span className="font-semibold bg-blue-400 ">Brands</span></div>
    <div className='font-light tablet:text-base text-sm '>Discover the brands thriving through our services in the retail marketplace.</div>
    <div className='flex tablet:flex-row flex-col mt-8 mb-8 items-center text-center'>
    <div className="my-10">
              <Marquee speed={"80"} pauseOnHover={true}>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
                <Image src={img1} className='mx-10 w-2/3' alt="" preview={false}></Image>
              </Marquee>
            </div>
    </div>
  </main>
    </>
  )
}

export default brands