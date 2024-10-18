import React, { useCallback, useMemo } from 'react';
import { Button, Table, message, Space } from 'antd';
import { useRecoilState } from 'recoil';
import { bFooStateAtom } from './atom';

const List = (props) => {

const [bFooState, setBFooState] = useRecoilState(bFooStateAtom);

  const list = useMemo(() => {
    return bFooState?.list || [];
  }, [bFooState]);

const commonColumns = [
  {
    title: 'uuid',
    key: 'uuid',
    dataIndex: 'uuid',
    sorter: true,
  },
  {
    title: 'fooCode',
    key: 'fooCode',
    dataIndex: 'fooCode',
    sorter: true,
  },
  {
    title: 'fooName',
    key: 'fooName',
    dataIndex: 'fooName',
    sorter: true,
  },
  {
    title: 'remark',
    key: 'remark',
    dataIndex: 'remark',
    sorter: true,
  },
  {
    title: 'fooDate',
    key: 'fooDate',
    dataIndex: 'fooDate',
    sorter: true,
  },
  {
    title: 'abandon',
    key: 'abandon',
    dataIndex: 'abandon',
    sorter: true,
  },
  {
    title: 'seq',
    key: 'seq',
    dataIndex: 'seq',
    sorter: true,
  },
  {
    title: 'fooBigDecimal',
    key: 'fooBigDecimal',
    dataIndex: 'fooBigDecimal',
    sorter: true,
  },
  {
    title: 'fooFloat',
    key: 'fooFloat',
    dataIndex: 'fooFloat',
    sorter: true,
  },
  {
    title: 'fooDouble',
    key: 'fooDouble',
    dataIndex: 'fooDouble',
    sorter: true,
  },
  {
    title: 'fooInteger',
    key: 'fooInteger',
    dataIndex: 'fooInteger',
    sorter: true,
  },
];

const columns = useMemo(() => ([...commonColumns,
    {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      render: (t, r, i) => {
        return <Space>
          <Button onClick={() => onClickDoEdit(r)}>编辑</Button>
          <Button
            style={{ marginLeft: 8 }}
            onClick={() => onClickDoDetail(r)}
          >
            查看
          </Button>
          <Button
            danger
            onClick={() => conClickDoRemove(r)}
            style={{ marginLeft: 8 }}
          >
            删除
          </Button>
        </Space>;
      },
    },
  ]), []);

  const conClickDoRemove = useCallback((record) => {
    setBFooState((prevState) => ({
      ...prevState,
      removeModel: { ...record },
    }));
  }, []);

  const onClickDoDetail = useCallback((record) => {
    setBFooState((prevState) => ({
      ...prevState,
      disableModel: { ...record },
    }));
  }, []);

  const onClickDoEdit = useCallback(
    (record) => {
      setBFooState((prevState) => ({
        ...prevState,
        updateModel: { ...record },
      }));
    },
    [list]
  );

  return (
    <Table
      dataSource={list}
      columns={columns}
      rowKey={'uuid'}
      style={{ marginTop: '20px' }}
    />
  );
};

export default List;