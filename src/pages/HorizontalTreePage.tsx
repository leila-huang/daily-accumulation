import React, { useState } from "react";
import HorizontalTree from "../components/HorizontalTree";
import { treeData } from "../components/HorizontalTree/data";
import { Typography } from "antd";

const HorizontalTreePage: React.FC = () => {
  const [searchData, setSearchData] = useState("");
  return (
    <>
      <Typography.Title>横向TreeTable</Typography.Title>
      <HorizontalTree data={treeData} searchData={searchData} />
    </>
  );
};

export default HorizontalTreePage;
