"use strict";

function getTime(){
    var d = new Date(), hours = d.getHours(), min = d.getMinutes();
    return (hours >= 10 ? hours : "0" + hours) + ":" + (min >= 10 ? min : "0"+ min)
}

function getDateCN(){
    var d = new Date(), n;
    switch(d.getDay()){
        case 0:
            n = "日";
            break;
        case 1:
            n = "一";
            break;
        case 2:
            n = "二";
            break;
        case 3:
            n = "三";
            break;
        case 4:
            n = "四";
            break;
        case 5:
            n = "五";
            break;
        case 6:
            n = "六";
            break;
    }
    return (d.getMonth() + 1 + "月") + (d.getDate() + "日") +  "星期" + n;
}

(function(){

    var Content = React.createClass({

        getInitialState: function(){
            return { frame: 3 }
        },

        nextFrameHandler: function(){
            this.setState({frame: this.state.frame + 1})
        },

        render: function(){
            return React.DOM.div({},
                (this.state.frame == 1 ? React.createElement(Content.Frame1, {callback: this.nextFrameHandler}) : null),
                (this.state.frame == 2 ? React.createElement(Content.Frame2, {callback: this.nextFrameHandler}) : null),
                (this.state.frame == 3 ? React.createElement(Content.Frame3, {callback: this.nextFrameHandler}) : null),
                (this.state.frame == 4 ? React.createElement(Content.Frame4, {callback: this.nextFrameHandler}) : null)
                )
        }
    });

    Content.Frame5 = React.createClass({
        render: function(){
            return React.DOM.div({className: "frame5"}, "中国核电祝各位新年快乐，阖家团圆。向春节期间坚守岗位的员工致敬。")
        }
    });

    Content.Frame4 = React.createClass({
        getInitialState: function(){
            return {
                talking: false
            }
        },
        acceptHandler: function(){
            document.getElementById("audioWexinRing").pause();
            document.getElementById("greeting").play();
            this.setState({talking: true})
        },
        render: function(){
            return React.DOM.div({className: "frame4"},
                    React.DOM.div({className: "caller-name"}, "陈桦"),
                    React.DOM.div({className: "caller-way"}, "中国核 总经理"),
                    (this.state.talking ? null : React.DOM.div({className: "accept", onClick: this.acceptHandler}, null)),
                    (this.state.talking ?
                     React.DOM.div({className: "talking"},
                         React.DOM.img({className: "p1", src: "images/btn-camera3.png"}),
                         React.DOM.img({className: "p2", src: "images/btn-off.png", onClick: this.props.callback}),
                         React.DOM.img({className: "p3", src: "images/btn-quiet.png"})
                        ) :
                     null)
                );
        }
    });

    Content.Frame3 = React.createClass({
        getInitialState: function(){
            this.images = [];
            return {
                 offset: 0
            }
        },
        nextFrame: function(){
            document.getElementById("audioWexinRing").play();
            this.props.callback();
        },
        tick: function(){
            if(this.state.offset < -3000){
                clearInterval(this.interval);
            } else {
                this.setState({offset: this.state.offset - 2});
            }
        },
        componentDidMount: function(){
            this.interval = setInterval(this.tick, 20)
        },
        render: function(){
            return React.DOM.div({className: "frame3"},
                React.DOM.div({className: "event-panel", style: {left: this.state.offset + "px"}},
                    React.DOM.div({}, 1),
                    React.DOM.div({}, 2),
                    React.DOM.div({}, 3),
                    React.DOM.div({}, 4),
                    React.DOM.div({},
                        '这一年，中国核电好消息确实多啊',
                        React.DOM.button({onClick: this.nextFrame}, "Next")
                        )
                )
            )
        }
    })

    Content.Frame2 = React.createClass({

        getInitialState: function(){
            this.backup = [
    {
        type: "text",
        text: "老大：大家都回家了没？",
        align: "left"
    }, {
        type: "text",
        text: "实习生 小赵：报告老大，我已经在火车上了，回去和小伙伴说，咱也是上市公司的打工仔了，嘿嘿，大伙新年快乐，过年回来见哈~"
    }, {
        text: "唯一女汉子 翠花：还是老妈的菜好吃，完了，这样吃我嫁不出去了，泪… "
    }, {
        type: "image",
        src: "images/cai.jpg"
    }, {
        text: "师父老张：孩子们明天回来，和老伴在超市买东西呢，老大生了二胎，他奶奶等不及见孙女了"
    }, {
        text: "老大：@读者微信名 你回家了没？"
    }, {
        align: "right",
        text: "读者：我还没回呢，除夕的飞机，当天有个活要交接完才好离开 "
    }, {
        text: "实习生 小赵：报告老大，那个活是@读者微信名 替我干的，去年大修就已经替我一次了，说啥好啊！（摆手表情）"
    }, {
        text: "唯一女汉子 翠花：嗯，@读者微信名 平时工作教了我好多，是我心中的男神啊，以后找男盆友就找你这样的，过年回来给你带我妈的拿手菜"
    }, {
        text: "师父老张：@读者微信名 干活别太拼了，注意休息，早点回家"
    }, {
        text: "读者：恩恩。",
        align: "right"
    }
            ];

            return {
                focus: false,
                messages: [],
                mine_messages: []
            }
        },

        appendMessage: function(){
            if(this.backup.length < 1) {
                clearInterval(this.tick);
                this.setState({focus: true});
            } else {
                this.setState({messages: [this.backup.shift()].concat(this.state.messages)})
            }
        },

        componentDidMount: function(){
            this.tick = setInterval(this.appendMessage, 1000)
        },

        render: function(){
            return React.DOM.div({
                    className: "frame2"
                },
                React.DOM.div({className: "keyboard"},
                    React.DOM.div({className: ""},
                        React.DOM.img({className: "", src: "images/icon-camera2.png"}, null),
                        React.DOM.div({className: "type-in"},
                            React.DOM.input({className: ""}, null)
                            ),
                        React.DOM.div({className: "btn-send"}, "SEND")
                        ),
                        this.state.focus ? React.DOM.div({className: "focus", onClick:this.props.callback}, null) : null
                    ),

                React.DOM.div({className: "chatroom"},
                    this.state.messages.map(function(item, index){
                        return React.DOM.div({key: index, className: (item.align == "right" ? "send" : "receive")},
                            React.DOM.div({className: 'tail'}, null),
                            (item.type == "image" ? React.DOM.img({src: item.src}): item.text)
                            );
                    })
                )
            )
        }
    });

    Content.Frame1 = React.createClass({

        render: function(){
            return React.DOM.div({
                    className: "frame1"
                },
                React.createElement(Content.Frame1.DateTime, null),
                React.createElement(Content.Frame1.PushedMessage, {
                    callback: this.props.callback
                })
                );
        }

    });

    Content.Frame1.DateTime = React.createClass({

        getInitialState: function(){
            return {
                time: getTime(),
                date: getDateCN()
            }
        },

        render: function(){
            return React.DOM.div({className: "date-time"},
               React.DOM.div({className: "time"}, this.state.time),
               React.DOM.div({className: "date"}, this.state.date)
            );
        }
    });

    Content.Frame1.PushedMessage = React.createClass({
        getInitialState: function(){
            this.messages = [ {
                    title: "老大",
                    text: "大家都回家了没？"
                }, {
                    title: "实习生 小赵",
                    text: "报告老大，我已经在火车上了"
                }
            ].reverse();
            this.touchedIndex = null;
            this.offsetLeft = null;

            return { messages: [] }
        },

        rightTouchStartHandler: function(event, index){
            this.touchedIndex = index;
            this.offsetLeft = event.touches[0].clientX;
        },

        rightTouchMoveHandler: function(event){
            if(this.touchedIndex === null) return;
            var offset = event.touches[0].clientX - this.offsetLeft;
            if(offset < 1) return;
            var m = this.state.messages;
            m[this.touchedIndex].offset = offset;
            this.setState({messages: m});
        },

        lockTouchStartHandler: function(event){
            this.lockOffsetLeft = event.touches[0].clientX;
        },

        lockTouchMoveHandler: function(event){
            var offset = event.touches[0].clientX - this.lockOffsetLeft;
            if(offset < 1) return;
            this.setState({lockBtnOffset: offset})
        },

        touchEndHandler: function(){
            this.props.callback()
        },

        tick: function(){
            if(this.messages.length <= 1) clearInterval(this.interval);
            var m = this.state.messages;
            m.push(this.messages.pop());
            this.setState({messages: m.reverse()});
            playDing();
        },

        componentDidMount: function(){
            this.interval = setInterval(this.tick, 1000)
        },

        render: function(){
            var _this = this;
            var messageTip = function(item, index){
                return React.DOM.div({
                        className: "msg",
                        style: { left: item.offset+'px' },
                        onTouchStart: function(event){_this.rightTouchStartHandler(event, index)},
                        onTouchEnd: _this.touchEndHandler
                    },
                   React.DOM.div({className: "from"}, item.title, '现在'),
                   React.DOM.div({className: "text"}, item.text),
                   React.DOM.div({className: "reply"}, '滑动来回复')
                );
            }

            return React.DOM.div({
                    className: "pushed-msg-list",
                    onTouchMove: this.rightTouchMoveHandler
                },
                this.state.messages.map(messageTip),
                    React.DOM.div({
                        className: "unlock",
                        style: { left: this.state.lockBtnOffset+'px' },
                        onTouchStart: this.lockTouchStartHandler,
                        onTouchMove: this.lockTouchMoveHandler,
                        onTouchEnd: this.touchEndHandler
                    },
                    React.DOM.div({className: "unlock-btn"}, '滑动来解锁'),
                    React.DOM.img({className: "camera-btn", src: "images/icon-camera.png"}, null)
                    )
                )
        }
    });

    ReactDOM.render(React.createElement(Content, {}),
        document.getElementById("container"));
})();

function playDing(){
        document.getElementById("audioDing").play();
    setTimeout(function(){
    })
}

var GLOBAL = {
    appId: "",
    timestamp: "",
    nonceStr: "",
    signature: ""
}
var shareData = {
    title: "greeting from China nuclear",
    desc: "You got a greeting message, please check it",
    link: "http://123.57.17.145:8008/demo/2015-12-31/happy-new-year.html",
    imgUrl: "",
    link: "http://123.57.17.145:8008/demo/2015-12-31/happy-new-year.html",
    success: function(){
        console.log("success to share")
    }

}
wx.config({
    debug: !1,
    appId: GLOBAL.appId,
    timestamp: GLOBAL.timestamp,
    nonceStr: GLOBAL.nonceStr,
    signature: GLOBAL.signature,
    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
}),
wx.ready(function() {
    wx.onMenuShareAppMessage(shareData),
    wx.onMenuShareTimeline(shareData),
    wx.onMenuShareQQ(shareData),
    wx.onMenuShareWeibo(shareData)
});
