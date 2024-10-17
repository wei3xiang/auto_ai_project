import React, { useCallback, useEffect, useMemo } from 'react';
import { Input, Form, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { userStateAtom } from './atom';
import _ from 'lodash';

const UpdateForm = (props) => {
  const [form] = Form.useForm();
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const users = useMemo(() => {
    return userState?.list || [];
  }, [userState]);

  const updateModel = useMemo(() => {
    return userState?.updateModel || null;
  }, [userState]);

  useEffect(() => {
    form && form.setFieldsValue({ ...updateModel });
  }, [updateModel]);

  const resetForm = useCallback(() => {
    form.resetFields();
  }, []);

  const onClickDoUpdate = useCallback(() => {
    const updateUser = form.getFieldsValue();

    const updatedUsers = users.map((user) => {
      if (user.name === updateModel?.name) {
        return { ...user, ...updateUser }; // 返回一个新对象
      }
      return user;
    });

    console.log('===users: ', updatedUsers);

    setUserState((prevState) => ({
      ...prevState,
      list: updatedUsers,
      updateModel: null,
    }));
    resetForm();
  }, [users, updateModel]);

  const onClickDoCancel = useCallback(() => {
    setUserState((prevState) => ({
      ...prevState,
      updateModel: null,
    }));
    resetForm();
  }, []);

  return (
    <Modal
      title={'编辑用户'}
      open={updateModel}
      onOk={onClickDoUpdate}
      onCancel={onClickDoCancel}
      okText={'编辑'}
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
export default UpdateForm;
