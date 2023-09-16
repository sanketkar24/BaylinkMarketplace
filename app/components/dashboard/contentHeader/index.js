import React from 'react'
import './index.css'
import { Button } from 'antd'
import {FilterOutlined, PlusOutlined } from '@ant-design/icons'
function ContentHeader() {
  let buttonSize = 'medium'
  let iconStyle = {
    'alignSelf' : 'center'
  }
  return (
    <div className='contentHeader'>
      <div className='heading'>
        Shop  List
      </div>
      <div className='tableButtons'>
        <Button size={buttonSize} style={{background: '#22B2E6', display: 'flex', justifyContent: 'center'}}><FilterOutlined style={iconStyle} />Filter</Button>
        <Button size={buttonSize} style={{display: 'flex', justifyContent: 'center'}}><PlusOutlined style={iconStyle}/>Add Shop</Button>
      </div>
    </div>
  )
}

export default ContentHeader