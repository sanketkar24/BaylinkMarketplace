import "./index.css";
import ListingComponent from "../components/shelf_description/listing_component";
import Footer from "../Footer/Footer.js";
import Image from "next/image";
import images_link from "../../public/assets/sample_shelf.png";

export default function ShelfDescription({ children }) {
  return (
    <div style={{ fontFamily: "General Sans-Regular" }}>
      <div className="grid grid-cols-2 gap-4 mx-6 my-4">
        <div style={{ width: "100%" }}>
          <Image src={images_link} className="big-image" alt="" layout="responsive" />
        </div>
        <div className="grid grid-cols-2 gap-4" style={{ width: "100%" }}>
          <Image src={images_link} alt="" layout="responsive" />
          <Image src={images_link} alt="" layout="responsive" />
          <Image src={images_link} alt="" layout="responsive" />
          <Image src={images_link} alt="" layout="responsive" />
        </div>
      </div>
      <div className="flex mx-12">
        <div className="w-1/2">
          <div className="flex justify-between">
            <div>
              <div className="heading-1">Biffco Entriprises</div>
              <div className="heading-2">
                3891 Ranchview Dr. Richardson, California 62639
              </div>
            </div>

            <div className="profile-image mr-4 mb-4"></div>
          </div>
          <div className="hoizontal-rular"></div>
          <div className="heading-3 mt-4">Information</div>
          <div className="flex w-2/4 justify-between my-2">
            <div className="text-bold">Space Type:</div>
            <div className="text">Text</div>
          </div>
          <div className="flex w-2/4 justify-between my-2">
            <div className="text-bold">Footfall:</div>
            <div className="text">Text</div>
          </div>
          <div className="flex w-2/4 justify-between my-2">
            <div className="text-bold">Store Size:</div>
            <div className="text">Text</div>
          </div>
          <div className="flex w-2/4 justify-between my-2">
            <div className="text-bold">Category:</div>
            <div className="text">Text</div>
          </div>
          <div className="flex w-2/4 justify-between my-2">
            <div className="text-bold">Payment collection Period:</div>
            <div className="text">Text</div>
          </div>
          <div className="hoizontal-rular"></div>
          <div className="heading-3 mt-4">Location</div>
          <div className="text mt-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </div>
          <div className="text">
            Have more questions about this space or area? Just ask!
          </div>
          <div className="button my-4">
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
          <div className="hoizontal-rular"></div>
          <div className="heading-3 mt-4">Similar Spaces </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="border border-gray-300 rounded-md p-4 w-3/4 mb-8 accounting-box">
            <div className="heading-2">Price</div>
            <div className=" justify-between items-center mt-4">
              <div className="heading-2 ">₹ 2400 per month</div>
              <div className="heading-2 mt-6">Dates</div>
            </div>
{/* Date picker */}
            <div className="flex items-center mt-4">
              <div className="mr-2 heading-2">Start:</div>
              <input
                type="date"
                className="border border-gray-300 rounded-md px-3 py-2 w-40"
              />
              <div className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="ml-2 mr-2 heading-2">End:</div>
              <input
                type="date"
                className="border border-gray-300 rounded-md px-3 py-2 w-40"
              />
            </div>
            <div className="flex justify-between ">
              <div className="heading-2 mt-6">
                <div>Your Price</div>
                <div >
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
      <div className="flex justify-between mx-8">
        <ListingComponent />
        <ListingComponent />
        <ListingComponent />
        <ListingComponent />
      </div>
      <div className="flex justify-between mx-8">
        <ListingComponent />
        <ListingComponent />
        <ListingComponent />
        <ListingComponent />
      </div>
      <Footer />
    </div>
  );
}
