import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  LineChartOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { FaTruck } from 'react-icons/fa';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
let NavigationLinks = {
  '1': '/dashboard',
  '2': '/salesdata',
  '3': '/product',
  '4': '/shop',
  '5': '/delivery',
}
const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Sales Data', '2', <LineChartOutlined />),
  getItem('Product Data', '3', <ShoppingOutlined />),
  getItem('Shop List', '4', <ShoppingCartOutlined />),
  getItem('Track Delivery', '5', <FaTruck style={{ fill: 'none', stroke: 'black', strokeWidth: '40' }} />),
];
const NavMenu = () => {
  const router = useRouter();

  const onClick = (e) => {
    console.log('click', e);
    const path = NavigationLinks[e.key];
    if (path) {
      router.push(path); // Navigate to the specified path
    }
  };
  return (
    <div
      style={{
        width: 275,
      }}
    >
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        items={items}
        itemBorderRadius={0}
        subMenuItemBorderRadius={0}
        darkItemSelectedBg={'#ffffff'}
        itemSelectedColor={'#0E87D1'}
        style={{
          fontSize: 17,
        }}
      />
    </div>
  );
};
export default NavMenu;