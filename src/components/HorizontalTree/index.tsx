import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import treeTools from "@/utils/treeTools";
import TreeTools from "@/utils/treeTools";
import { createStyles } from "antd-style";
import { useSetState } from "ahooks";
import TreeCheck from "@/components/HorizontalTree/TreeCheck";
import TreeCheckGroup from "@/components/HorizontalTree/TreeCheckGroup";

export const TreeContext = React.createContext<any>({});

type FlatTreeListStateType = Record<
  string,
  {
    value?: string | string[];
    parentIds?: string[];
    childrenIds?: string[];
    checked?: boolean;
    halfChecked?: boolean;
  }
>;
type FlatTreeType = Record<
  string,
  {
    label?: string;
    value?: string;
    rowSpan?: number;
    parentId?: string;
    children?: Record<string, any>[];
  }
>;

export type HorizontalTreeInstance = {
  reload: () => void;
};
/**
 * 处理父级选中状态
 */
export const handleParentCheckedChange = (
  data: FlatTreeListStateType[""],
  newList: FlatTreeListStateType,
  childrenHalfChecked: boolean,
  setFlatTreeListState: any
) => {
  // 更新闭包数据，避免useState异步更新
  let prevParentHalfChecked = childrenHalfChecked;
  data?.parentIds?.forEach((item: string | number) => {
    const parentData = newList[item];
    // 底层group全选后，需要判断上层是否也全选
    // 取出现在已经checked的长度
    let checkedSize = 0;
    let checkedHalfSize = 0;
    // 取出现在已经checked的长度和checkedHalf长度
    parentData?.childrenIds?.forEach((childrenItem: string) => {
      const childrenData = newList[childrenItem];

      if (!childrenData) return;
      if (childrenData.checked) {
        checkedSize += 1;
      }
      if (childrenData.checked || childrenData.halfChecked) {
        checkedHalfSize += 1;
      }
    });
    // 判断是不是全选~
    const parentChecked = checkedSize === parentData?.childrenIds?.length;
    // 判断是否半选，prevParentHalfChecked表示子属性的半选状态
    const parentHalfChecked =
      (checkedHalfSize > 0 &&
        checkedHalfSize < (parentData?.childrenIds?.length ?? 0)) ||
      prevParentHalfChecked;
    // 更新本节点半选中状态，提供给父节点使用
    prevParentHalfChecked = parentHalfChecked;
    const newData = {
      ...(parentData ?? {}),
      checked: parentChecked,
      halfChecked: parentChecked ? false : parentHalfChecked,
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
  return newList;
};

const useStyles = createStyles(({ css, token }) => {
  return {
    container: css`
      & > td {
        padding: 4px !important;
      }
    `,
    disabled: css`
      /*      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;*/

      .ant-checkbox-wrapper {
        cursor: not-allowed;
        pointer-events: none;

        &:after {
          display: none;
        }
      }

      .ant-checkbox-input {
        cursor: not-allowed;
        pointer-events: none;
      }

      .ant-checkbox-inner {
        background: ${token.colorBgContainerDisabled};
        border-color: ${token.colorBorder};

        &:after {
          border-color: ${token.colorTextDisabled};
        }
      }

      .ant-checkbox-indeterminate .ant-checkbox-inner::after {
        background: ${token.colorTextDisabled};
      }

      .ant-checkbox + span {
        color: ${token.colorTextDisabled};
      }
    `,
  };
});
const HorizontalTree: React.ForwardRefRenderFunction<
  HorizontalTreeInstance,
  {
    data: any;
    searchData: string;
    checkedData?: string[];
    disabled?: boolean;
    onChange?: (value: FlatTreeListStateType, init?: boolean) => void;
  }
> = ({ data, searchData, checkedData, disabled, onChange }, ref) => {
  const { styles, cx } = useStyles();
  const [flatTreeListState, setFlatTreeListState] =
    useSetState<FlatTreeListStateType>({});
  const [firstRow, setFirstRow] = useState<Record<string, any>>();
  const [flatTree, setFlatTree] = useState<FlatTreeType[]>([]);

  const getFlatTree = (): FlatTreeType[] => {
    const childrenMenusName = ["GroupMenus", "Menus"];
    const childrenName = ["GroupName", "ClsName"];
    const tree: FlatTreeType[] = [];
    let flatTreeState: FlatTreeListStateType = {};
    TreeTools.forEachAssignChildren(
      data,
      childrenMenusName,
      (item: Record<string, any>) => {
        const keys = Object.keys(item);
        const childrenLevel = childrenName.findLastIndex(
          (i) => keys.indexOf(i) > -1
        );
        // 拿不到当前数据层级
        if (childrenLevel === -1) return;
        const child = item?.[childrenMenusName[childrenLevel]] ?? [];
        // 是否遍历到最底层
        const isEndLevel = childrenLevel === childrenMenusName.length - 1;

        // 进行树转数组
        if (isEndLevel) {
          // 完整路径
          const path = TreeTools.findAssignChildrenPath(
            data,
            childrenMenusName,
            (n) => n.Id === item?.Id
          );

          const obj: FlatTreeType | undefined = path?.reduce(
            (prev: FlatTreeType, curr: Record<string, any>, index: number) => {
              const level = childrenName.findLastIndex(
                (i) => Object.keys(curr).indexOf(i) > -1
              );
              const isEnd = level === childrenMenusName.length - 1;

              let data: FlatTreeType = {
                ...prev,
                [`col${index}`]: {
                  label: curr?.[childrenName[level]],
                  value: curr?.Id,
                },
              };
              // 最后一层的要加上 CheckGroup 数据
              if (isEnd) {
                data = {
                  ...data,
                  [`col${index + 1}`]: {
                    parentId: curr?.Id,
                    children:
                      child?.map((childItem: any) => ({
                        label: childItem?.ModelName,
                        value: childItem?.ModelID,
                      })) ?? [],
                  },
                };
              }

              return data;
            },
            {}
          );
          if (!firstRow) setFirstRow(obj);
          tree.push(obj ?? {});
        }

        // 将数据拍平存放到object
        const firstId = item?.Id;
        const parentIds = treeTools
          .findAssignChildrenPath<any>(
            data,
            childrenMenusName,
            (n) => n?.Id === firstId
          )
          ?.map((item) => item?.Id);
        const childrenIds: string[] = [];

        // 遍历指定子属性
        treeTools.forEachAssignChildren<any>(
          child,
          childrenMenusName?.slice(childrenLevel, childrenMenusName.length),
          (n) => n?.Id && childrenIds.push(n.Id)
        );
        let newState: Record<string, any> = {
          childrenIds: isEndLevel
            ? child?.map((i: any) => i?.ModelID)
            : childrenIds,
          // 从最接近节点的父节点开始遍历
          parentIds: parentIds?.slice(0, parentIds?.length - 1)?.reverse(),
          checked: false,
          halfChecked: false,
        };
        // 初始化flatTreeState
        flatTreeState[item.Id] = newState;
        if (isEndLevel) {
          // 处理已选中数据
          const checkedValue =
            checkedData?.filter((i) => {
              return child.some((c: any) => c?.ModelID === i);
            }) ?? [];
          const checked = child?.length === checkedValue.length;
          const halfChecked =
            checkedValue.length > 0 && checkedValue.length < child?.length;
          newState = {
            ...newState,
            value: checkedValue,
            checked,
            halfChecked,
          };
          // 在更新一次末端节点数据
          flatTreeState[item.Id] = newState;
          // 处理节点 关联的父节点
          const newFlatTreeState = handleParentCheckedChange(
            newState,
            flatTreeState,
            halfChecked,
            setFlatTreeListState
          );
          // 更新父节点
          flatTreeState = {
            ...(flatTreeState ?? {}),
            ...(newFlatTreeState ?? {}),
          };
        }
      }
    );
    // console.log('flatTreeState', flatTreeState)
    // console.log('tree', tree)
    setFlatTreeListState(flatTreeState);
    return tree;
  };
  useEffect(() => {
    const initData = getFlatTree();
    setFlatTree(initData);
  }, []);
  /**
   * 初始化选中数据
   */
  const initCheckedData = useCallback(
    (checkedList: string[]) => {
      const checks = [...(checkedList ?? [])];
      // 更新闭包数据，避免useState异步更新
      let newList = {
        ...flatTreeListState,
      };
      for (const flatTreeStateKey in flatTreeListState) {
        // 只有最后一层数据带有value
        if (
          Object.getPrototypeOf(flatTreeListState[flatTreeStateKey]) &&
          Array.isArray(flatTreeListState[flatTreeStateKey]?.value)
        ) {
          const child = flatTreeListState[flatTreeStateKey]?.childrenIds ?? [];
          const checkedValue =
            checks?.filter((item) => child?.some((v: string) => v === item)) ??
            [];
          // 减少forEach
          if (
            checks.length > 0 &&
            (!checkedValue ||
              (checkedValue?.length === 0 &&
                flatTreeListState[flatTreeStateKey]?.value?.length === 0))
          ) {
            continue;
          }
          const checked = child?.length === checkedValue?.length;
          const halfChecked =
            checkedValue.length > 0 && checkedValue?.length < child?.length;

          const newChildrenData = {
            ...flatTreeListState[flatTreeStateKey],
            value: checkedValue,
            checked,
            halfChecked,
          };
          setFlatTreeListState({
            [flatTreeStateKey]: newChildrenData,
          });
          newList = {
            ...newList,
            [flatTreeStateKey]: newChildrenData,
          };
          // 处理节点 关联的父节点
          newList = handleParentCheckedChange(
            newChildrenData,
            newList,
            halfChecked,
            setFlatTreeListState
          );

          //   filter掉已经处理的数据
          checks?.filter(
            (item) => !checkedValue?.some((v: string) => v === item)
          );
        }
      }
      onChange?.(newList ?? [], true);
    },
    [flatTreeListState]
  );
  /**
   *
   * 页面数据切换时调用
   */
  useEffect(() => {
    initCheckedData(checkedData ?? []);
  }, [checkedData]);

  useImperativeHandle(
    ref,
    () => ({
      reload() {
        initCheckedData([]);
      },
    }),
    [flatTreeListState]
  );
  /**
   * 过滤搜索内容
   */
  const filterSearch = (data: FlatTreeType[], value: string) => {
    return data?.filter((item) => {
      let hasValue = false;
      for (const itemStrKey in item) {
        if (Object.getPrototypeOf(item[itemStrKey])) {
          if (item[itemStrKey]?.label?.includes?.(value)) {
            hasValue = true;
          }
          if (
            item[itemStrKey]?.children?.some((i) => i?.label?.includes?.(value))
          ) {
            hasValue = true;
          }
        }
      }
      return hasValue;
    });
  };

  /**
   * 计算数据列合并
   */
  const changeRowspan = (data: FlatTreeType[]): FlatTreeType[] => {
    const rowSpans: {
      size: number;
      id: string;
    }[] = [];
    return data.map((item) => {
      const objKeys = Object.keys(item);
      objKeys.forEach((i, index) => {
        const isEnd = index === objKeys.length - 1;
        // 取出同层级有多少相同id
        const hasLength = data.filter((filterItem) => {
          return filterItem[i]?.value === item[i]?.value;
        })?.length;

        const rowSpan: number =
          rowSpans?.[index]?.id === item?.[i]?.value && rowSpans?.[index]?.size
            ? 0
            : hasLength;
        item[i] = {
          ...item[i],
          rowSpan: isEnd ? 1 : rowSpan,
        };
        // 更新层级size
        rowSpans[index] = {
          size: hasLength ?? 1,
          id: item[i]?.value ?? "",
        };
      });
      return item;
    });
  };

  /**
   * 进行列合并和检索
   */
  const flatTreeList = useMemo(() => {
    const newData = filterSearch(flatTree, searchData);
    const mergeData = changeRowspan(newData);

    return mergeData;
  }, [flatTree, searchData]);

  /**
   * 赋值column的rowspan
   * @param record
   * @param dataIndex
   */
  const sharedOnCell = (record: any, dataIndex: string) => {
    return { rowSpan: record?.[dataIndex]?.rowSpan ?? 1 };
  };

  const getColumns: ColumnsType<Record<string, any>> = useMemo(() => {
    const columns: ColumnsType<Record<string, any>> = [];
    if (!firstRow) return columns;
    const colName = Object.keys(firstRow ?? {});
    colName?.forEach((item, index) => {
      columns[index] = {
        dataIndex: item,
        width: 150,
        ellipsis: true,
        onCell: (record: Record<string, any>) => sharedOnCell(record, item),
        render: (record: Record<string, any>) => {
          return (
            <TreeCheck
              key={record?.value}
              {...record}
              onChange={onChange}
              // disabled={disabled}
            />
          );
        },
      };
      // 最后一列
      if (index === colName.length - 1) {
        columns[index] = {
          dataIndex: item,
          ellipsis: true,
          render: (record: Record<string, any>) => {
            return (
              <TreeCheckGroup
                key={record?.parentId + index}
                {...record}
                onChange={onChange}
                // disabled={disabled}
              />
            );
          },
        };
      }
    });
    return columns;
  }, [disabled, firstRow, onChange]);

  return (
    <TreeContext.Provider value={{ flatTreeListState, setFlatTreeListState }}>
      <Table
        // 比直接在子组件处理disabled快一点点
        rowClassName={cx(styles.container, disabled ? styles.disabled : "")}
        showHeader={false}
        columns={getColumns}
        dataSource={flatTreeList}
        bordered
        pagination={false}
        // scroll={{ y: 480 }}
      />
    </TreeContext.Provider>
  );
};

export default memo(forwardRef(HorizontalTree));
