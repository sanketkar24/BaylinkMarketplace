'use client';

import React, { useState, useEffect } from 'react';
import ListingMenu from '../../components/listingMenu';
import CardDesign from '../../components/Cards/index';
import Map from '../../components/map/index.js';
import { Pagination } from 'antd';

import axios from 'axios'; // should not use require , its in common js format , use import instead for es6
// import data from '../../sampledata.json';
import './page.css';

function Listings() {

    const [mapToggle, setMapToggle] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [latitude, setLatitude] = useState(28.612894);
    const [longitude, setLongitude] = useState(77.229446);
    const [visibleData, setVisibleData] = useState([]);
    const [apiData, setApiData] = useState([]);

    const pageSize = 12; // Number of cards per page

    const handleToggleChange = (checked) => {
        setMapToggle(checked);
        console.log('mapToggle', mapToggle);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        setVisibleData(apiData.slice(startIndex, endIndex));
    };

    const handleCardHover = (lat, long) => {
        // Update latitude and longitude when hovering over a card
        setLatitude(lat);
        console.log(lat, long)
        setLongitude(long);
    };
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://baylink-marketplace-server-eta.vercel.app/getListing',
            );
            console.log(result.data.data)
            // setData(result.data.data);
            setApiData(result.data.data);
            setVisibleData(result.data.data.slice(startIndex, endIndex))
        };
        fetchData();
    }, []);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // const visibleData = apiData.data.slice(startIndex, endIndex);
    // setVisibleData(apiData.slice(startIndex, endIndex))

    return (
        <div className='listingPage'>

            <ListingMenu onToggleChange={handleToggleChange} />

            <div className='listingSection laptop:flex-row px-4 flex-col-reverse'>
                <div className='listingMain'>
                    <div className='cardsDiv'>
                        {apiData.length === 0 ? (
                            Array(4).fill(null).map((_, index) => (
                                <div className="card loading" key={index}>
                                    <div className="image"></div>
                                    <div className="content">
                                        <h4></h4>
                                        <div className="description"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            visibleData.map((item, index) => (
                                <CardDesign
                                    {...item}
                                    key={index}
                                    address={item.address}
                                    onCardHover={handleCardHover}
                                />
                            ))
                        )}
                    </div>
                    <div className="pagination-container">
                        <Pagination
                            current={currentPage}
                            total={apiData.length}
                            pageSize={pageSize}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
                {mapToggle && (
                    <div className='mapDiv tablet:sticky tablet:px-8 py-8'>
                        <Map lat={latitude} lng={longitude} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Listings;
