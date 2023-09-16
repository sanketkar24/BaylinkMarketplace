"use client"
import React from 'react';
import { Layout } from 'antd';
import SummaryCard from '@/app/components/dashboard/summaryCard';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    display: 'flex',
    borderBottom: '1px solid #e8e8e8',
    textAlign: 'center',
    height: 'fit-content',
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#FFFFFF',
};
const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    // alignVertical: 'start',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#FFFFFF',
    height: '90vh',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#ffff',
    backgroundColor: '#ffffff',
    height: '100vh',
    borderRight: '1px solid #e8e8e8',
};
const App = () => (
    <SummaryCard />
);
export default App;