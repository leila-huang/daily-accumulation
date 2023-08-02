# daily-accumulation

Created with CodeSandbox

## 项目内容清单：

- [x] 递归&广度查找在xxx条数据下速度对比
- [x] select支持全选的hook
- [ ] 深过滤、深对比、深拷贝实现
- [ ] 判断是手机端还是PC端
- [x] StringToObject工具：递归读取脚本所在目录下的文件并执行StringToObject操作，key按指定规则拆分成对象
- [x] 横向TreeTable
- [x] lodash 实现：omit/pick

## 项目成长过程
- [x] Created with CodeSandbox
- [x] 加入 react-router
- [x] 加入eslint+prettier


### 加入 react-router
使用的npm包名是`react-router-dom`
#### react-router-dom vs react-router?
dom的包已经包含了react-router，如果开发的是reactNative则使用的是react-router-native npm包


### 加入 eslint+prettier
> eslint用airbnb推荐的配置
> 不用airbnb，因为现在是React的语法
> - [eslint的规则使用说明（rule、extends、plugins等）](https://www.panyanbin.com/article/25ad0d7f.html)
> - ESLint+Prettier代码规范实践：https://juejin.cn/post/6844904065319731208
> - Prettier常用配置：https://blog.csdn.net/onlyliii/article/details/89312857
> - https://zhuanlan.zhihu.com/p/459910664

``` npm
npm install eslint-plugin-jsx-a11y --save-dev
npm install eslint-plugin-import --save-dev
```
遇到一个问题 [https://stackoverflow.com/questions/68379348/how-to-resolve-failed-to-load-config-prettier-to-extend-from-in-react-js](How to Resolve Failed to load config "prettier" to extend from. in react Js)
