"use client"
import React from 'react';
import { Layout, Space } from 'antd';
import Image from 'next/image';
import logo_blue from '../../../images/logo_blue.png';
import BrandCard from '../../components/dashboard/brandCard/index.js';
import NavMenu from '@/app/components/dashboard/navigationMenu';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: '10vh',
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
    height: '90vh',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#ffff',
    backgroundColor: '#ffffff',
    height: '100vh',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
const App = () => (
    <Layout>
        <Sider width={400} style={siderStyle} className='pt-6'>
            <Space align='center' direction='vertical'>
                <Image src={logo_blue} alt="navbar logo" height={50} className='pb-6'/>
                <BrandCard />
                <NavMenu />
            </Space>
        </Sider>
        <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
    </Layout>
);
export default App;