/**
 * 查找指定多层数据的某节点,菜单的数据结构使用 广度优先比递归 快2ms+
 * https://github.com/wintc23/js-tree-tool/blob/master/index.js
 * @param tree
 * @param func
 */
interface INode<T> {
  children?: T[]
  [key: string]: any
}
function findNode<T extends INode<T>>(tree: T[], func: (node: T) => {}) {
  if (!tree) return undefined
  const list = [...tree]
  for (const node of list || []) {
    if (func(node)) return node
    node?.children && list.push(...(node?.children || []))
  }
}



/**
 *  深度优先查找
 * @param tree
 * @param func
 */
function findDeepNode<T extends INode<T>>(
  tree: T[] | undefined,
  func: (node: T) => {},
): T | undefined {
  if (!tree) return undefined
  for (const node of tree || []) {
    if (func(node)) return node
    const _val = findDeepNode<T>(node?.children, func)
    if (_val) return _val
  }
}

/**
 * 查找节点的完整路径
 * @param tree
 * @param func
 */
function findPath<T extends INode<T>>(
  tree: T[],
  func: (node: T) => {},
): T[] | undefined {
  const list = [...(tree || [])]
  const path = []
  const pathSet = new Set()
  while (list.length) {
    //  队列的方式，先进先出
    const node = list[0]
    //  不符合条件先清除
    if (pathSet.has(node)) {
      path.pop()
      list.shift()
      continue
    }
    pathSet.add(node)
    path.push(node)
    // 先进
    node?.children && list.unshift(...node.children)
    // 符合条件就出去啦
    if (func(node)) return path
  }
}

export default {
  findNode,
  findDeepNode,
  findPath,
}
