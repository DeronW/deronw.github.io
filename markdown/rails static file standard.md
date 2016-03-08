# 静态文件整理说明
> 2016-03-08

使用rails默认的2个目录 ``/app/assets`` , ``/public`` 存储静态文件,静态文件包括 js, css, 图片, flash等
rails新版的 官方推荐静态资源目录更改为: ``/app/assets`` , ``/lib/assets`` , ``/vendor/assets`` , 是否要将静态文件迁移到这三个目录中?

静态文件管理方法参考:
* 官方pipline: http://guides.rubyonrails.org/asset_pipeline.html
* 实践方法 https://github.com/rails/rails/pull/7968

基于[bootstrap](http://getbootstrap.com/) 的前端风格, 提供了良好的风格设定和多种变量方法预设,在RoR项目中使用bootstrap通过 [bootstrap-sass](https://github.com/twbs/bootstrap-sass) 库实现

### 风格指南

旨在提出一套基于网站的后台框架和站点规模的前端风格

1. 结合RoR的方法优于自定义的方法.

    基于 ``sass-rails`` 和 ``bootstrap-sass`` 等ruby库的引入为前端开发提供很多帮助,使用这样的实践方法比自己短时间内想出的解决方案更能禁得住考验.

2. 模块化的结构优于紧耦合的结构.

    CSS和JS的代码可以根据页面的功能拆分成多个小模块,通过页面引用时的文件聚合(比如css的 //= require "...")可以把小模块整合在一起. 这样的结构比维护一个大的包含全部功能的文件( `__cb.css` 和 `__cp.css` 等)更容易,通过需求定制代码包含的内容,也可以减少冗余代码.

3. 清晰的文件目录优于代码的引用设置.

    使用符合RoR的静态文件管理方式(与传统的静态文件管理方式有很多差别,尤其跟以PHP为首的web语言不同), 一个清晰的文件目录能让代码看起来更直观更容易修改.

4. 精简的生产环境页面优于临时拼凑的合成页面

    前端的结构和代码的简单性是易维护和稳定性的重要基础.做的这一点不仅在源码的结构上要划分模块,还要在正式环境下进行聚合.例如新的页面引入的自定义CSS文件数量控制在1个(第三方前端库的引入不算在内).

5. 慎用第三方前端代码库

    别人写好的代码拿来就用,省下好多时间,却也带来很多问题(版本,自身包含的bug,冗余功能...). 基于现在的网站前端设计,不需要引用许多第三方的前端代码,如果需要,请谨慎选择


### 模板的结构

使用rails默认的模板系统, 这次升级的关键是模板的继承和组合.

1. 除ajax和特殊页面外, 所有页面都要继承子 ``base.html.erb`` , 可以定义多个 ``layouts`` ,所有 ``layouts`` 都要直接或间接继承子 ``base.html.erb`` .
2. 所有页面的模块划分依照继承的上一级页面.
3. 组合页面和分区渲染页面方式优于单页面包含全部内容.

### 目录结构说明

* app/assets/ 目录: 存放自定义的静态文件.

    * app/assets/images/ 图片路径
    * app/assets/javascripts/ JavaScript文件路径
        * app/assets/javascript/bootstrap/ 该目录被 ``bootstrap-sass`` 占用,不要再项目中使用该目录
    * app/assets/stylesheets/ CSS文件路径
        * ph_bootstrap/ 目录是对 bootstrap 的定制, 需要使用相关样式时可以在这个目录下定义对应文件
            * full.scss 引入 bootstrap 的完整版
            * mini.scss 只包含简单的样式
            * grid.scss 只包含网格的样式定义
            * 酌情增加
        * _variables.scss 公共样式变量集合, 包含基本的颜色和尺寸数据, 因为网站设计风格未定,暂时无设置
        * sections/ 页面的通用分区样式, 一个文件包含对页面一个区块的设置,比如 header\footer 等等
        * themes/ 自定义主题的主题集
            * default/ 默认风格样式路径
            * ./ 其它风格样式路径, 为各种专题或不同风格或不同设备设置不同样式 themes/holiday/..

#### JS部分

全局使用 html5shiv.js 和 respond.js

#### CSS部分

全局定义字体, 字体在页面呈现次最多, 应给予重视.

1. 字体大小, PC端的chrome浏览器会限定页面字体最小12px, 所以在页面上不要设置小于12px的字体(IE, firefox没有这个限制)
2. 字体名字, CSS的 ``font-family`` 参数, 为了能较好展示中文字体, 推荐使用指定的字体. 在Mac上用雅黑细体,在windows上使用微软雅黑. 所以字体的样式摄者应该是:

> font-family: "STXihei", "Microsoft YaHei";

#### 替换的内容
使用 ``bootstrap`` 替换 ``boilerplate``

#### 移除的内容

app/assets/stylesheets/bootstrap/ 该目录被 ``bootstrap-sass`` 占用, 不要再项目中使用该目录

#### HTML页面部分

    <meta name="keywords" content="<%= yield :keywords %>"> , SEO的关键字

    <%= yield :meta %> , 附加meta属性, 可以用来增加 `user-scalable=no` 等属性

    <%= yield :css %> , 在 <%= yield :head %>后, 定义页面样式

    <%= yield :js_head %> , 在head标签中的js代码,除特殊情况外不建议使用

    <%= yield :js %> , 在页面底部的js代码,建议在这里引入相关js库

全局的 `.no-js` `lt-ie9` `lt-ie8` `lt-ie7` 样式, 定义在html标签上, 因为没有对应的 CSS 实现, 并且支持IE7及以下浏览器. 去掉