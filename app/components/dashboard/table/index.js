import React, { useState } from 'react';
import { Table } from 'antd';
import './index.css';
const columns = [
  {
    title: 'BILL NO.',
    dataIndex: 'billno',
  },
  {
    title: 'SHOP NAME',
    dataIndex: 'name',
  },
  {
    title: 'BILLING DATE',
    dataIndex: 'date',
  },
  {
    title: 'CUSTOMER NO.',
    dataIndex: 'number',
  },
  {
    title: 'MARGIN',
    dataIndex: 'margin',
  },
  {
    title: 'AMOUNT',
    dataIndex: 'amount',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    billno: `5146846548465`,
    name: 'Wade Warren',
    date: `2/19/21`,
    number : '+91-9876543210',
    margin : '5%',
    amount: '₹ 1000'
  });
}
const TableData = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};
export default TableData;