import component from "./component";
import globalHeader from "./globalHeader";
import pwa from "./pwa";
import settingDrawer from "./settingDrawer";
import hooks from "./hooks";
import settings from "./settings";
import common from "./common";

export default {
  "navBar.lang": "语言",
  "layout.user.link.help": "帮助",
  "layout.user.link.privacy": "隐私",
  "layout.user.link.terms": "条款",
  "app.preview.down.block": "下载此页面到本地项目",
  "app.welcome.link.fetch-blocks": "获取全部区块",
  "app.welcome.link.block-list": "基于 block 开发，快速构建标准页面",
  ...globalHeader,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...hooks,
  ...common,
};
