import React, { memo, useContext } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { Checkbox } from "antd";
import { handleParentCheckedChange, TreeContext } from "./index";

const TreeCheckGroup: React.FC<any> = ({
  key,
  children,
  parentId,
  onChange,
  disabled,
}) => {
  const { flatTreeListState, setFlatTreeListState } = useContext(TreeContext);
  const handleChange = (
    list: CheckboxValueType[],
    key: string,
    size: number
  ) => {
    const data = flatTreeListState[key];
    const childrenChecked = list.length === size;
    const childrenHalfChecked = list.length > 0 && list.length < size;
    const newChildrenData = {
      ...(data ?? {}),
      value: list,
      checked: childrenChecked,
      halfChecked: childrenChecked ? false : childrenHalfChecked,
    };
    setFlatTreeListState({
      [key]: newChildrenData,
    });
    // 更新闭包数据，避免useState异步更新
    const newList = { ...flatTreeListState, [key]: newChildrenData };
    // 处理节点 关联的父节点
    handleParentCheckedChange(
      data,
      newList,
      childrenHalfChecked,
      setFlatTreeListState
    );
    onChange?.(newList);
  };

  return (
    <Checkbox.Group
      key={key}
      disabled={disabled}
      options={children}
      value={flatTreeListState?.[parentId]?.value ?? []}
      onChange={(v) => handleChange(v, parentId, children?.length)}
    />
  );
};

export default memo(TreeCheckGroup);
