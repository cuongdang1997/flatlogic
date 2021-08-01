import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../actions';
import { Table, Tag, Space, Skeleton } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (item) => (
        <Avatar size={64} src={item} />
      )
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

const Demo = ({}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(getUsers());
    };

    const users = useSelector(state => state.userReducer.toJS());

    const { data, isFetching } = users;
    return <div>
        Demo 
        <Link to="/">Home</Link>
        {
          isFetching && <Skeleton loading avatar={false} title paragraph={{ rows: 18 }} active />
        }
        {!isFetching && data.length && 
            <Table columns={columns} dataSource={data} />
        }
    </div>
}

export default Demo;