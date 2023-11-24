import { React } from 'react'
import { Button, Divider, Switch } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.css'

function ListingMenu({ onToggleChange }) {

  let buttonColor = {
    color: '#22B2E6',
    borderColor: '#22B2E6'
  }

  const handleToggleChange = (checked) => {
    onToggleChange(checked);
  };

  return (
    <div className='fixed py-4 flex laptop:flex-row justify-between space-y-2 flex-col w-full mt-16 z-50 px-8 bg-white text-black'>

      <div className='flex items-center w-full space-x-2'>
        <Button style={buttonColor}>Price</Button>
        <Button style={buttonColor} >Footfall</Button>
        <Button style={buttonColor}>Location</Button>
        <Button style={buttonColor}>All Filters</Button>
      </div>

      <div className='flex w-1/2 items-center'>
        <div className='flex items-center gap-2'>
          <span className='text-xs'> SortBy </span>
          <Button className='flex justify-between items-center w-full'>
            Recommended
            <DownOutlined />
          </Button>
        </div>
        <Divider type='vertical' style={{ borderColor: '#B0B0B0' }} />
        <div className='text-sm hidden laptop:flex items-center space-x-2'>
          <span className='whitespace-nowrap'> Show map </span>
          <Switch onChange={handleToggleChange} />
        </div>
      </div>

    </div>
  )
}

export default ListingMenu