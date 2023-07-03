module.exports = {
  root: true,
  env: {
    // 指定代码的运行环境
    node: true,
    browser: true,
    es2021: true,
  },
  // extends：:使用预设lint（规则）包
  /*  extends 属性值由以下内容组成：
      1. plugin:
      2. 包名（可以省略其前缀，如 react 是 eslint-plugin-react 的缩写）
      3./
      4.配置名称（如 recommended）
      */
  // 使用 "eslint:recommended" 可以启用报告常见问题的核心规则子集（这些规则在规则页 上用复选标记“推荐（recommended）”来标识）。
  extends: [
    //   检测和规范React代码
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    // eslint-config-prettier：解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效。
    // eslint-plugin-prettier：将prettier作为ESLint规范来使用。
    // plugin:prettier/recommended：使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
    "plugin:prettier/recommended",
  ],
  // eslint解析器
  // eslint通过解析器去解析代码并进行代码校验，默认的解析器是Espree，
  // 如果我们需要自定义其他解析器让eslint解析代码，就需要把解析器配置到parser。
  parser: "@typescript-eslint/parser",
  // 解析器扩展配置
  parserOptions: {
    // 指定要使用的ECMAScript语法的版本
    ecmaVersion: 2020,
  },
  // plugins：规则增强配置
  // 由于eslint本身主要是对js代码进行语法检查以及少量代码格式化的操作，
  // 对于一些eslint没有定义的规则或其他格式文件的内容就无法识别进行lint校验。
  // 此时，若需要对这些文件内容进行lint规则，就需要使用eslint提供的plugins插件配置对lint规则进行新增
  plugins: ["@typescript-eslint"],
  // rules 来扩展（或覆盖）规则集：比如 启用额外的规则，覆盖规则
  rules: {},
};
