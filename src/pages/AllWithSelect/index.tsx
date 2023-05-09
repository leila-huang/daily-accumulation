import React, { useMemo } from 'react'
import { Form, Select, Typography } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import useSelectAllControl from '../../hooks/useSelectAllControl'
import { FormInstance, useForm } from 'antd/es/form/Form'


const AllWithSelect: React.FC = () => {
  const options = [
    {
      'value': 1,
      'label': '临时卡'
    },
    {
      'value': 2,
      'label': '临时卡-clg'
    },
    {
      'value': 3,
      'label': '二维码腕带入会级别'
    },
    {
      'value': 4,
      'label': '会员卡'
    },
    {
      'value': 5,
      'label': '会员卡-clg'
    },
    {
      'value': 6,
      'label': '公共卡'
    },
    {
      'value': 7,
      'label': '团队预约'
    },
    {
      'value': 8,
      'label': '尊享卡'
    },
    {
      'value': 9,
      'label': '手机入会0523'
    },
    {
      'value': 10,
      'label': '手机号会员'
    },
    {
      'value': 11,
      'label': '普通卡'
    },
    {
      'value': 12,
      'label': '王者卡'
    },
    {
      'value': 13,
      'label': '钻石卡'
    },
    {
      'value': 14,
      'label': '高级会员卡-clg'
    },
    {
      'value': 15,
      'label': '黄金会员'
    },
    {
      'value': 16,
      'label': '黑金卡'
    }
  ]
  const {
    getAllData: getAllData1,
    GetAllDataWithSelect: GetAllDataWithSelect1,
  } = useSelectAllControl()

  const {
    getAllData: getAllData2,
    GetAllDataWithSelect: GetAllDataWithSelect2,
  } = useSelectAllControl()
  const allOptions = useMemo(() => ({
    options1: getAllData1(options),
    options2: getAllData2(options)
  }), [])
  const [form] = useForm()
  const handleChange = (
    v: [],
    key: string,
  ) => {
    const data = GetAllDataWithSelect1(v)
    form.setFieldValue(key, data)
  }
  return <>
    <Typography.Title level={3} >select支持全选功能hooks的Demo，[理论上应该是用treeSelect来实现的]</Typography.Title>
    <Form name={'form1'} form={form} style={{width:'800px',margin:'auto'}} labelCol={{span:4}} >
    <Form.Item label={'带选择1'}  shouldUpdate={(prevValues, curValues) => prevValues.options1 !== curValues.options1}>
      {({ getFieldValue }) => {
        const value = getFieldValue('options1')
        return <Select
          value={value}
          mode="multiple"
          maxTagCount="responsive"
          options={allOptions?.options1}
          onChange={(v: string[]) => handleChange(v, 'options1')}
          showArrow
        />
      }}

    </Form.Item>
    <Form.Item label={'带选择2'} shouldUpdate={(prevValues, curValues) => prevValues.options2 !== curValues.options2}>
      {({ getFieldValue }) => {
        const value = getFieldValue('options2')
        return <Select
          value={value}
          mode="multiple"
          maxTagCount="responsive"
          options={allOptions?.options2}
          onChange={(v: string[]) => handleChange(v, 'options2')}
          showArrow
        />
      }}
    </Form.Item>
  </Form>

    </>
}


export default AllWithSelect
