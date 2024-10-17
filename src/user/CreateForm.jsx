import React, { useCallback, useMemo } from 'react';
import { Input, Form, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { userStateAtom } from './atom';

const CreateForm = (props) => {
  const [form] = Form.useForm();
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const users = useMemo(() => {
    return userState?.list || [];
  }, [userState]);

  const createModel = useMemo(() => {
    return userState?.createModel || null;
  }, [userState]);

  const resetForm = useCallback(() => {
    form.resetFields();
  }, []);

  const onClickDoCreate = useCallback(() => {
    const { name, age, className } = form.getFieldsValue();

    setUserState((prevState) => ({
      ...prevState,
      list: [...users, { name, age, className }],
      createModel: null,
    }));
    resetForm();
  }, [users]);

  const onClickDoCancel = useCallback(() => {
    setUserState((prevState) => ({
      ...prevState,
      createModel: null,
    }));
    resetForm();
  }, []);

  return (
    <Modal
      title={'添加用户'}
      open={createModel}
      onOk={onClickDoCreate}
      onCancel={onClickDoCancel}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="姓名" name="name">
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <Input type="number" placeholder="请输入年龄" />
        </Form.Item>
        <Form.Item label="班级" name="className">
          <Input placeholder="请输入班级" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default CreateForm;
