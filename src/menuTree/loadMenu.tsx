import TreeTools from './treeTools'


enum PageType {
  // 旧的html页面
  Html = 'html',
  // 低代码页面
  Lowcode = 'lowcode',
  // 新页面
  New = 'new',
  // 微应用 盈客宝页面
  Mirco = 'mirco-app',
}
export type MenuDataItem = {
  /** @name 子菜单 */
  children?: MenuDataItem[];
  routes?: undefined;
  /** @name 在菜单中隐藏子节点 */
  hideChildrenInMenu?: boolean;
  /** @name 在菜单中隐藏自己和子节点 */
  hideInMenu?: boolean;
  /** @name 菜单的icon */
  icon?: React.ReactNode;
  /** @name 自定义菜单的国际化 key */
  locale?: string | false;
  /** @name 菜单的名字 */
  name?: string;
  /** @name 用于标定选中的值，默认是 path */
  key?: string;
  /** @name disable 菜单选项 */
  disabled?: boolean;
  /** @name 路径,可以设定为网页链接 */
  path?: string;
  /**
   * 当此节点被选中的时候也会选中 parentKeys 的节点
   *
   * @name 自定义父节点
   */
  parentKeys?: string[];
  /** @name 隐藏自己，并且将子节点提升到与自己平级 */
  flatMenu?: boolean;
  /** @name 指定外链打开形式，同a标签 */
  target?: string;
  /**
   * menuItem 的 tooltip 显示的路径
   */
  tooltip?: string;
  [key: string]: any;
};
export interface IMenuData {
  /**
   * 父级name
   */
  parent?: string
  /**
   * 唯一标识，命名规则:中划线分割
   * 国际化语言包id，例如:设备管理 ->游乐项目管理，[父级菜单name].[当前菜单name] (device-machine)
   */
  name?: string
  /**
   * 默认菜单名称，当语言包没有该菜单配置时显示
   */
  label?: string
  /**
   * 排序
   */
  order?: number
  /**
   * 菜单icon，预留字段
   */
  icon?: string
  /**
   * 页面类型，可空(默认为new)
   * new: 新页面
   * html: 原有html页面
   * micro-app: 微应用 (盈客宝页面)
   */
  type?: PageType | string
  /**
   * 页面资源，例如:
   * - 新页面路由 /game/machineset
   * - 旧页面 /admin/game/machineset.html
   * - 盈客宝页面 http://pw.rapa.vip/integralmall-business-pc/member-centre/function-set
   * - 低代码页面shecma /admin/lowcode/xxx.json
   */
  resource?: string

  [key: string]: any
}

function htmlUrlTransformer(url: string) {
  const [pathName, extension] = (url || '').split('.')

  const pageName = extension === 'html' ? pathName : pathName

  return [`/${pathName}`, extension, pageName]
}

/**
 *
 * @param menuData  服务器传过来的menu数据
 */
export default function (
  menuData: Record<string, any>[],
):MenuDataItem[] {
  // menu根标识
  const MENU_ROOT = 'menu_root'

  let menus: MenuDataItem[] = []

  const menuGroupMap = new Map<string, IMenuData[]>()

  // 对Menus数据进行分组
  menuData.forEach((item) => {
    const [pathName, , pageName] = htmlUrlTransformer(item.resource || '')


    const menuItem = {
      ...item,
      // i18n : formatMessage的id值,
      locale: item.parent
        ? `menu.${item.parent}.${item.name}`
        : `menu.${item.name}`,
      key: item.name,
      name: item.label,
      path: pathName,
      app: `original_${pageName}`,
      type: item.type || PageType.Html,
    }
    const data = menuGroupMap.get(item.parent || MENU_ROOT) || []
    menuGroupMap.set(item.parent || MENU_ROOT, [...data, menuItem])
  })
  console.log('menuGroupMap',menuGroupMap)
  // 组装menu树
  menuGroupMap.forEach((item, key) => {
    const menuItem = item.sort((a, b) => (a.order || 0) - (b.order || 0))
    if (key === MENU_ROOT) {
      menus = [...menuItem]
      return
    }

    const parent = TreeTools.findNode<MenuDataItem>(menus, (n) => n.key === key)

    if (!parent) return
    parent.children = [...menuItem]
    // @ts-ignore
    parent.routes = [...menuItem]
  })

  return menus
}
