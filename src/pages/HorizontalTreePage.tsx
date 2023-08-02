import React, { useState, useTransition } from "react";
import HorizontalTree from "../components/HorizontalTree";
import { treeData } from "../components/HorizontalTree/data";
import { Input, Typography } from "antd";

const HorizontalTreePage: React.FC = () => {
  const [searchData, setSearchData] = useState("");
  // 当组件节点渲染卡顿时可以考虑用startTransition不阻塞UI渲染(延迟？
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <Typography.Title>横向TreeTable</Typography.Title>
      <Input
        value={searchData}
        onChange={(e) => setSearchData(e?.target?.value)}
      />
      <HorizontalTree data={treeData} searchData={searchData} />
    </>
  );
};

export default HorizontalTreePage;
