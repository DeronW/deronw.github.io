# Nuxt 2.0 发布了

[Vue](https://vuejs.org/) 的服务端渲染框架 [Nuxt](https://nuxtjs.org/) 刚刚(2018-09-21)低调发布了**2.0**版本.

距离`1.0`版本发布刚刚过去8个月(2018-01-08).
`1.0`版本主要是针对 Vue 体系的升级, 而`2.0`则是对 Webpack 系列的升级(不得不说 Webpack 的更新速度太快). Nuxt官方在npm上发布了 [nuxt-edge](https://www.npmjs.com/package/nuxt-edge) 项目, 作为Nuxt项目的预览版本, nuxt-edge 持续更新了6个月的2.0版本, 才将2.0发布成为Nuxt的正式版.

## Nuxt2.0的变化

### 如何升级到2.0

Nuxt2.0没有破坏性变更, 可以直接升级. 所以你可以尝试直接修改 `package.json`. 通过命令来修改 `yarn add nuxt@^2.0.0` 或者 `npm install nuxt@^2.0.0` 😉

#### 升级步骤(繁琐但是安全)

* 仔细阅读升级公告(release note)
* 如果你是用了版本管理工具, 先提交并同步到最新版本. 然后切换到一个新分支
* 停止 Nuxt 进程
* [可选] 删除 `.nuxt` , `node_modules` 目录和 `yarn.lock` , `package.lock.json` 文件.
* 检查 nodejs 版本, 推荐使用 5.0 及以上版本(个人推荐10.0版本)
* 更新文件语法, `nuxt.config.js` , `modules` ,`serverMiddleware` 文件中使用 `import/export` (ESM) 语法代替 `require` (CommandJS) 语法
* 执行 `npm install` 或 `yarn install`
* [可选] 使用 `npm outdated` 或 `yarn outdated` 检查是否有需要更新的模块, 如果有则手动更新
* 如果绑定了CDN的持续继承/持续发布工具, 需要更新工具配置中的文件编译路径, 用新路径 `.nuxt/dist/client` 代替原路径 `.nuxt/dist/client`

如果还有其它问题, 在[社区官网](https://cmty.app/nuxt)上给他们提bug

### 主要变更

* 采用了 Webpack 4.0 版本. (这是Nuxt2的一个最重要变化) 在 `nuxt-edge` 项目中持续更新了若干个版本, 以确保大部分插件(plugins)的兼容性, 最终才发布了稳定版本.
* 为了实现 服务端/客户端 的编译隔离(PR #3758), `build.publicPath` 的默认路径从 `.nuxt/dist` 修改为 `.nuxt/dist/client` (.nuxt/dist/目录下再分成两个目录 client 和 server , 用来指定不同的编译结果)
* `nuxt.config.js` , `serverMiddleware`, `modules` 文件支持 ESM语法, 可以直接使用 `import/export` 了.
* 升级到了 **Babel7**
* 用 `postcss-preset-env` 代替了 `postcss-cssnext` [说明](https://moox.io/blog/deprecating-cssnext) (PR #3291), 配置项 `build.postcss.preset` 变成针对 `postcss-preset-env` 的 [配置项](https://github.com/csstools/postcss-preset-env#options)
* 使用 NodeJS >= 8 时, 显示 [nuxt-start](https://www.npmjs.com/package/nuxt-start) , NodeJS < 8时显示 [nuxt-legacy](https://www.npmjs.com/package/nuxt-legacy)
* 升级 `css-loader` 的时候, 用 `~assets` 简写来代替 `~/assets` (少了一个斜杠) . 例如: `https://www.npmjs.com/package/nuxt-legacy`

### 新增特性

* 页面内JS增加 `watchQuery` 字段, 用来监控url的query中指定参数是否发生变化, 如果有变化则重新执行页面的生命周期函数(asyncData, fetch, validate, layout 等等)
* 现在可以忽略也没前缀了(PR #2594)
* 内部钩子方法可以在 `nuxt.config.js` 中分层次的设置了
* 页面中增加了 `loading: false` 配置项.(PR #3629)
* 新的 `stores` 模块设计, 从 `index.js` 划分出了4个文件 `actions.js`, `mutations.js`, `getters.js`, `state.js`
* 支持方法型的文件名称 (PR #3787)
* 服务端中间件修改后, 自动重启服务 (PR #3718)
* 开箱即用的 https 和 sockets (PR #3831)
* `nuxt.config.js` 配置中支持设置 server 的 `HOST` 和 `PORT` (PRs #3701)
* 支持 `NUXT_HOST` 和 `NUXT_PORT` 环境变量
* 在 `nuxt.config.js` 中可以直接设置 Vue 的config (PR #3655)
* 在 `nuxt.config.js` 中增加 postcss 的配置项 (PR #3734)
* 允许自定义压缩中间件 (PR #3863)
* 以 `NUXT_ENV_` 开头的环境变量会被自动添加到 `process.env` 中 (PR #3862)
* 升级 `no-ssr` 功能, 使用了 `vue-no-ssr 1.0.0`, 支持 `placeholderTag`

### 细节优化

* 修复 core/renderer 中script标签的渲染方法, 进而移出W3C的警告(PR #2971)
* 添加 `render:context` 方法钩子 (PR #3294)
* 在 `loadingIndicator` 中使用 `background` 代替 `background-color` (PR #3656), 在 SPA 模式下可以使用图片或渐变色了.
* 修复IE下 `loadingIndicator` 居中问题 (PR #3779)
* 增加 `watch` 选项, 用来监听文件变化并重启 nuxt 服务. 默认监听的是 `nuxt.config.js` 和 `serverMiddleware` (PRs #3633 and #3718)
* 生成文件时区分 客户端/服务端 , 有益于提高安全性 (PR #3758)
* 用 `webpackbar` 和 `consola` 提高命令行的可读性以及CI工具的日志输出
* 更好的资源文件引入名称, 便于区分开发模式和生产模式(PR #3789), 也便于防止开发模式下的文件重名(Issue #3786)
* 在 fetch 和 asyncData 发生错误时, 会把错误传给全局的 Vue errorHandler 方法 (PR #3652, #3781)
* 错误页面的提前渲染(在redirect之前) (PR #3782)
* lodash 模板中禁用模板迭代功能  (PR #3753)
* 优化特定插件不存在时的错误输出 (PR #3672)
* 在 `nuxt.config.js` 中自定义app.html文件的路径(PR #3678)
* 创建 App 过程中增加 `Quite`(静默)选项(PR #3705)
* 压缩导出的css文件(PR #3857)
* 文件变更检测 (PR #3893)
* 覆写 `store.registerModule` , 能够在服务端渲染模式下正常工作 (PR #3909)
* 添加节流函数(Throttle), 用来跳过批量加载内容  (PR #3886)

### 即将弃用

* `vendor` 即将被抛弃, 因为 Webpack 4已经不在使用
* 移出了 DLL 支持, 因其不够稳定, 并且 Webpack 速度已经非常快了
* 废弃 AggressiveSplittingPlugin 插件
* 用 `render.compresser` 参数代替 `render.gzip` 选项

### 内部提升

* ESLint: 箭头函数的参数始终使用括号 (PR #3630)
* ESLint: 确保 async 函数中一定有 await 方法
* ESLint: 能用点(.)属性的时候就不用中括号([xx])属性
* ESLint: 强制使用括号 (PR #3685)
* ESLint: 进制使用 var 声明变量 (PR #3681)
* ESLint: 能使用 const 就不用 let  (PR #3650)

参考: [ReleaseNote](https://nuxtjs.org/guide/release-notes#v2.0.0)


#### 结尾, 贴出我的Nuxt项目配置

![screenshot](https://raw.githubusercontent.com/DeronW/deronw.github.io/master/screenshots/WX20180923-134243.png)
