# App中HTTP请求的 UserAgent 规范
> 2016-03-08

目标: 规范化HTTP请求的Header中 User-Agent 字段

## 最终格式:
MyApp Version/2.3.4 (Android 19; Nexus 6; zh-cn)
------- ------------- -----------  -------  -----
    1         2             3         4       5

格式说明

1. 能被识别为APP的标识符, 固定为 MyApp
2. 当前app的版本, 2部分组成, 第一部分固定为 Version, 第二部分为app版本号, 这两部分用斜线(/)链接

	3,4,5 三个部分放在大括号内, 共同组成系统描述字段, 3个部分用分好(;) 链接, 3,4,5 中间可以添加空格也可以不添加

3. 当前系统以及系统版本号, 由2部分组成, 第一部分是系统名称, 目前只有2种 Android 或者 iOS, 第二部分是版本号, 这两部分用一个空格连接
4. 当前设备类型, 例如 Nexus 5, iPhone 6, iPhone 6 Plus, MX4, HTC One 等等
5. 当前系统的语言版本, 例如 zh-cn, en-us (参考: [http://en.wikipedia.org/wiki/Language_localisation](http://en.wikipedia.org/wiki/Language_localisation) )

示例:
> MyApp Version/2.4.2 (Android 19; Nexus 5; zh-cn)


参考文档:

User-Agent 官方定义 [http://tools.ietf.org/html/rfc3261#page-179](http://tools.ietf.org/html/rfc3261#page-179)

什么是 User-Agent [http://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86
](http://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86)

例子:

* iPhone手机(iPhone6)

	iPhone 6 Plus : Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4

* 安卓手机(Nexus6)

	Nexus 6 : Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19