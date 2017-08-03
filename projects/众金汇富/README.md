
### 页面长列表, 加载更多js使用方法

举例:

ajax加载方法是  

::javascript

    function loadData(done){
        ajax({
            url: '...',
            success: function(){...},
            complete: function(){
                done && done() // 这个方法很重要, 一定要调用, 不然只能加载更多 加载一次
            }
        })
    }

1. 页面第一次需要先加载数据

loadData()

2. 监听"触底"事件, 页面"触底"出发加载更多

touchBottom(loadData)

### 弹出确定面板

方法调用:

showConfirm('显示出的title', function(){
    // 这是成功的回调方法
}, function(){
    // 这是取消的回调方法
})

### 弹出协议面板

showProtocol('这是协议的html片段')

### 弹出警告框

showAlarm('这是一个警告框')