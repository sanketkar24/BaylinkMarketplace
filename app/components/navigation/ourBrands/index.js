import React from 'react'
import Marquee from "react-fast-marquee";

import PARADYES from '../../../../images/paradyes_logo.png';
import ALPINO from '../../../../images/alpino.png';
import OFFO_STORE from '../../../../images/offo_store.jpg';
import SLEEPY_OWL from '../../../../images/sleepy_owl.png';
import PEPPER_ORIGINALS from '../../../../images/pepper_originals.webp';
import FOMO from '../../../../images/fomo_logo.jpeg';

import Image from 'next/image';
function brands() {
  return (
    <>
      <main className='flex flex-col justify-center items-center h-[100%] bg-orange-100'>
        <h1 className="text-4xl pt-20 pb-5">Our <span className="font-semibold bg-blue-300 px-1 rounded-md ">Brands</span></h1>
        <p className='font-light tablet:text-base text-sm '>Discover the brands thriving through our services in the retail marketplace.</p>
        <div className='flex tablet:flex-row flex-col mt-8 mb-8 items-center text-center'>
          <div className="my-10">
            <Marquee speed={"60"} pauseOnHover={true} className='align-middle'>
              <Image src={PARADYES} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
              <Image src={ALPINO} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
              <Image src={OFFO_STORE} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
              <Image src={FOMO} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
              <Image src={PEPPER_ORIGINALS} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
              <Image src={OFFO_STORE} className='mx-10 w-2/3' alt="" preview={false} height={80} ></Image>
            </Marquee>
          </div>
        </div>
      </main>
    </>
  )
}

export default brands