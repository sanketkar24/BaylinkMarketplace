import React from 'react'
import { Input, Tooltip, Button } from 'antd';
import { SearchOutlined, BellOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import './index.css'
function TopMenu() {
    return (
        <div className='topMenu'>
            <div className='headingTopMenu'>
                Dashboard
            </div>
            <Input size="large" placeholder="Search here..." prefix={<SearchOutlined style={{color:'#DEDEDE', fontFamily:'General Sans Regular'}}/>} style={{ width: '40vw', height: '2.5rem' }} />
            <div className='buttonsTopMenu'>
                <Tooltip title="search">
                    <Button shape="circle" icon={<BellOutlined />} />
                </Tooltip>
                <Tooltip title="search">
                    <Button shape="circle" icon={<UserAddOutlined />} />
                </Tooltip>
                <Tooltip title="search">
                    <Button shape="circle" icon={<UserOutlined />} />
                </Tooltip>
            </div>
        </div>
    )
}

export default TopMenu