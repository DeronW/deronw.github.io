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
            return { frame: 1 }
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

    Content.Frame4 = React.createClass({
        render: function(){
            return React.DOM.div({className: "frame4"}, "frame4")
        }
    });

    Content.Frame3 = React.createClass({
        render: function(){
            return React.DOM.div({className: "frame3"},
                    React.DOM.div({className: "caller-name"}, "Robin"),
                    React.DOM.div({className: "caller-way"}, "face time"),
                    React.DOM.div({className: "accept", onClick: this.props.callback}, null)
                );
        }
    });

    Content.Frame2 = React.createClass({

        getInitialState: function(){
            this.backup = [
            "a", "b", "c", "d"
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
                this.setState({
                    mine_messages: ["from me"],
                    focus: true
                })
                return
            }
            this.setState({messages: [this.backup.shift()].concat(this.state.messages)})
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
                    this.state.mine_messages.map(function(item, index){
                        return React.DOM.div({key: index, className: "send"},
                            React.DOM.div({className: 'tail'}, null), item);
                    }),
                    this.state.messages.map(function(item, index){
                        return React.DOM.div({key: index, className: "receive"},
                            React.DOM.div({className: 'tail'}, null), item);
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
                }, {
                    title: "唯一女汉子 翠花",
                    text: "还是老妈的菜好吃"
                }
            ].reverse();
            this.touchedIndex = null;
            this.offsetLeft = null;

            return {
                messages: []
            }
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
            m.push(this.messages.pop())
            this.setState({messages: m.reverse()})
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
