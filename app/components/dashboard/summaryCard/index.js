import React from 'react';
import './index.css';
import StatsCard from '../card';

function SummaryCard() {
    // Define an array of objects containing details for each StatsCard
    const cardDetails = [
        {
            title: 'Earnings',
            numeric: '721K',
            percentage: '+11.01%',
        },
        {
            title: 'Total Sold',
            numeric: '367K',
            percentage: '+11.01%',
        },
        {
            title: 'Trailing 30 Earned',
            numeric: '11,156',
            percentage: '+11.01%',
        },
        {
            title: 'Trailing 30 Sold',
            numeric: '#44',
            percentage: '+11.01%',
        },
        // Add more objects as needed for each StatsCard
    ];

    // Function to add a color property to each card detail
    const addColorToDetails = () => {
        const colors = ['#BBDFBB', '#A4DFF5', '#7FD2F1', '#F6DCB6']; // Add colors as needed
        return cardDetails.map((details, index) => ({
            ...details,
            color: colors[index % colors.length], // Assign a color based on the index
        }));
    };

    const cardDetailsWithColor = addColorToDetails();

    return (
        <div className='summaryCard'>
            {cardDetailsWithColor.map((details, index) => (
                <StatsCard key={index} {...details} />
            ))}
        </div>
    );
}

export default SummaryCard;
