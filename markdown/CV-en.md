# CV 

## Deron.Wang

    birthday: 1988-08
    work experience: 8+ year
    email: w.del@qq.com
    bachelor in Computer Science
    
### Skills

Language

* Python (Django, Scrapy, Flask)
* Ruby (Rails, EventMachine)
* Web Frontend(HTML+JS+CSS)
* Node.js
* Golang

Database

* Redis (Pub/Sub)
* Postgres (Geo)
* MySQL
* MongoDB
* Neo4j

dev tools

* Linux / Ubuntu / CentOS
* Nginx / Caddy
* Git (Gitlab, Gitlab CI, Gitlab Runner)
* Bash/Shell
* VIM

### work experience

#### Digital China Co. (OA department)

``software engineering``
    
    build OA system, based on IBM Lotus platform
    skills: Web frontend and customer conmmunication
    
#### Lvye Vision

``senier software engineering``

    Lvye is a online travel services.
    用户系统，搜索，支付对账，新闻管理，合作方对接等服务
    
    skills: Python + Web frontend + Linux Operation

#### Breadtrip

    面包旅行后台架构研发，支撑大量用户及海量数据
    Python + 运维
    
    软件工程师   研发部

#### Huantengsmart

    架构设计 服务开发
    Ruby + Go + 运维 + Web前端

    软件工程师(主程 + 全栈)     研发部

### 金融工场

    前后端分离架构设计 大前端运维 混合开发
    Node.js + ES6 + 前端架构

    技术经理    研发中心

### 参与项目

**2010-05 ~ 2011-03**
    
在OA事业部都是基于 IBM Lotus 平台,开发企业办公自动化系统, 使用LotusScript语言
    
- 2010-07 劲霸男装OA系统(维护升级)
- 2010-10 新奥集团OA系统六期(驻现场[廊坊]提供技术支持和新功能开发)
- 2011-01 东尚服装OA系统一期(初期设计, 功能原型)

阶段重点/难点

- 业务与技术的适度结合
- 沟通能力, 需要与需求方的大量需求沟通/调整
- 文档型数据库, 区别与关系型数据库的使用方法

**2011-04 ~ 2013-07**

在联盈(绿野公司前身)从事Web开发, 前端+后端, 并完成若干公司内部项目

- 六只脚网站 [Python(Django) + Web前端]
    - 与8264网站单点登录[Python + PHP + Web前端]
    - 网站框架升级, Django1.2 升级到 Django1.3
- 绿野网 [PHP + Web前端]
    - 自动化部署 [Ubuntu + Shell + Python Fabric]
    - 服务整合 [PHP Discuz + PHP UCenter + Python Django + Xapian + MySQL]
    - 绿野滑雪网站 [Python Django]
- 天津智慧旅游项目, Web前端 [Web前端]
- 中国国债分布式系统管理后台 [Java + Web前端]

阶段重点/难点

- 单点登录, 跨服务, 跨域名, 跨公司的单点登录(SSO)的单点登录模型
- 运维自动化, 把手动运维工作整理升级成为自动化运维的脚本
- 整合不同的服务, 基于PHP的Discuz服务与基于Python的Django服务互相打通
- 搜索服务整合, 将Xzpian搜索引擎与Django服务整合到一起

2013-08 ~ 2014-08

面包旅行服务

- Django项目维护,提供全栈技术支持 [Python + Django + Postgres + Web前端]
- Web前端: 主营网站的前端开发
- 软件框架升级: Django1.3 -> Django1.5

阶段重点/难点

- 高流量下的单体服务架构, 产生了很高的代码复杂度, 需要精致的编码技巧才好应对
- 数据处理效率, Postgres的数据性能无法满足业务需求, 需要添加多层缓存来应对流量压力
- 框架演进, 单体架构下的框架演进困难重重但又势在必行

**2014-09 ~ 2015-01**

初期以Web前端工程师身份加入幻腾智能, 然后接触到Ruby/Golang

- Web前端重构,统一,规范Web前端的资源文件及使用方式 [Rails + Web前端 + CDN管理]
- 新版管理后台, 针对性的解决日常管理中遇到的问题 [Bootstrap + Rails Grape]
- 学习Ruby及Rails框架

阶段重点/难点

- 快速学习Ruby 及 Ruby on Rails 框架
- 采用领域驱动模式开发, 有极强的业务特殊性

**2015-02 ~ 2015-10**

在幻腾智能梳理整体服务结构,提出可行方案为智能硬件提供服务.
因为服务对象是用户+智能硬件,服务上下游涉及十分广泛

- Node TCP Watcher: 硬件指令补发(通过软件弥补硬件在无限传输中丢掉的通讯包)服务 [Node.js + Redis(Pub/Sub)]
- WebSocket Server: 允许浏览器链接到TCP Watcher,监控指令收发, 依赖TCP Watcher[Node.js + Redis(Pub/Sub)]
- Scenario Watcher: 检测一组指令的执行结果, 依赖TCP Watcher [Ruby(EventMachine) + Redis(Pub/Sub)]
- 异步服务:部署Sidekiq服务,取代DelayedJob
- 框架升级: Rails4.1 -> Rails4.2
- Web前端架构升级: 形成基于Node.js的编译型前端 [Sass + React + Rails assets pipeline]

阶段重点/难点

- 由单体服务转变成SOA, 并保持在线业务不中断
- 框架升级, 并升级相应的gem库, 保证兼容性及正确性

**2015-10 ~ 2016-01**

- 微服务: 无线开关被异常(硬件设备异常状态之一的捕捉)检测,作为独立服务运行, Long Press Checker, 依赖于TCP Watcher.
- Node.js + Redis(Pub/Sub)
- 统一Web前端开发规范,前端页面开发方式,与后端的数据交互模式

