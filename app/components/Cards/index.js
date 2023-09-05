'use client'
import React, { useState } from 'react';
import { Avatar, Card } from 'antd';
import './index.css';

function CardDesign(props) {
    const cardWidth = 300; // Set your desired width here
    const cardHeight = (cardWidth * 9) / 16; // Calculate the height for a 16:9 aspect ratio

    const { imageSrc, price, shopName, location, area, footfall, address, onCardHover } = props;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        onCardHover(address.lat, address.long); // Pass latitude and longitude on hover
    };

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    //     onCardHover(null, null); // Reset latitude and longitude on leave
    // };

    return (
        <Card
            hoverable
            style={{
                width: 300,
            }}
            cover={<img alt="example" src={imageSrc} />}
            onClick={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
        >
            <div className='cardHeading'>
                <h1>{shopName}</h1>
                <h2>{price}</h2>
            </div>
            <div className='cardDescription'>
                {area} ∙ {location}
                <br />
                {footfall}
            </div>
        </Card>
    );
}

export default CardDesign;
