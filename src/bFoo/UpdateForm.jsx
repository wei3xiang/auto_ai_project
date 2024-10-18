import React, { useCallback, useEffect, useMemo } from 'react';
import { Input, Form, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { bFooStateAtom } from './atom';
import _ from 'lodash';

const UpdateForm = (props) => {
  const [form] = Form.useForm();
  const [bFooState, setBFooState] = useRecoilState(bFooStateAtom);

  const list = useMemo(() => {
      return bFooState?.list || [];
  }, [bFooState]);

  const updateModel = useMemo(() => {
    return bFooState?.updateModel || null;
  }, [bFooState]);

  useEffect(() => {
    form && form.setFieldsValue({ ...updateModel });
  }, [updateModel]);

  const resetForm = useCallback(() => {
    form.resetFields();
  }, []);

  const onClickDoUpdate = useCallback(() => {
    const values = form.getFieldsValue();

    const updateItems = list.map((item) => {
      if (item.uuid === updateModel?.uuid) {
        return { ...item, ...values };
      }
      return item;
    });

    setBFooState((prevState) => ({
      ...prevState,
      list: updateItems,
      updateModel: null,
    }));
    resetForm();
  }, [list, updateModel]);

  const onClickDoCancel = useCallback(() => {
    setBFooState((prevState) => ({
      ...prevState,
      updateModel: null,
    }));
    resetForm();
  }, []);

  return (
    <Modal
      title={'编辑'}
      open={updateModel}
      onOk={onClickDoUpdate}
      onCancel={onClickDoCancel}
      okText={'编辑'}
    >
      <Form layout="vertical" form={form} name='basic'>
        <Form.Item
          label='fooCode'
          name='fooCode'
          rules={[{ required: true, message: 'fooCode不能为空' }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='fooName'
          name='fooName'
          rules={[{ required: true, message: 'fooName不能为空' }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='remark'
          name='remark'
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='fooDate'
          name='fooDate'
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='abandon'
          name='abandon'
          rules={[{ required: true, message: 'abandon不能为空' }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='seq'
          name='seq'
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='fooBigDecimal'
          name='fooBigDecimal'
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='fooFloat'
          name='fooFloat'
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='fooDouble'
          name='fooDouble'
        >
        <Input />
        </Form.Item>
        <Form.Item
          label='fooInteger'
          name='fooInteger'
        >
        <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UpdateForm;