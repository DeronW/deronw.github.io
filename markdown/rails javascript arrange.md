# Rails JavaScript 整理
> 2016-03-08

## javascript文件的目录结构

使用官方文档中推荐的 javascript 文件结构目录就可以了. 举例:

* javascript
    * application.js
    * html5shiv.js
    * respond.js
    * ...
    * products
        * ...
    * home
        * login.js
        * register.js
        * ...

注意事项:

1. 通过 //= require 引入js时要注意js的加载顺序
2. 自定义js模块推荐使用模块的闭包方式,避免不必要的全局变量.

javascript的闭包代码示例:

普通的闭包:

    ;(function(){
        var local = new Date();
        console.log("time has passed by. " + local)
    })();

文艺闭包:

    +function($){
        'use strict';
        var done = function(){
            console.log("document is ready");
        }
        $(function(){
            done();
        })
    }(jQuery);

傻逼闭包:

    (function foo(){
        body = $("body")[0]
        $("#" + body.attr("id")).show();
    }()

## html5shiv

问题:

1. 包含多个相同文件
2. 代码添加了自定义功能可以去除

方案:

1. 整理文件目录

    * ./public/html5.js
    * ./public/html5shiv.js
    * ./public/static/js/html5shiv.js
    * ./public/html5shiv-printshiv.js

    统一成一份: ./public/static/js/html5shiv.js

2. 自定义代码

引入时不用判断当前浏览器是否支持html5, html5shiv会自行判断, 通过 ``supportsHtml5Styles=("hidden" in a)`` 方法
html5shiv-printshiv.js 在前端代码中没有用到, 从静态目录中除去

### html5shiv VS. modernizr

``html5shiv`` 是让IE8及以下浏览器支持html5标签,  ``modernizr`` 用来判断浏览器至此的内容并做适当的补全.在功能范围上 modernizr 覆盖了 html5shiv 的功能,代码体积也相应增加. 在前端实践中推荐使用 modernizr ,但是如果前端不需要html5的诸多特性时,只要使用 html5shiv 就够了.

## jQuery

问题:

1. 包含多个相同文件
2. 版本不统一

方案:

在引入jQuery时使用同一个文件,不随意更换版本 (tcp_server不在前端整理范围内)

./public/ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
./public/boilerplate/js/vendor/jquery-1.10.2.min.js
./public/jquery-1.10.2.min.js
./app/assets/javascripts/jquery_noconflict.js.erb
./app/assets/javascripts/boilerplate/vendor/jquery-1.10.2.min.js

统一使用1.10.2版本的jQuery, 目录位置: ``./public/js/jquery-1.10.2.min.js``

### jQuery的引用路径

在项目中引用 jQuery 的路径根据保存 jQuery 的位置会有所不同, 主要有3种方式:

1. 本地路径, ``/public/jquery.min.js`` ,将jQuery加入后台代码版本库,手动维护.
2. ruby库, ``gem "jquery-rails"`` , 个人不喜欢这个, 只能使用库里包含的jQuery版本, 不方便定制
3. 公共CDN, BAE的 [jQuery](http://developer.baidu.com/wiki/index.php?title=docs/cplat/libs#jQuery) 比较喜欢这个, 用别人的代码做自己的事, 缺点是不能断网调试.

## boilerplate VS. bootstrap

1. 功能全面上 boilerplate 略胜一筹
2. 可定制上 bootstrap 更为出色
3. 整合进项目可用性上 bootstrap 完爆 boilerplate
4. 实践方法上 bootstrap 适合整站, boilerplate适合生成模板
