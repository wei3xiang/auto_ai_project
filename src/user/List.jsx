import React, { useCallback, useMemo } from 'react';
import { Button, Table, message } from 'antd';
import { useRecoilState } from 'recoil';
import { userStateAtom } from './atom';

const List = (props) => {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const users = useMemo(() => {
    return userState?.list || [];
  }, [userState]);

  const columns = [
    {
      title: '姓名-aaa',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '班级',
      dataIndex: 'className',
      key: 'className',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record, index) => (
        <span>
          <Button onClick={() => onClickDoEdit(record)}>编辑</Button>
          <Button
            style={{ marginLeft: 8 }}
            onClick={() => onClickDoDetail(record)}
          >
            查看
          </Button>
          <Button
            danger
            onClick={() => conClickDoRemove(record)}
            style={{ marginLeft: 8 }}
          >
            删除
          </Button>
        </span>
      ),
    },
  ];

  const conClickDoRemove = useCallback((record) => {
    setUserState((prevState) => ({
      ...prevState,
      removeModel: { ...record },
    }));
  }, []);

  const onClickDoDetail = useCallback((record) => {
    setUserState((prevState) => ({
      ...prevState,
      detailModel: { ...record },
    }));
  }, []);

  const onClickDoEdit = useCallback(
    (record) => {
      setUserState((prevState) => ({
        ...prevState,
        updateModel: { ...record },
      }));
    },
    [users]
  );

  return (
    <Table
      dataSource={users}
      columns={columns}
      rowKey="name"
      style={{ marginTop: '20px' }}
    />
  );
};

export default List;
