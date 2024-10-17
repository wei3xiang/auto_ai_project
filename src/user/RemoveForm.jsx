import React, { useCallback, useEffect, useMemo } from 'react';
import { Input, Form, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { userStateAtom } from './atom';
import _ from 'lodash';

const RemoveForm = (props) => {
  const [form] = Form.useForm();
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const users = useMemo(() => {
    return userState?.list || [];
  }, [userState]);

  const removeModel = useMemo(() => {
    return userState?.removeModel || null;
  }, [userState]);

  useEffect(() => {
    form && form.setFieldsValue({ ...removeModel });
  }, [removeModel]);

  const resetForm = useCallback(() => {
    form.resetFields();
  }, []);

  const onClickDoRemove = useCallback(() => {
    const restUsers = _.filter(
      users,
      (user) => !_.eq(user.name, removeModel?.name)
    );
    setUserState((prevState) => ({
      ...prevState,
      list: [...restUsers],
      removeModel: null,
    }));
  }, [users, removeModel]);

  const onClickDoCancel = useCallback(() => {
    setUserState((prevState) => ({
      ...prevState,
      removeModel: null,
    }));
    resetForm();
  }, []);

  return (
    <Modal
      title={'删除用户'}
      open={removeModel}
      onOk={onClickDoRemove}
      onCancel={onClickDoCancel}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="姓名" name="name">
          <Input placeholder="请输入姓名" disabled />
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <Input type="number" placeholder="请输入年龄" disabled />
        </Form.Item>
        <Form.Item label="班级" name="className">
          <Input placeholder="请输入班级" disabled />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default RemoveForm;
