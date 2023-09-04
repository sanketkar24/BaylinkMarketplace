// create an signup page
"use client";
import React from "react";
import Logo from "../../images/logo_white.png";
import SideImage from "../../images/login_img.png";
import Brand_side_img from "../../images/brand_side_img.png";
import BlueLogo from "../../images/logo_blue.png";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {SiFacebook} from "react-icons/si";

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
  console.log('Hellooooooooooooo',props.check);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex w-full h-full  bg-white">
        <div className="sm:hidden md:block flex-1 relative h-screen">
          <div className="relative h-full">
            <Image
              src={props.check == "Brand" ? Brand_side_img : SideImage}
              alt="Logo"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 p-4">
              <Image src={props.check=="Brand"?Logo:BlueLogo} alt="Logo" />
            </div>
            <div className="absolute bottom-10 left-10 p-4">
              <div
                style={{
                  color:
                    "var(--colour-pallete-secondary-1-s-100, var(--colour-pallete-secondary-1-s-100, #F6F6F6))",
                  fontFamily: "General Sans",
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "125%" /* 50px */,
                }}
              >
                Explore your Favourite
              </div>
              <div className="md:flex">
                {props.check=="Brand"?<div
                  style={{
                    color:
                      "var(--colour-pallete-secondary-1-s-100, var(--colour-pallete-secondary-1-s-100, #F6F6F6))",
                    fontFamily: "General Sans",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "125%" /* 50px */,
                  }}
                >
                  Brands on
                </div>:<div
                  style={{
                    color:
                      "var(--colour-pallete-secondary-1-s-100, var(--colour-pallete-secondary-1-s-100, #F6F6F6))",
                    fontFamily: "General Sans",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "125%" /* 50px */,
                  }}
                >
                  Stores on
                </div>}
                <div
                  style={{
                    color:
                      "var(--colour-pallete-primary-p-300, var(--colour-pallete-primary-p-300, #22B2E6))",
                    fontFamily: "General Sans",
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
              style={{
                color:
                  "var(--colour-pallete-primary-p-500, var(--colour-pallete-primary-p-500, #0E87D1))",
                fontFamily: "General Sans",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "150%" /* 27px */,
              }}
            >
              LOGIN
            </div>
            <div
              style={{
                color:
                  "var(--colour-pallete-neutrals-n-900, var(--colour-pallete-neutrals-n-900, #000))",
                fontFamily: "General Sans",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "125%" /* 50px */,
                marginTop: "20px",
              }}
            >
              Welcome Back!
            </div>
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  color:
                    "var(--colour-pallete-secondary-2-s-300, var(--colour-pallete-secondary-2-s-300, #0F0F10))",
                  fontFamily: "General Sans",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%" /* 24px */,
                }}
              >
                Email or mobile number
              </div>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="Enter your Email or mobile number"
                style={{ marginTop: "10px" }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  color:
                    "var(--colour-pallete-secondary-2-s-300, var(--colour-pallete-secondary-2-s-300, #0F0F10))",
                  fontFamily: "General Sans",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%" /* 24px */,
                }}
              >
                Password
              </div>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-lg w-full"
                placeholder="Enter your Password"
                style={{ marginTop: "10px" }}
              />
            </div>
            <div
              className="flex justify-between w-full"
              style={{ marginTop: "10px" }}
            >
              <div className="w-full text-right text-primary-p-500 font-general-sans text-sm font-normal leading-6">
                <a href="#" className="hover:underline text-blue-500">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-lg w-full border-2 border-blue-300 hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                style={{
                  borderRadius: "5px",
                  background: "var(--colour-pallete-primary-p-300, #22B2E6)",
                  boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.04)",
                }}
              >
                Sign In
              </button>
            </div>
            <div
              className="flex justify-center mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <hr
                style={{
                  width: "100%",
                  borderTop: "1px solid #B0B0B0",
                  margin: "0px",
                }}
              />
              <div style={{ margin: "0px 10px" }}>Or</div>
              <hr
                style={{
                  width: "100%",
                  borderTop: "1px solid #B0B0B0",
                  margin: "0px",
                  //   background: "var(--colour-pallete-neutrals-n-60, #)",
                }}
              />
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
              className="flex w-full justify-center items-center"
              style={{ marginTop: "20px" }}
            >
              <div
                className="flex justify-center mt-4"
                style={{
                  color:
                    "var(--colour-pallete-secondary-2-s-200, var(--colour-pallete-secondary-2-s-200, #383839))",
                  textAlign: "center",
                  fontFamily: "General Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%" /* 21px */,
                }}
              >
                <div>Don't have an account?&nbsp;</div>
              </div>
              <div
                className="flex justify-center items-center mt-4"
                style={{
                  color:
                    "var(--colour-pallete-primary-p-500, var(--colour-pallete-primary-p-500, #0E87D1))",
                  fontFamily: "General Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "150%",
                  marginTop: "20px",
                }}
              >
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
