import React from 'react'
import { Form, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import useSelectAllControl from '../../hooks/useSelectAllControl'


const AllWithSelect: React.FC = () => {
  const options =[
    // {
    //   "value": 0,
    //   "label": "全部"
    // },
    {
      "value": 1,
      "label": "临时卡"
    },
    {
      "value": 2,
      "label": "临时卡-clg"
    },
    {
      "value": 3,
      "label": "二维码腕带入会级别"
    },
    {
      "value": 4,
      "label": "会员卡"
    },
    {
      "value": 5,
      "label": "会员卡-clg"
    },
    {
      "value": 6,
      "label": "公共卡"
    },
    {
      "value": 7,
      "label": "团队预约"
    },
    {
      "value": 8,
      "label": "尊享卡"
    },
    {
      "value": 9,
      "label": "手机入会0523"
    },
    {
      "value": 10,
      "label": "手机号会员"
    },
    {
      "value": 11,
      "label": "普通卡"
    },
    {
      "value": 12,
      "label": "王者卡"
    },
    {
      "value": 13,
      "label": "钻石卡"
    },
    {
      "value": 14,
      "label": "高级会员卡-clg"
    },
    {
      "value": 15,
      "label": "黄金会员"
    },
    {
      "value": 16,
      "label": "黑金卡"
    }
  ]
  const {
    getAllData,
    GetAllDataWithSelect,
  } = useSelectAllControl()
  return <Form>
    <FormItem label={'带选择1'}>
      <Select  mode='multiple'
      maxTagCount='responsive'
               options={getAllData(options)}
               onChange={(v:string[])=>GetAllDataWithSelect(v)}
      showArrow
      />

    </FormItem>
    <FormItem label={'带选择2'}>
      <Select  mode='multiple'
               maxTagCount='responsive'
               options={getAllData(options)}
               onChange={(v:string[])=>GetAllDataWithSelect(v)}
               showArrow
      />

    </FormItem>
  </Form>
}


export default AllWithSelect
