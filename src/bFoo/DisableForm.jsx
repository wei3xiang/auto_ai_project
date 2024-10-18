import React, { useCallback, useEffect, useMemo } from 'react';
import { Input, Form, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { bFooStateAtom } from './atom';
import _ from 'lodash';

const DisableForm = (props) => {
  const [form] = Form.useForm();
  const [bFooState, setBFooState] = useRecoilState(bFooStateAtom);

  const list = useMemo(() => {
      return bFooState?.list || [];
  }, [bFooState]);

  const disableModel = useMemo(() => {
    return bFooState?.disableModel || null;
  }, [bFooState]);

  useEffect(() => {
    form && form.setFieldsValue({ ...disableModel });
  }, [disableModel]);

  const resetForm = useCallback(() => {
    form.resetFields();
  }, []);

  const onClickDoCancel = useCallback(() => {
    setBFooState((prevState) => ({
      ...prevState,
      disableModel: null,
    }));
    resetForm();
  }, []);

  return (
    <Modal
      title={'查看'}
      open={disableModel}
      onOk={onClickDoCancel}
      onCancel={onClickDoCancel}
    >
      <Form layout="vertical" form={form} name='basic'>
        <Form.Item
          label='fooCode'
          name='fooCode'
          rules={[{ required: true, message: 'fooCode不能为空' }]}
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='fooName'
          name='fooName'
          rules={[{ required: true, message: 'fooName不能为空' }]}
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='remark'
          name='remark'
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='fooDate'
          name='fooDate'
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='abandon'
          name='abandon'
          rules={[{ required: true, message: 'abandon不能为空' }]}
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='seq'
          name='seq'
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='fooBigDecimal'
          name='fooBigDecimal'
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='fooFloat'
          name='fooFloat'
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='fooDouble'
          name='fooDouble'
        >
        <Input disabled/>
        </Form.Item>
        <Form.Item
          label='fooInteger'
          name='fooInteger'
        >
        <Input disabled/>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default DisableForm;