import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import './index.css';

function Explore() {
  const [visibleData, setVisibleData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('https://baylinkmarketplaceserver.onrender.com/getListing');
      setVisibleData(result.data.data.slice(0, 4));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (item) => {
    if (item && item._id) {
      console.log(`I am being redirected to the shelf description page for ${item._id}`);
      // You can use router.push or Link for navigation here
    }
  };

  return (
    <main className='flex flex-col justify-center items-center h-[100%] min-w-screen '>
      <h1 className="text-4xl pt-20 pb-5"><span className="font-semibold bg-amber-300">Explore</span></h1>
      <h2 className='font-light tablet:text-base text-sm '>Explore exciting offline shelf space opportunities for your</h2>
      <h2 className='font-light tablet:text-base text-sm '>brand's products and services right here</h2>
     
      <div className='flex tablet:flex-row flex-col flex-wrap overflow-hidden mt-8 mb-8 items-center text-center justify-center'>
        {visibleData.length === 0 ? (
          Array(4).fill(null).map((_, index) => (
            <div className="card w-80 h-80 loading mx-4 my-4 hover:shadow-2xl rounded-lg bg-contain" key={index}>
              <div className="image"></div>
            </div>
          ))
        ) : (
          visibleData.map((item, index) => (
            <Link href={`/shelf_description/${item._id}`} key={item._id}>
              <div
                onClick={() => handleClick(item)}
                style={{
                  backgroundImage: `url(${visibleData.length > 0 && visibleData[index].imageSrc[0]})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat'
                }}
                className="flex flex-col w-80 h-80 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-contain text-white font-bold text-lg text-start px-4 justify-end pb-10"
              >
                {visibleData.length > 0 && visibleData[index].vendor_name}
                <div className="text-sm font-light text-white">
                  {visibleData.length > 0 && visibleData[index].area}
                </div>
              </div>
            </Link>
          ))
        )}
        <div className="flex flex-col h-80 w-80 border mx-4 my-4 hover:shadow-2xl rounded-lg bg-gray-700 text-white font-bold text-2xl px-4 pt-20 items-center">
          Looking to list your <span className='pt-1'>Shelf ?</span>
          <Link href={"/listings"} className='text-black w-[50%] rounded-full py-4 mt-20 text-xl bg-white hover:bg-[#22B2E6] ease-in duration-300 hover:text-white items-center flex flex-row px-4 '>
            <h1>
              Join us
            </h1>
            <FaArrowRight alt="img1" className='h-6 w-6 ml-2 hover:text-white' />
          </Link>
        </div>
      </div>
      
    </main>
  );
}

export default Explore;