阶段重点/难点

- 硬件消息产生的高并发, 要求服务具有很高效率
- 消息分发/订阅/去重

**2016-02 ~ 2016-02**

- 整理文档:服务器运维,数据库管理,多种服务的分别部署的方式,不是异常处理,线上服务异常处理,开发环境搭建,前端模板规范,JavaScript及CSS等静态文件目录结构,React使用规范

**2016-03 ~ 至今**

- 加入金融工场, 任职技术经理
- 创建 Web前端部门
- 招聘 前端开发工程师
- 建立新的研发流程, 划分新成立的Web前端职责范围, 明确开发任务, 优化原有研发中心的研发流程
- 升级Web前端开发框架及技术栈
- 结合公司特定业务, 优化Web前端的架构
- 技术推广 / 跨部门合作

阶段重点/难点

- 从头组建一个新部门
- 持续推动部门内部技术进步
- 推动研发中心的技术进步
    
#### 作品展示

*   六只脚网站 [http://www.foooooot.com/](http://www.foooooot.com/) 
    
    六只脚通过GPS轨迹记录仪记录户外自助游线路轨迹,航迹,航点,提供GPS轨迹分享,轨迹下载,旅游景区景点及GPS设备资讯,感受你在户外旅游中的乐趣,分享您在自助游线路的轨迹路线,并提供手机GPS轨迹记录软件
    
    Web前端工程师, 为网站增加页面功能: 标签云,图片浏览列表,搜索功能等.
    
    HTML + CSS + JavaScript

*   绿野户外网 [http://www.lvye.cn/](http://www.lvye.cn/)
    
    绿野户外网是中国第一家户外运动网站,也是最具影响力的驴友论坛,作为优秀户外旅行活动网站,绿野为用户提供户外知识资讯,自助游线路,旅行装备评测,活动发起,户外旅行保险等服务
    
    全栈工程师,维护网站,增加新的功能模块:CMS管理后台,数据检索,前端结构升级,跨站互通(论坛和主站的互通). 优化服务性能(memcached + Xapian), 统一接口文档(RestructedText编写文档), 采用自动化部署方式(Python Fabric编写自动化不是脚本)
    
    后端: Python [Django] + PHP [Discuz] + MySQL + Xapian
    
    前端: HTML + CSS3 + JavaScript + Canvas
    
*   面包旅行 [http://web.breadtrip.com/](http://web.breadtrip.com/)
    
    面包旅行是一款旅途体验的记录和分享应用。你可以使用面包旅行记录旅途的每一分精彩和感动，珍藏美好的旅行回忆，也可以通过面友们分享的异域风景和不同文化，获得旅行灵感
    
    全栈工程师,维护网站,实现高并发下的业务功能.
    
    后端: Python [Django] + Postgres + Xapian
    
    前端: HTML5 + CSS3 + JavaScript
    
*   幻腾智能 [https://huantengsmart.com/](https://huantengsmart.com/)
    
    2013年携幻腾智能品牌进入无线轻量级智能家居市场，梦想让中国人先于美国享受最酷炫的数字化生活体验
    
    全栈工程师, 服务架构设计, 以业务为驱动设计良好架构风格并实现代码.
    
    后端: Ruby(Rails) + Ruby(EventMachine) + Node.js + Redis + MySQL + Postgres
    
    前端: HTML5 + CSS3 + JavaScript + React + Node.js + ES6(ES2015)

*   金融工场 [https://www.9888keji.com](https://www.9888keji.com)
    
    技术经理, 前端架构设计. 重构, 不仅是代码还有研发流程(部门间配合)

    [架构设计](https://github.com/DeronW/deronw.github.io/blob/master/markdown/Web%E5%89%8D%E7%AB%AF%E4%BB%8E0%E5%88%B0N.md)

#### 自我评价

认真地做好每件事, 负责地写好每段代码

Good at learning, well this doesn't mean I'm new, that's means I have the passion in learning.
6 years experience, when I realize that I have waste too much time on tiny detail. I should be more
effictive. So I want to join a good company, that's the best in 
my eyes.


回想起来已经工作7年了,对于一个程序员来说现在正是发光发热的时候.时间逐渐把一个人的心性
磨练成熟. 反观以前的自己总是那么稚嫩. 人生需要成长需要新的挑战, 这样才能在回首往事的时候说
"我曾经历过".经历过挫折经历过荣耀, 不过最重要的还是,够精彩.遇到更多的人,做更多的事,让自己被
更多的人了解.我想xx就是这样的一个地方. 


### 个人项目

[内存数据结构](https://github.com/delongw/node-cache) Node.js
> 在内存中标记一个JSON结构,具有简单的读/写API,可以设置数据过期时间

[整数加密](https://github.com/delongw/ruby-id-cipher) Ruby
> 使用RC4算法,把一个整数混淆成另一个整数,目前只支持32位运算

[BeautifulSoup文档](https://github.com/delongw/beautifulsoup) Python
> Python中用于解析HTML/XML的最常用的库中文版文档, 也是官方的中文版文档

[Phantom TCP](https://github.com/delongw/phantom-tcp) Go
> 使用Go语言编写的TCP Server库

[JavaScript lib](https://www.npmjs.com/package/fw-javascripts)
[JavaScript React](https://www.npmjs.com/package/fw-components)
> ES6 JavaScript 公共库, 封装 网络/通用方法/组件等
    
#### 参考资料

个人主页[http://delongw.github.io/](http://delongw.github.io/) (empty for now)

``2018-02-28 update``
