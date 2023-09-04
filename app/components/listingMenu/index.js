import {React, useState} from 'react'
import { Button, Divider, Switch } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.css'
function ListingMenu({onToggleChange}) {
  let buttonColor = {
    color: '#22B2E6',
    borderColor: '#22B2E6'
  }
  const handleToggleChange = (checked) => {
    onToggleChange(checked);
  };
  return (
      <div className='listingMenu'>
        <div className='buttonsDiv Left'>
          <Button style={ buttonColor }>Price</Button>
          <Button style={ buttonColor } >Footfall</Button>
          <Button style={ buttonColor }>Location</Button>
          <Button style={ buttonColor }>All Filters</Button>
        </div>
        <div className='buttonsDiv Right'>
          <div className='sortByButtonDiv'>
            <span> Sort By </span>
            <Button className='sortButton'>
                Recommended
              <DownOutlined />
            </Button>
          </div>
          <Divider type='vertical' style={{borderColor: '#B0B0B0'}} />
          <div className='showMapButton'>
            <span> Show map </span>
            <Switch onChange={handleToggleChange} />
          </div>
        </div>
      </div>
  )
}

export default ListingMenu