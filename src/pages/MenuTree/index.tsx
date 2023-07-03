import React, { useMemo, useState } from "react";
import loadMenu, { MenuDataItem } from "./loadMenu";
import { originMenu } from "./data";
import TreeTools from "./treeTools";
import { Button, Form, Input, InputNumber, Space, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";

const MenuTree: React.FC = () => {
  const [modalId, setModalId] = useState<any>();
  const [num, setNum] = useState(10);
  const menus = useMemo(() => {
    const data = loadMenu(originMenu, num);
    console.log("menus", data);
    return data;
  }, [num]);

  const handleClick = () => {
    // 树查找
    console.time("findNode");
    const findNode = TreeTools.findNode<MenuDataItem>(
      menus,
      (node) => node?.ModelID === modalId
    );
    console.log("findNode--->", findNode);
    console.timeEnd("findNode");

    console.time("findDeepNode");
    const findDeepNode = TreeTools.findDeepNode<MenuDataItem>(
      menus,
      (node) => node?.ModelID === modalId
    );
    console.log("findDeepNode--->", findDeepNode);

    console.timeEnd("findDeepNode");
  };

  return (
    <Form
      layout={"horizontal"}
      onFinish={handleClick}
      labelCol={{ span: 6 }}
      style={{ width: 600, margin: "auto" }}
    >
      <Typography.Title level={4}>
        递归&广度查找tree数据的速度对比
      </Typography.Title>
      <Typography.Text type={"secondary"}>
        tips:打开控制台看日志
      </Typography.Text>
      <FormItem label={"基于原有数据再增加"}>
        <InputNumber
          style={{ width: "180px" }}
          min={0}
          value={num}
          onChange={(e) => setNum(Number(e))}
        />
      </FormItem>
      <FormItem label={"查找的ID"}>
        <Input
          style={{ width: "180px" }}
          value={modalId}
          onChange={(e) => setModalId(e.target?.value)}
        />
      </FormItem>
      <Button htmlType={"submit"}>测试数据</Button>
    </Form>
  );
};

export default MenuTree;
