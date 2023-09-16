import React from 'react'
import './index.css'
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
          Terms and Conditions
          <br />
          Privacy Policy
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
      </div>
    </div>
  )
}
export default Footer