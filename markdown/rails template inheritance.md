#ruby on rails 的模板继承
> 2016-03-08

基于框架的后台语言都会使用一套模板引擎来实现web页面的渲染. 比如PHP的smarty, Python的jinja, Nodejs的jade.

Rails自带的模板实现方式,在此基础上实现一个简单模板结构.

一套web前端模板系统目的是以容易管理和修改的方式组织页面结构.主要体现在3个方面:
1. 模板继承, 模板的继承与类的继承类似,抽象出公共内容方便维护.
2. 模板组合 以区块为单位的html片段可以被引用到多个地方.
3. 变量预设, 模板的基本功能,预留变量名,后台通过数据渲染出结果.

这几个功能对应在RoR中的实现方式: 参考 http://guides.rubyonrails.org/layouts_and_rendering.html

代码举例:

#### 继承的用法:

在views中的 ``layout/base.html.erb`` 作为根模板,除特殊用途外,所以模板均继承自这个模板. 本来应使用 ``application.html.erb`` 的.但是这个文件被旧代码占用了,只好换了个文件作为根模板.

访问URL ``/products/hot`` ,它渲染的模板文件是 products/show_hot.html.erb, 这个文件继承自 application.html.erb, 而 application.html.erb 继承自 base.html.erb 如果修改 base 中的内容,则对应的修改对全局有效.

#### 组合的用法:

application.html.erb 文件用途是被其它页面继承,继承它的子页面自要填充自己的内容就好,一些 通用的页面内容可以在 application.html.erb 中包含,这样就会出现在每个继承它的子页面中.

application.html.erb 里包含了要使用的全局样式并组合了一些页面代码片段:

    <% render "header" %>
    <% render "footer" %>
    ...

#### 变量预设

<% content_for?(:title)? yield:title :"标题" %>