import React from 'react'
import img1 from '../../../../images/img1.jpeg';
import img2 from '../../../../images/img2.jpeg';
import img3 from '../../../../images/img3.jpeg';
import img4 from '../../../../images/img4.jpeg';
import img5 from '../../../../images/img5.jpeg';
import img6 from '../../../../images/img6.jpeg';
import Image from 'next/image';

function cards() {
  return (
    <>
      <main className='flex flex-col justify-center items-center h-[100%]'>
        <h1 className="text-4xl pt-20 pb-5">Our <span className="font-semibold bg-amber-300 ">Offerings</span></h1>
        <h2 className='font-light tablet:text-base text-sm '>Discover our exclusive offerings engineered to elevate </h2>
        <div className='font-light tablet:text-base text-sm '> your brand's growth and success.</div>
        <div className='flex flex-row flex-wrap mt-8 mb-8 items-center text-center'>
          <div className='flex flex-col flex-wrap h-40 w-40 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '>
            <Image src={img1} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <h2 className='pb-2 px-4'>Relationship Manager</h2>
          </div>
          <div className='flex flex-col h-40 w-40 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '>
            <Image src={img2} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <h2 className='pb-2 px-4'>Analytics</h2>
          </div>
          <div className='flex flex-col h-40 w-40 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '>
            <Image src={img3} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <h2 className='pb-2 px-4'>Sales Representative</h2>
          </div>
          <div className='flex flex-col h-40 w-40 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '>
            <Image src={img4} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <h2 className='pb-2 px-4'>Post Partnership Services</h2>
          </div>
          <div className='flex flex-col h-40 w-40 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '>
            <Image src={img5} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <h2 className='pb-2 px-4'>Verified Connects</h2>
          </div>
          <div className='flex flex-col h-40 w-40 border mb-4 border-slate-500 rounded-xl hover:shadow-2xl bg-white mx-4 '>
            <Image src={img6} alt="img1" className='h-20 w-20 justify-center items-center m-auto just' />
            <h2 className='pb-2 px-4'>Category Buckets</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default cards