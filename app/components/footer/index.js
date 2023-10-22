"use client";
import React from 'react'
import './index.css'
import Link from 'next/link';
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Find Your
          <br />
          Brand's Perfect
          <br />
          Shelf!
        </div>
        <div className='footerTextSubheading'>
          Search • Find • Elevate
        </div>
      </div>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Company
        </div>
        <div className='footerTextSubheading'>
          About Us
          <br />
          <Link href={'/tnc'}>Terms and Conditions</Link>
          <br />
          <Link href={'/privacy_policy'}>Privacy Policy</Link>
          <br />
          FAQ
        </div>
      </div>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Contact Us
        </div>
        <div className='footerTextSubheading'>
          connect@baylink.in
          <br />
          Innovation center, MIT Manipal
          <br />
          +91 7838687511
        </div>
      </div>
      <div className='footerDivision'>
        <div className='footerTextHeading'>
          Follow Us On
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', gap: '1rem' }}>
          <FaTwitterSquare className='footerIcon' size={'2.5rem'} />
          <Link href={'https://www.instagram.com/baylink.in/'} target='_blank'>
            <FaInstagramSquare className='footerIcon' size={'2.5rem'} />
          </Link>
          <Link href={'https://www.linkedin.com/company/baylink-in/'} target='_blank'>
            <FaLinkedin className='footerIcon' size={'2.5rem'} />
          </Link>
        </div>

      </div>
    </div >
  )
}
export default Footer