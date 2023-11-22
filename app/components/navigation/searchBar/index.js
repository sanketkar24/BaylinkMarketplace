import React from "react";
import { useState } from "react";
import data from '/app/data.json';
import { FaArrowAltCircleDown, FaArrowCircleDown, FaArrowDown } from "react-icons/fa";

const CustomSelect = ({ options, value, onChange, placeholder, second }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mx-4 inline-block text-left">
      <div className="">
        <span className={` border border-l-0 ${second ? "border-r-0" : ""} border-t-0 border-b-2 border-gray-300 `}>
          <button
            id="options-menu"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-block justify-center w-full px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200 transition ease-in-out duration-150`}
            aria-haspopup="true"
            aria-expanded="true"
          >
            <div className="flex items-center space-x-4">
              <h1 className="text-xs inline-block whitespace-nowrap">
                {value ? options.find((option) => option.value === value)?.label : placeholder}
              </h1>
              <FaArrowDown className="" />
            </div>
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <div
                key={option.value}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800"
                role="menuitem"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


function SearchBar() {
  const [categories, setCategories] = useState([]);

  const [selectedlocation, setSelectedlocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
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
    <div className="flex bg-white mb-40 desktop:flex-row flex-col space-x-2 desktop:space-y-0 space-y-2 border desktop:rounded-full rounded-2xl p-2 desktop:w-[70%] max-w-2xl w-[90%] ">
      {/* First Dropdown */}

      <div className="flex sm:w-full justify-center items-center">
        <CustomSelect
          options={data.dataVal.map((location) => ({
            value: location.id,
            label: location.location,
          }))}
          value={selectedlocation}
          onChange={(value) => setSelectedlocation(value)}
          placeholder="Location"
        />

        {/* Second Dropdown */}
        <CustomSelect
          options={data.dataVal.map((category) => ({
            value: category.id,
            label: category.category,
          }))}
          value={selectedCategory}
          second={true}
          onChange={(value) => setSelectedCategory(value)}
          placeholder="Category"
        />

      </div>

      {/* Search Input */}
      <div className="flex items-center justify-between px-4">
        <input
          type="text"
          className=" px-4 p-2 mr-8 text-base focus:outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Search Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#22B2E6] text-white tablet:px-4 tablet:py-2 text-xs px-4 py-2 tablet:text-base desktop:rounded-full rounded-md hover:bg-blue-500 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

    </div>

  );
}

export default SearchBar;
