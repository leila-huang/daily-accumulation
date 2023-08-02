import React, { memo, useContext } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Checkbox } from "antd";
import {
  handleParentCheckedChange,
  TreeContext,
} from "@/components/HorizontalTree/index";

const TreeCheck: React.FC<any> = ({
  key,
  value,
  label,
  onChange,
  disabled,
}) => {
  const { flatTreeListState, setFlatTreeListState } = useContext(TreeContext);
  const handleCheckAllChange = (e: CheckboxChangeEvent, key: string) => {
    const data = flatTreeListState[key];
    const childrenChecked = e?.target?.checked;
    const newChildrenData = {
      ...(data ?? {}),
      checked: childrenChecked,
      halfChecked: childrenChecked ? false : data?.halfChecked,
    };
    // 更新节点数据
    setFlatTreeListState({
      [key]: newChildrenData,
    });
    // 更新闭包数据，避免useState异步更新
    let newList = { ...flatTreeListState, [key]: newChildrenData };
    // 处理节点 关联的子节点
    // 表示选中非最底层,最底层的value是array
    if (data?.value === undefined) {
      data.childrenIds?.forEach((item: string | number) => {
        const childrenData = newList[item];
        const val = childrenChecked ? childrenData?.childrenIds : [];
        const childrenValue = Array.isArray(childrenData.value)
          ? val
          : undefined;
        const newData = {
          ...(childrenData ?? {}),
          value: childrenValue,
          checked: childrenChecked,
          halfChecked: false,
        };
        setFlatTreeListState({
          [item]: newData,
        });
        // 更新闭包数据，避免useState异步更新
        newList = {
          ...newList,
          [item]: newData,
        };
      });
    }
    // 表示选中最后一层
    if (Array.isArray(data.value)) {
      setFlatTreeListState({
        [key]: {
          ...(newChildrenData ?? {}),
          value: childrenChecked ? data?.childrenIds : [],
        },
      });
      // 更新闭包数据，避免useState异步更新
      newList = {
        ...newList,
        [key]: {
          ...(newChildrenData ?? {}),
          value: childrenChecked ? data?.childrenIds : [],
        },
      };
    }

    // 处理节点 关联的父节点
    handleParentCheckedChange(
      data,
      newList,
      data?.halfChecked,
      setFlatTreeListState
    );
    onChange?.(newList);
  };
  return (
    <Checkbox
      disabled={disabled}
      key={key}
      indeterminate={flatTreeListState?.[value]?.halfChecked ?? false}
      onChange={(e) => handleCheckAllChange(e, value)}
      checked={flatTreeListState?.[value]?.checked}
    >
      {label}
    </Checkbox>
  );
};

export default memo(TreeCheck);
