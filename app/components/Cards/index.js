// CardDesign.js

import React, { useState } from 'react';
import { Card } from 'antd';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import './index.css';

function CardDesign(props) {
    const cardWidth = 300; // Set your desired width here
    const cardHeight = 350 // Calculate the height for a 16:9 aspect ratio

    const { _id, imageSrc, price, vendor_name, location, area, margin, footfall, address, onCardHover } = props;

    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter(); // Initialize the router

    const handleMouseEnter = () => {
        setIsHovered(true);
        onCardHover(address.lat, address.long); // Pass latitude and longitude on hover
    };

    const handleDoubleClick = () => {
        // Navigate to another page on double click
        console.log("Dounle pressed")
        router.push(`/shelf_description/${_id}`); // Replace with the desired page path
    };

    return (
        <Card
            className='m-2'
            hoverable
            bodyStyle={{ padding: 20 }}
            style={{
                width: cardWidth,
                height: cardHeight,
            }}
            cover={<div className='' style={{ overflow: "hidden", height: "210px" }}>
                <img
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    alt="example" src={imageSrc[0]}
                />
            </div>}
            onClick={handleMouseEnter}
            onDoubleClick={handleDoubleClick} // Handle double click
        >
            <div className='cardHeading' style={{ height: 'fit-content' }}>
                <h1>{vendor_name}</h1>
                <h2>₹{price}</h2>
            </div>
            <div className='cardDescription'>
                <div className='secondRow'>
                    {area} ∙ {location}
                    <h2>Margin: {margin}%</h2>
                </div>
                Footfall: {footfall}/per day
            </div>
        </Card>
    );
}

export default CardDesign;
