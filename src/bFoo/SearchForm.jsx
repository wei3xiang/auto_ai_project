import { Form, Button, Input } from 'antd';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { bFooStateAtom } from './atom';

const SearchForm = (props) => {
  const [form] = Form.useForm();
  const [bFooState, setBFooState] = useRecoilState(bFooStateAtom);

  const onClickSearch = useCallback(() => {}, []);

  const onClickReset = useCallback(() => {}, []);

  const onClickToCreate = useCallback(() => {
    setBFooState((prevState) => ({
      ...prevState,
      createModel: {},
    }));
  }, []);

  return (
    <Form form={form} name="search" layout="inline">
      <Form.Item label="模糊查询" name="fuzzy">
        <Input title="模糊查询" placeholder="请输入..." />
      </Form.Item>
      <Button type="primary" onClick={onClickSearch}>
        搜索
      </Button>
      <Button onClick={onClickReset} style={{ marginLeft: '10px' }}>
        重置
      </Button>
      <Button
        type="primary"
        onClick={onClickToCreate}
        style={{ marginLeft: '10px' }}
      >
        添加
      </Button>
    </Form>
  );
};

export default SearchForm;