import component from "./component";
import menu from "./menu";
import hooks from "./hooks";
import common from "./common";

export default {
  "navBar.lang": "语言",
  "layout.user.link.help": "帮助",
  ...menu,
  ...component,
  ...hooks,
  ...common,
};
