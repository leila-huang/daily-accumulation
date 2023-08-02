import React, { useState } from "react";
import { Button, Card, Divider, Input, Space, Typography } from "antd";

const LodashUtilsPage: React.FC = () => {
  const [obj, setObj] = useState({
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
  });
  const [newObj, setNewObj] = useState({});

  const omitObj = (
    obj: Record<string | number, any>,
    field: (string | number)[]
  ) => {
    const newObj = Object.assign({}, obj);
    for (let i = 0; i < field.length; i++) {
      const result = newObj[field[i]];
      if (result) {
        delete newObj[field[i]];
      }
    }
    return newObj;
  };
  const pickObj = (
    obj: Record<string | number, any>,
    field: (string | number)[]
  ) => {
    const newObj: Record<string | number, any> = {};
    for (let i = 0; i < field.length; i++) {
      const hasKey = Object.keys(obj)?.some((key) => key === field[i]);

      if (hasKey) {
        newObj[field[i]] = obj[field[i]];
      }
    }
    return newObj;
  };
  const handleObj = (e: any) => {
    try {
      const data = JSON.parse(e?.target?.value);
      setObj(data);
    } catch (e) {
      console.log("JSON.parse error :", e);
    }
  };
  return (
    <Card title="数据">
      <Input.TextArea
        style={{ height: "300px" }}
        value={JSON.stringify(obj, null, 2)}
        onChange={handleObj}
      />
      <Space direction="horizontal">
        <Typography.Paragraph style={{ whiteSpace: "pre" }}>
          {JSON.stringify(obj, null, 2)}
        </Typography.Paragraph>
        <Divider type={"vertical"} />
        <Typography.Paragraph style={{ whiteSpace: "pre" }}>
          {JSON.stringify(newObj, null, 2)}
        </Typography.Paragraph>
      </Space>
      <Divider />
      <Space>
        <Button onClick={() => setNewObj(omitObj(obj, ["age", "name"]))}>
          omit操作
        </Button>
        <Button onClick={() => setNewObj(pickObj(obj, ["age", "name"]))}>
          pick操作
        </Button>
      </Space>
    </Card>
  );
};

export default LodashUtilsPage;
