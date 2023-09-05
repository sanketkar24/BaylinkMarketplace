import React from "react";
import { useEffect} from 'react';
import { useState } from "react"; 
import data from '/app/data.json';

function SearchBar() {
  const [categories, setCategories] = useState([]);
  const [selectedlocation, setSelectedlocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   console.log("hi");
  //   fetch('./data.json')
  //     // .then((response) => response.json())
  //     // .then((data) => setCategories(data.dataVal))
  //     .then((response)=>console.log(response))
  // }, []);


  const handleSearch = () => {
    // TODO: search logic here
    console.log('location:', selectedlocation);
    console.log('Search Query:', searchQuery);
  };

  return (
    <div className="flex bg-white mb-40 space-x-0 border rounded-full p-2 tablet:w-[50%] w-[70%] ">
      {/* First Dropdown */}
      <select
        className=" rounded p-2 w-[15%] border-r-2 text-xs "
        value={selectedlocation}
        onChange={(e) => setSelectedlocation(e.target.value)}
      >
        <option value="">Location</option>
        {data.dataVal.map((location) => (
          <option key={location.id} value={location.id}>
            {location.location}
          </option>   
        ))}
      </select>

      {/* Second Dropdown */}
      <select
        className=" p-2 w-[15%] border-r-2 text-xs "
        value={selectedlocation}
        onChange={(e) => setSelectedlocation(e.target.value)}
      >
        <option value="">Category</option>
        {data.dataVal.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category}
          </option>   
        ))}
      </select>

      {/* Search Input */}
      <input
        type="text"
        className=" px-4 w-[60%] rounded-full text-sm"
        placeholder="Search..."
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Search Button */}
      <button
        className="bg-sky-500 text-white tablet:px-4 tablet:py-2 text-sm py-2 px-2 tablet:text-base rounded-full hover:bg-blue-500 "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  
  );
}

export default SearchBar;
