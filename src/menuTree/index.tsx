import React from 'react'
import loadMenu, { MenuDataItem } from './loadMenu'
import { originMenu } from './data'
import TreeTools from './treeTools'
import { Button } from 'antd'



const MenuTree: React.FC = ({}) => {
  const menus  = loadMenu(originMenu)
  console.log('menus',menus)

  const handleClick = ()=>{
    // 树查找
    console.time('findNode')
    const findNode = TreeTools.findNode<MenuDataItem>(menus,(node)=>node?.label==='个人绩效统计')
    console.log('findNode--->',findNode)
    console.timeEnd('findNode')

    console.time('findDeepNode')
    const findDeepNode =TreeTools.findDeepNode<MenuDataItem>(menus,(node)=>node?.ModelID===101006800)
    console.log('findDeepNode--->',findDeepNode)

    console.timeEnd('findDeepNode')
  }

  return <Button onClick={handleClick}>测试数据</Button>
}


export default MenuTree
