"use client";
import React from 'react'
import './index.css'
import Link from 'next/link';
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='flex tablet:flex-row p-8 flex-col bg-[#383839] tablet:space-y-0 space-y-8'>

      <div className='flex flex-col w-full '>
        <div className='text-2xl py-2 heading-color'>
          Find Your  <br  className='tablet:block hidden'/>
          Brand's Perfect <br  className='tablet:block hidden'/>
          Shelf!
        </div>
        <div className='footerTextSubheading subheading-color'>
          Search • Find • Elevate
        </div>
      </div>

      <div className='w-full'>
        <div className='text-2xl py-2 heading-color'>
          Company
        </div>
        <div className='footerTextSubheading flex flex-col subheading-color'>
          <h1>About Us</h1>
          <Link href={'/tnc'}>Terms and Conditions</Link>
          <Link href={'/privacy_policy'}>Privacy Policy</Link>
          <h1>FAQs</h1>
        </div>
      </div>

      <div className='w-full'>
        <div className='text-2xl py-2 heading-color'>
          Contact Us
        </div>
        <div className='footerTextSubheading subheading-color'>
          connect@baylink.in
          <br />
          Innovation center, MIT Manipal
          <br />
          +91-7838687511
        </div>
      </div>

      <div className='w-full'>
        <div className='text-2xl py-2 heading-color'>
          Follow Us On
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', gap: '1rem' }}>
          <FaTwitterSquare className='subheading-color' size={24} />
          <Link href={'https://www.instagram.com/baylink.in/'} target='_blank'>
            <FaInstagramSquare className='subheading-color' size={24} />
          </Link>
          <Link href={'https://www.linkedin.com/company/baylink-in/'} target='_blank'>
            <FaLinkedin className='subheading-color' size={24} />
          </Link>
        </div>

      </div>
    </div >
  )
}
export default Footer