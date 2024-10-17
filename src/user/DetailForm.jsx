import React, { useCallback, useMemo, useEffect } from 'react';
import { Input, Form, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { userStateAtom } from './atom';

const DetailForm = (props) => {
  const [form] = Form.useForm();
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const detailModel = useMemo(() => {
    return userState?.detailModel || null;
  }, [userState]);

  useEffect(() => {
    form && form.setFieldsValue({ ...detailModel });
  }, [detailModel]);

  const onClickDoCancel = useCallback(() => {
    setUserState((prevState) => ({
      ...prevState,
      detailModel: null,
    }));
  }, []);

  return (
    <Modal
      title={'查看用户'}
      open={detailModel}
      onOk={onClickDoCancel}
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
export default DetailForm;
