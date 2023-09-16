import React from "react";
import "./Footer.css";
import Image from "next/image";
import verifiedImage from "../../public/assets/badge-check.png";
import LinkedIn from "../../public/assets/LinkedIn-svg.png";
import instagram from "../../public/assets/Insta.png";
import twitter from "../../public/assets/Twitter.png";

const Footer = () => {
  return (
    <div className="Footer ">
      <div className="lg:h-60 lg:flex  sm:h-auto sm:grid sm:grid-cols-1 sm:gap-4 sm:content-center md:h-auto md:grid md:grid-cols-2 md:gap-4 md:content-center  items-center justify-center">
        <div className="flex-1 lg:mb-0 lg:mt-0 md:mt-20 md:ml-20 md:mb-20 sm:mt-20 h-40">
          <div className="heading sm:text-center">
            Find Your Brand's Perfect Shelf!
          </div>
          <div className="sm:flex sm:items-center sm:justify-center">
            <div className="row sm:w-auto">
              <div className="blue-text">Search</div>

              <div className="vertical-divider"></div>
              <div className="blue-text w-25 center">Find</div>
              <div className="vertical-divider"></div>
              <div className="blue-text w-25 center">Elevate</div>
            </div>
          </div>
        </div>
        <div className="flex-1 md:mb-20 lg:mb-0 lg:mt-0 md:mt-20 sm:mt-20 h-40">
          <div className="heading sm:text-center">Company</div>
          <div className="blue-text sm:text-center">About Us</div>
          <div className="blue-text sm:text-center">Term and Conditions</div>
          <div className="blue-text sm:text-center">Privacy Policy</div>
          <div className="blue-text sm:text-center">FAQ</div>
        </div>
        <div className="flex-1 sm:mt-20 lg:mt-0 h-40">
          <div className="heading sm:text-center">Contact Us</div>
          <div className="blue-text sm:text-center">connect@bylink.com</div>
          <div className="blue-text sm:text-center">
            Innovation center, MIT Manipal
          </div>
          <div className="blue-text sm:text-center">+91 7838687511</div>
        </div>
        <div className="flex-1 md:mr-20 sm:mt-20 lg:mt-0 h-40 justify-end">
          <div className="heading  md:text-right sm:text-center ">
            Follow Us On
          </div>
          <div className="footer-col-row flex sm:items-center sm:justify-center md:items-end md:justify-end">
            <div className="flex">
              <Image className="margin-around" src={LinkedIn}></Image>
              <Image className="margin-around" src={instagram}></Image>
              <Image className="margin-around" src={twitter}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
