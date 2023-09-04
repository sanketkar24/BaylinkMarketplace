'use client'
import React, { useState } from 'react';
import ListingMenu from '../../components/listingMenu';
import CardDesign from '../../components/Cards/index';
import Map from '../../components/map/index.js';
import { Pagination } from 'antd';
import data from '../../sampledata.json';
import './page.css';

function Listings() {
    const apiData = data;

    const [mapToggle, setMapToggle] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [latitude, setLatitude] = useState(28.612894);
    const [longitude, setLongitude] = useState(77.229446);
    const pageSize = 10; // Number of cards per page

    const handleToggleChange = (checked) => {
        setMapToggle(checked);
        console.log('mapToggle', mapToggle);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCardHover = (lat, long) => {
        // Update latitude and longitude when hovering over a card
        setLatitude(lat);
        console.log(lat, long)
        setLongitude(long);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const visibleData = apiData.data.slice(startIndex, endIndex);

    return (
        <div className='listingPage'>
            <ListingMenu onToggleChange={handleToggleChange} />
            <div className='listingSection'>
                <div className='listingMain'>
                    <div className='cardsDiv'>
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
                {mapToggle ? (
                    <div className='mapDiv sticky'>
                        <Map lat={latitude} lng={longitude} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Listings;
