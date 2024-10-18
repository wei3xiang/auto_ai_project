import React, { useCallback, useEffect, useMemo } from 'react';
import { Input, Form, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { bFooStateAtom } from './atom';
import _ from 'lodash';

const RemoveForm = (props) => {
  const [form] = Form.useForm();
  const [bFooState, setBFooState] = useRecoilState(bFooStateAtom);

  const list = useMemo(() => {
      return bFooState?.list || [];
  }, [bFooState]);

  const removeModel = useMemo(() => {
    return bFooState?.removeModel || null;
  }, [bFooState]);

  useEffect(() => {
    form && form.setFieldsValue({ ...removeModel });
  }, [removeModel]);

  const resetForm = useCallback(() => {
    form.resetFields();
  }, []);

  const onClickDoRemove = useCallback(() => {
    const restItems = _.filter(
      list,
      (item) => !_.eq(item.uuid, removeModel?.uuid)
    );
    setBFooState((prevState) => ({
      ...prevState,
      list: [...restItems],
      removeModel: null,
    }));
  }, [list, removeModel]);

  const onClickDoCancel = useCallback(() => {
    setBFooState((prevState) => ({
      ...prevState,
      updateModel: null,
    }));
    resetForm();
  }, []);

  return (
    <Modal
      title={'删除'}
      open={removeModel}
      onOk={onClickDoRemove}
      onCancel={onClickDoCancel}
    >
      <Form layout="vertical" form={form} name='basic'>
        <Form.Item
          label='fooCode'
          name='fooCode'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='fooName'
          name='fooName'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='remark'
          name='remark'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='fooDate'
          name='fooDate'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='abandon'
          name='abandon'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='seq'
          name='seq'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='fooBigDecimal'
          name='fooBigDecimal'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='fooFloat'
          name='fooFloat'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='fooDouble'
          name='fooDouble'
        >
<Input disabled />
        </Form.Item>
        <Form.Item
          label='fooInteger'
          name='fooInteger'
        >
<Input disabled />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default RemoveForm;