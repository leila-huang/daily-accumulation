import { ReactNode, useCallback, useState } from "react";

type AllDataProps = {
  allText?: string;
  label?: string | number;
  value?: string | number;
};
type OptionsType = {
  label?: ReactNode;
  value?: string | number;
  /** 渲染的节点类型 */
  optionType?: "optGroup" | "option";
  options?: Omit<OptionsType, "children" | "optionType">[];
  [key: string]: any;
};
interface UseSelectAllControlReturn {
  /**
   * 返回带有全选字段的数组
   * @param list
   * @param props
   */
  getAllData: (list: OptionsType[], props?: AllDataProps) => OptionsType[];
  allData: OptionsType[];
  /**
   * 处理全选、反选、多选
   * @param newValue
   * @constructor
   */
  GetAllDataWithSelect: (newValue: string[]) => string[];
}

/**
 * 处理select组件的全选、反选、多选
 * 减少组件内维护上一个value
 * tips:同一个组件有多个select全选需要创建多个实例hook
 */
export default function useSelectAllControl(): UseSelectAllControlReturn {
  const [allData, setAllData] = useState<OptionsType[]>([]);
  const [currentValue, setCurrentValue] = useState<any[]>([]);

  const getAllData = useCallback(
    (list: OptionsType[], props?: AllDataProps) => {
      if (!list || list?.length <= 0) return [];
      // 和全选的label和value保持一致
      if (props?.value || props?.label) {
        list = list.reduce(
          (previousValue: OptionsType[], curr) => [
            ...previousValue,
            {
              value: curr[props?.value || "value"],
              label: curr[props?.label || "label"],
            },
          ],
          []
        );
      }
      const newList = [
        {
          value: "all",
          label: props?.allText || "全部",
        },
        ...list,
      ];
      setAllData(newList);
      console.log("newList", newList);
      return newList as OptionsType[];
    },
    []
  );
  console.log("currentValue", currentValue);
  const GetAllDataWithSelect = useCallback(
    (newValue: any[]) => {
      const newDataHasAll = newValue.some((item) =>
        typeof item === "string" ? item === "all" : item?.value === "all"
      );
      const oldDataHasAll = currentValue?.some((item) =>
        typeof item === "string" ? item === "all" : item?.value === "all"
      );

      let data = newValue;
      // 取消全选
      if (!newDataHasAll && oldDataHasAll) {
        data = [];
      }
      // 多选
      if (newDataHasAll && newValue.length !== allData.length) {
        data = newValue.filter((item) => item !== "all");
      }
      // 全选
      if (
        (newDataHasAll && !oldDataHasAll) ||
        (!oldDataHasAll && newValue.length === allData.length - 1)
      ) {
        data = allData.map((item) => item?.value as string);
      }
      setCurrentValue(data);
      return data;
    },
    [allData, currentValue]
  );

  return {
    getAllData,
    allData,
    GetAllDataWithSelect,
  };
}
