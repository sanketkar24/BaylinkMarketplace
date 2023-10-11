// CardDesign.js

import React, { useState } from 'react';
import { Avatar, Card } from 'antd';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import './index.css';

function CardDesign(props) {
    const cardWidth = 300; // Set your desired width here
    const cardHeight = (cardWidth * 9) / 16; // Calculate the height for a 16:9 aspect ratio

    const { imageSrc, price, vendor_name, location, area, margin, footfall, address, onCardHover } = props;

    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter(); // Initialize the router

    const handleMouseEnter = () => {
        setIsHovered(true);
        onCardHover(address.lat, address.long); // Pass latitude and longitude on hover
    };

    const handleDoubleClick = () => {
        // Navigate to another page on double click
        router.push('/shelf_description'); // Replace with the desired page path
    };

    return (
        <Card
            hoverable
            style={{
                width: 300,
            }}
            cover={<img alt="example" src={imageSrc[0]} />}
            onClick={handleMouseEnter}
            onDoubleClick={handleDoubleClick} // Handle double click
        >
            <div className='cardHeading'>
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
