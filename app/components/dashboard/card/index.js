import React from 'react';
import { Card } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
import './index.css';

function StatsCard(details) {
    let { title, numeric, percentage, color } = details; // Use "color" instead of "colour"
    return (
        <Card
            style={{
                width: 300,
                display: 'flex',
                fontFamily: 'General Sans Regular',
                backgroundColor: color, 
            }}
        >
            <span className='statsCardTitle' style={{ fontSize: '1rem' }}>{title}</span>
            <br />
            <div className='statsCardDescription'>
                <span style={{ fontSize: '1.5rem' }}>₹{numeric}</span>
                <span>
                    {percentage}
                    <RiseOutlined />
                </span>
            </div>
        </Card>
    );
}

export default StatsCard;
