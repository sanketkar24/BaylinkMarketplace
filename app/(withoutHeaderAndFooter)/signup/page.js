// create an signup page
"use client";
import React from "react";
import Logo from "../../../images/logo_white.png";
import SideImage from "../../../images/login_img.png";
import Brand_side_img from "../../../images/brand_side_img.png";
import BlueLogo from "../../../images/logo_blue.png";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import "./page.css"
import Link from "next/link";

const Signup = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="flex justify-center items-center w-screen"
      style={{
        height: "fit-content",
      }
      }
    >
      <div className="flex w-full h-full  bg-white">
        <div className="hidden tablet:block flex-1 relative h-screen">
          <div className="relative h-full">
            <Image
              src={props.check == "Brand" ? Brand_side_img : SideImage}
              alt="Logo"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 p-4">
              <Image
                src={props.check == "Brand" ? Logo : BlueLogo}
                alt="Logo"
              />
            </div>
            <div className="absolute bottom-10 left-10 p-4">
              <div
                style={{
                  color:
                    "var(--colour-pallete-secondary-1-s-100, var(--colour-pallete-secondary-1-s-100, #F6F6F6))",
                  fontFamily: "General Sans Regular",
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "125%" /* 50px */,
                }}
              >
                Explore your Favourite
              </div>
              <div className="md:flex">
                {props.check == "Brand" ? (
                  <div
                    style={{
                      color:
                        "var(--colour-pallete-secondary-1-s-100, var(--colour-pallete-secondary-1-s-100, #F6F6F6))",
                      fontFamily: "General Sans Regular",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "125%" /* 50px */,
                    }}
                  >
                    Brands on
                  </div>
                ) : (
                  <div
                    style={{
                      color:
                        "var(--colour-pallete-secondary-1-s-100, var(--colour-pallete-secondary-1-s-100, #F6F6F6))",
                      fontFamily: "General Sans Regular",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "125%" /* 50px */,
                    }}
                  >
                    Stores on
                  </div>
                )}
                <div
                  style={{
                    color:
                      "var(--colour-pallete-primary-p-300, var(--colour-pallete-primary-p-300, #22B2E6))",
                    fontFamily: "General Sans Regular",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "125%",
                  }}
                >
                  &nbsp;Baylink!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <div className="mt-1/2 w-2/3 ">
            <div
              // className={`${generalSansBold.variable} ${generalSansRegular.variable} ${generalSansLight.variable}`}
              id="heading-2"
              style={{ fontFamily: "General Sans Regular" }}
            >
              REGISTER
            </div>
            <div className="laptop:flex ">
              <div className="heading-1">Welcome to&nbsp;</div>
              <div
                style={{
                  color: "#22B2E6",
                }}
                className="heading-1"
              >
                Baylink!
              </div>
            </div>
            <div className="text-secondary-2-s-200 font-GeneralSans text-base font-normal leading-6 mt-6">
              Register using your email or mobile number
            </div>
            <div className="mt-4">
              <div className="input-heading">Brand Name*</div>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full mt-2"
                placeholder="Enter store name"
                
              />
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 mr-4" style={{ marginTop: "20px" }}>
                <div className="input-heading">First Name*</div>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-lg w-full mt-2"
                  placeholder="Enter first name"
                />
              </div>
              <div className="w-1/2" style={{ marginTop: "20px" }}>
                <div className="input-heading">Last Name*</div>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-lg w-full mt-2"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <div className="input-heading">Email or mobile number*</div>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full mt-2"
                placeholder="Enter your Email or mobile number"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <div className="input-heading">Password*</div>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-lg w-full mt-2"
                placeholder="Enter your Password"
              />
            </div>

            <div className="flex items-center mt-4">
              <input type="checkbox" id="terms-checkbox" className="mr-2" />
              <label
                htmlFor="terms-checkbox"
                className="text-sm font-normal leading-6 input-heading"
              >
                I agree to the <a href="#">Terms</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white p-2 rounded-lg w-full border-2 border-blue-300 hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
                Register
              </button>
            </div>
            <div className="flex justify-center mt-4 items-center">
              <hr className="w-full border-t border-gray-300 my-0" />
              <div className="mx-10 text-gray-500 text-center font-GeneralSans text-sm font-normal leading-5">
                Or
              </div>
              <hr className="w-full border-t border-gray-300 my-0" />
            </div>
            <div className="flex w-full" style={{ marginTop: "20px" }}>
              {/* import { FaGoogle } from 'react-icons/fa'; */}

              <button className="mr-10 border border-gray-300 p-2 rounded-lg w-full items-center justify-center">
                <FcGoogle size={24} className="inline-block mr-2" />
                Google
              </button>

              <button className="border border-gray-300 p-2 rounded-lg w-full items-center justify-center">
                <SiFacebook size={24} className="inline-block mr-2" />
                facebook
              </button>
            </div>
            <div
              className="flex w-full justify-center items-center mt-4"
            >
                <div className="flex justify-center mt-4 text-gray-500 text-center font-GeneralSans text-sm font-normal leading-5">
                <div>Already have an account?&nbsp;</div>
              </div>
              <Link
                className="flex justify-center items-center mt-4 text-primary-p-500 font-GeneralSans font-medium text-sm blue-color"
                href='/login'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
