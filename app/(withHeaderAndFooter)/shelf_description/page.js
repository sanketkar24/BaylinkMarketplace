'use client'
import "./index.css";
import "../../(withHeaderAndFooter)/listings/page.css"
import ListingComponent from "../../components/shelf_description/listing_component";
import Footer from "../../Footer/Footer.js";
import Image from "next/image";
import images_link from "../../../public/assets/sample_shelf.png";
import blockImage from "../../../images/view-grid.png"
import data from "../../sampledata.json";
import ShelfDescription_Data from "./shelfDescription.json";
import React, { useState, useRef } from "react";
import CardDesign from "../../components/Cards/index";
import { Pagination } from "antd";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { DatePicker, Space } from "antd";


const { RangePicker } = DatePicker;

export default function ShelfDescription({ children }) {
  const apiData = data;
  const shelf_description_data = ShelfDescription_Data.data[0];

   const [currentPage, setCurrentPage] = useState(1);
   const [size, setSize] = useState("large");
   const [isOpen, setIsOpen] = useState(false);
   
   const pageSize = 12; // Number of cards per page

   

   const handlePageChange = (page) => {
     setCurrentPage(page);
   };

   const handleCardHover = (lat, long) => {
     // Update latitude and longitude when hovering over a card
     setLatitude(lat);
     console.log(lat, long);
     setLongitude(long);
   };
   const img_link = shelf_description_data.imageSrc;
    // for (let i = 0; i < shelf_description_data.data[0].imageSrc.length; i++) {
    //   img_link.push(shelf_description_data.data[0].imageSrc);
    // }
  //  console.log(shelf_description_data.data[0].imageSrc);
   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;
   const visibleData = apiData.data.slice(startIndex, endIndex);


   const imageRef = useRef(null);

   const handleShowMoreClick = () => {
     // Trigger a click event on one of the images (e.g., the first image)
     
     setIsOpen(true);
   };

    const handleClose = () => {
      setIsOpen(false);
    };

const onChange = (date, dateString) => {
  console.log(date, dateString);
};


   
  return (
    <div style={{ fontFamily: "General Sans Regular", paddingTop: "4.5rem", background: "#FEFDFD" }}>
      <div className={`grid tablet:grid-cols-2 grid-cols-1 gap-4 mx-6 mb-4 `}>
        <SlideshowLightbox
          onClose={handleClose}
          open={isOpen}
          className="container grid grid-cols-1 gap-2 mx-auto"
        >
          {img_link.map((item, index) => (
            <img
              ref={index === 0 ? imageRef : null}
              className={`w-full rounded ${index > 0 ? "hidden" : ""}`}
              src={item}
              key={index}
            />
          ))}
        </SlideshowLightbox>
        <div className="relative hidden tablet:block">
          <SlideshowLightbox
            className={`container relative grid grid-cols-2 gap-2 mx-auto `}
          >
            {img_link.map((item, index) => (
              <img
                className={`w-full rounded ${
                  index === 0 || index > 4 ? "hidden" : ""
                }`}
                src={item}
                key={index}
              />
            ))}
          </SlideshowLightbox>
          <div
            className="absolute bottom-10 right-4 bg-white text-black px-4 py-2 rounded"
            onClick={handleShowMoreClick}
          >
            <div className="flex">
              <Image src={blockImage} width="20px" height="20px" />
              <div className="ml-2">Show All Photos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="laptop:flex mx-12">
        <div className="laptop:w-1/2">
          <div className="flex justify-between">
            <div>
              <div className="heading-1 w-96">
                {shelf_description_data.title}
              </div>
              <div className="heading-2">
                {shelf_description_data.description}
              </div>
            </div>

            <div className="profile-image mr-4 mb-4"></div>
          </div>
          <div className="hoizontal-rular"></div>
          <div class="flex-col justify-start items-start gap-8 inline-flex mb-4">
            <div class="self-stretch text-black text-2xl font-medium leading-loose">
              Information
            </div>
            <div class="self-stretch  flex-col justify-start items-start gap-4 flex">
              <div class="self-stretch justify-between items-start gap-[72px] inline-flex">
                <div class="text-black text-base font-medium leading-normal">
                  Space Type:
                </div>
                <div class="text-black text-base font-normal leading-normal">
                  Text
                </div>
              </div>
              <div class="self-stretch justify-between items-start gap-[111px] inline-flex">
                <div class="text-black text-base font-medium leading-normal">
                  Footfall:
                </div>
                <div class="text-black text-base font-normal leading-normal">
                  Text
                </div>
              </div>
              <div class="self-stretch justify-between items-start gap-[91px] inline-flex">
                <div class="text-black text-base font-medium leading-normal">
                  Store Size:
                </div>
                <div class="text-black text-base font-normal leading-normal">
                  Text
                </div>
              </div>
              <div class="self-stretch justify-between items-start gap-[91px] inline-flex">
                <div class="text-black text-base font-medium leading-normal">
                  Category:
                </div>
                <div class="text-black text-base font-normal leading-normal">
                  Text
                </div>
              </div>
              <div class="self-stretch justify-between items-start gap-[91px] inline-flex">
                <div class="grow shrink basis-0 text-black text-base font-medium leading-normal">
                  Payment collection Period:
                </div>
                <div class="text-black text-base font-normal leading-normal">
                  Text
                </div>
              </div>
            </div>
          </div>
          <div className="hoizontal-rular"></div>
          <div className="heading-3 mt-4">Location</div>
          <div className="text mt-4">{shelf_description_data.location}</div>
          <div className="text">
            Have more questions about this space or area? Just ask!
          </div>
          <div className="button my-4 flex">
            <button>Contact the Owner</button>
          </div>
          <div className=" flex">
            <div className="border border-gray-300 rounded-md p-4 w-3/4 mb-8 accounting-box"></div>
          </div>
          <div className="heading-3 mt-4">About the Space (Optional) </div>
          <div className="text mt-4 mb-4">
            Fames pellentesque risus tempor massa. Scelerisque sed tellus eget
            et enim aliquet at neque. Mauris purus iaculis gravida eget sagittis
            amet nec venenatis. Ornare diam aliquet sed molestie turpis
            facilisis sit. Elementum sed ut orci facilisi iaculis vestibulum
            blandit. Libero facilisi lectus morbi aliquam orci. A adipiscing
            urna aliquam purus imperdiet. Magnis interdum mi amet lobortis
            posuere magna nibh. Quis leo enim auctor risus et malesuada urna.
            Varius donec massa dignissim platea nisi.
          </div>
        </div>
        <div className="laptop:w-1/2  flex justify-center ">
          <div className="border border-gray-300 rounded-md p-4 w-3/4 mb-8 accounting-box sticky1">
            <div className="heading-2">Price</div>
            <div className=" justify-between items-center mt-4">
              <div className="heading-2 ">₹ 2400 per month</div>
              <div className="heading-2 mt-6">Dates</div>
            </div>
            {/* Date picker */}
            <RangePicker onChange={onChange} size={size} />
            <div className="flex justify-between ">
              <div className="heading-2 mt-6">
                <div>Your Price</div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2  mt-4 w-1/2"
                    placeholder="₹    2000/month"
                  />
                </div>
              </div>
              <div className="heading-2 mt-6 w-1/2">
                <div>Commission</div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2  mt-4 w-1/2"
                    placeholder="10%"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 text-white p-2 rounded-lg w-full border-2 border-blue-300 hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                style={{
                  borderRadius: "5px",
                  background: "var(--colour-pallete-primary-p-300, #22B2E6)",
                  boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.04)",
                }}
              >
                Make an Offer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="listingMain my-10">
        <div className="hoizontal-rular w-screen"></div>
        <div className="heading-3 mt-4 mx-10">Similar Spaces </div>
        <div className="cardsDiv">
          {visibleData.map((item, index) => (
            <CardDesign
              key={index}
              {...item}
              address={item.address}
              onCardHover={handleCardHover} // Pass hover handler
            />
          ))}
        </div>
        <div className="pagination-container">
          <Pagination
            current={currentPage}
            total={apiData.data.length}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}



{/* <div className="grid grid-cols-2 gap-4 mx-6 my-4">
  <SlideshowLightbox className="flex">
    {img_link.map((item, index) => (
      <img
        className={`w-full rounded  ${index > 0 ? "hidden" : ""}`}
        src={item}
        key={index}
      />
    ))}
  </SlideshowLightbox>

  {img_link.length > 2 ? (
    <SlideshowLightbox className="container grid grid-cols-2 gap-2 mx-auto">
      {img_link.map((item, index) => (
        <img
          className={`w-full h-full rounded ${index > 1 ? "hidden" : ""}`}
          src={item}
          key={index}
        />
      ))}
    </SlideshowLightbox>
  ) : (
    <SlideshowLightbox className=" ">
      {img_link.map((item, index) => (
        <img
          className={`w-full h-full mb-4 rounded ${index > 1 ? "hidden" : ""}`}
          src={item}
          key={index}
        />
      ))}
    </SlideshowLightbox>
  )}
</div>; */}
