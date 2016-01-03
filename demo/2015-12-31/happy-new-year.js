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
            return {
            }
        },

        render: function(){
            return React.DOM.div({},
                React.createElement(Content.DateTime, null),
                React.createElement(Content.PushedMessage, null)
                );
        }
    });

    Content.DateTime = React.createClass({

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

    Content.PushedMessage = React.createClass({
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
            this.touchedMsg = null;
            this.offsetLeft = null;

            return {
                messages: [],
                touchedOffset: null
            }
        },

        rightTouchStartHandler: function(event){
            this.touchedMsg = event.target;
            this.offsetLeft = event.touches[0].clientX;
        },

        rightTouchEndHandler: function(event){
            this.nextFrameHandler()
        },

        rightTouchMoveHandler: function(event){
            if(!this.touchedMsg) return;
            var offset = event.touches[0].clientX - this.offsetLeft;
            console.log(offset);
                console.log(this.touchedMsg);
            this.setState({touchedOffset: offset});
        },

        nextFrameHandler: function(){

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
            var messageTip = function(item, index){
                return React.DOM.div({
                        className: "msg",
                        style: { left: item.offset+'px' }
                    },
                   React.DOM.div({className: "from"}, item.title, '现在'),
                   React.DOM.div({className: "text"}, item.text),
                   React.DOM.div({className: "reply"}, '滑动来回复')
                );
            }

            return React.DOM.div({
                    className: "pushed-msg-list",
                    onTouchStart: this.rightTouchStartHandler,
                    onTouchMove: this.rightTouchMoveHandler
                },
                this.state.messages.map(messageTip),
                React.DOM.div({className: "unlock"},
                    React.DOM.div({className: "unlock-btn"}, '滑动来解锁')
                    )
                )
        }
    });

    ReactDOM.render(React.createElement(Content, {}),
        document.getElementById("container"));
})();
