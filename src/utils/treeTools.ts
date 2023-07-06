/**
 * 查找指定多层数据的某节点,数据量大的情况下 广度优先比递归 快2ms+
 * https://github.com/wintc23/js-tree-tool/blob/master/index.js
 * @param tree
 * @param func
 */
interface INode<T> {
  children?: T[];
  [key: string]: any;
}

function findNode<T extends INode<T>>(
  tree: T[],
  func: (node: T) => boolean
): T | undefined {
  if (!tree) return undefined;
  const list = [...tree];
  // eslint-disable-next-line no-restricted-syntax
  for (const node of list || []) {
    if (func(node)) return node;
    if (node?.children) {
      list.push(...(node?.children || []));
    }
  }

  return undefined;
}

/**
 *  深度优先查找
 * @param tree
 * @param func
 */
function findDeepNode<T extends INode<T>>(
  tree: T[] | undefined,
  func: (node: T) => boolean
): T | undefined {
  if (!tree) return undefined;
  // eslint-disable-next-line no-restricted-syntax
  for (const node of tree || []) {
    if (func(node)) return node;
    const val = findDeepNode<T>(node?.children, func);
    if (val) return val;
  }

  return undefined;
}

/**
 * 查找节点的完整路径
 * @param tree
 * @param func
 */
function findPath<T extends INode<T>>(
  tree: T[],
  func: (node: T) => boolean
): T[] | undefined {
  const list = [...(tree || [])];
  const path = [];
  const pathSet = new Set();
  while (list.length) {
    //  队列的方式，先进先出
    const node = list[0];
    //  不符合条件先清除
    if (pathSet.has(node)) {
      path.pop();
      list.shift();
      // eslint-disable-next-line no-continue
      continue;
    }
    pathSet.add(node);
    path.push(node);
    // 先进
    if (node?.children) {
      list.unshift(...node.children);
    }
    // 符合条件就出去啦
    if (func(node)) return path;
  }

  return undefined;
}

/**
 * 查找节点的完整路径
 * @param tree
 * @param childrenName  指定每一层children的key
 * @param func
 */
function findAssignChildrenPath<T extends INode<T>>(
  tree: T[],
  childrenName: string[],
  func: (node: T) => any
): T[] | undefined {
  const list = [...(tree || [])];
  const path = [];

  const pathSet = new Set();
  while (list.length) {
    //  队列的方式，先进先出
    const node = list[0];
    const keys = Object.keys(node);
    const childrenLevel = childrenName.findIndex((i) => keys.indexOf(i) > -1);

    //  不符合条件先清除
    if (pathSet.has(node)) {
      path.pop();
      list.shift();
      // eslint-disable-next-line no-continue
      continue;
    }
    pathSet.add(node);
    path.push(node);
    // 先进
    if (node?.[childrenName[childrenLevel]]) {
      list.unshift(...node?.[childrenName[childrenLevel]]);
    }

    // 符合条件就出去啦
    if (func(node)) return path;
  }
  return path;
}
/**
 * 遍历节点
 * @param tree
 * @param childrenName  指定每一层children的key
 * @param func
 */
function forEachAssignChildren<T extends Record<string, any>>(
  tree: T[],
  childrenName: string[],
  func: (node: T) => any
) {
  const list = [...tree];

  for (let i = 0; i < list.length; i++) {
    const keys = Object.keys(list[i] ?? {});
    const childrenLevel = childrenName.findIndex((i) => keys.indexOf(i) > -1);
    // 取出当前children的name
    const children = childrenName[childrenLevel ?? 0];
    func(list[i]);
    if (list[i][children]) {
      list.splice(i + 1, 0, ...list[i][children]);
    }
  }
}
/**
 * 过滤节点
 * @param tree
 * @param childrenName  指定每一层children的key
 * @param func
 */
function filterAssignChildren<T extends Record<string, any>>(
  tree: T[],
  childrenName: string[],
  func: (node: T) => any
) {
  function listFilter(list: any[]) {
    return list
      .map((node) => ({ ...node }))
      .filter((node) => {
        const keys = Object.keys(node ?? {});
        const childrenLevel = childrenName.findIndex(
          (i) => keys.indexOf(i) > -1
        );
        // 取出当前children的name
        const children = childrenName[childrenLevel ?? 0];
        node[children] = node[children] && listFilter(node[children]);
        return func(node) || (node[children] && node[children].length);
      });
  }
  return listFilter(tree);
}
export default {
  findNode,
  findDeepNode,
  findPath,
  findAssignChildrenPath,
  forEachAssignChildren,
  filterAssignChildren,
};
