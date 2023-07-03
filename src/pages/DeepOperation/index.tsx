import React, { useState } from "react";
import { Button, Card, Space, Typography } from "antd";

const DeepOperation: React.FC = () => {
  const [newObj, setNewObj] = useState({});
  const obj: Record<string, any> = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
  };
  const deepFilter = (obj: Record<string, any>, filterKey: string[]) => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    const result = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      if (filterKey.includes(key)) {
        continue;
      }

      const value = obj?.[key];
      result[key] = deepFilter(value, filterKey);
    }

    return result;
  };

  return (
    <Card title="数据">
      <Space direction="horizontal">
        <Typography.Paragraph>
          {JSON.stringify(obj, null, 2)}
        </Typography.Paragraph>
        <Typography.Paragraph>
          {JSON.stringify(newObj, null, 2)}
        </Typography.Paragraph>
      </Space>
      <Button onClick={() => setNewObj(deepFilter(obj, ["age", "state"]))}>
        深过滤
      </Button>
      <Button>深对比</Button>
      <Button>深拷贝</Button>
    </Card>
  );
};

export default DeepOperation;
