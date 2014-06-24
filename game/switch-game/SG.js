!(function() {

    var SwitchGame = function(options) {
        var s = new SG();
        if ( typeof (options) == "string") {
            return s.create(options);
        } else if ( typeof (options) == "object") {
            return s.create(options.elementId, options.bulbCount, options.switchCount);
        }
        return s;
    };

    SG = function() {
        this.container = document.getElementById("switch-game");
        this.bulbCount = 4;
        // 灯泡数量不能小于4
        this.switchCount = 4;
        this.level = 5;
        this.bulbs = [];
        this.switchs = [];
        this.controller = {};
        this.bulbGroupClassName = "bulb-group";
        this.switchGroupClassName = "switch-group";
        this.bulbClassName = "sg-bulb";
        this.switchClassName = "sg-switch";
        this.stepbystep = [];
    };

    SG.prototype = {
        create : function(elementId, bulbCount, switchCount, level) {
            if (elementId)
                this.container = document.getElementById(elementId)
            if (bulbCount)
                this.bulbCount = parseInt(bulbCount)
            if (switchCount)
                this.switchCount = parseInt(switchCount)
            if (level)
                this.level = parseInt(level)

            this.generateHTML();
            this.arithmetic();
        },

        generateHTML : function() {
            var bulbGroupNode = document.createElement("div");
            var switchGroupNode = document.createElement("div");

            bulbGroupNode.className = this.bulbGroupClassName;
            switchGroupNode.className = this.switchGroupClassName;

            for (var i = 0; i < this.bulbCount; i++) {
                var bulb = document.createElement("div");
                bulb.className = "sg-bulb";
                bulbGroupNode.appendChild(bulb);
                this.bulbs.push(bulb);
            }

            for (var i = 0; i < this.switchCount; i++) {
                var onOff = document.createElement("div");
                onOff.className = this.bulbClassName;
                onOff.setAttribute("data-index", i);
                onOff.addEventListener("click", this.toggleBulb)
                onOff.sg = this;
                switchGroupNode.appendChild(onOff);
                this.switchs.push(onOff);
            }

            this.container.innerHTML = "";
            this.container.appendChild(bulbGroupNode);
            this.container.appendChild(document.createElement("br"));
            this.container.appendChild(switchGroupNode);
        },

        toggleBulb : function() {
            var index = this.getAttribute("data-index");

            var sg = this.sg;
            var bulbs = sg.controller[index];
            for (var i in bulbs) {
                var e = sg.bulbs[bulbs[i]];
                if (e.className == "active") {
                    e.className = ""
                } else {
                    e.className = "active"
                }
            }
        },

        arithmetic : function() {
            /*
             * 算法逻辑：
             * 对前 n -1 个开关，每个开关控制 2 ～ （m - 2）个随机的灯泡
             * 随机生成一组5次不产生重复结果的开关操作
             * 用第n个开关控制剩下没有亮的开关，组合成一个让全部灯泡两起的排列
             */
            for (var i = 0; i < this.switchCount - 1; i++) {
                this.controller[i] = this.randomCrontoll();
            }

            var groups = [], steps = [];
            for (var i = 0; i < this.bulbCount; i++) {
                groups.push(false)
            }
            steps.push(groups2str(groups));

            for (var i = 0, retry = 0; i < this.level, retry < 100; retry++) {
                var switchIndex = randomRange(this.switchCount - 1);

                for (var j = 0; j < this.controller[switchIndex].length; j++) {
                    groups[j] = !groups[j]
                }

                var duplicated = false, groupsValue = groups2str(groups);
                for (var m = 0; m < steps.length; m++) {
                    if (groupsValue == steps[m]) {
                        duplicated = true
                    }
                }

                if (!duplicated) {
                    steps.push(groupsValue);
                    i++;
                    this.stepbystep.push(switchIndex); // backdoor
                    continue
                }
            }

            this.controller[this.switchCount - 1] = []
            var currentGroup = steps[steps.length - 1].split("");

            for (var i = 0; i < currentGroup.length; i++) {
                if (currentGroup[i] == "0")
                    this.controller[this.switchCount - 1].push(i)
            }
        },

        randomCrontoll : function() {
            var controlledGroup = randomRange(0, this.bulbCount, randomRange(2, this.bulbCount));
            while (this.hasDuplicatedControlled(controlledGroup)) {
                controlledGroup = randomRange(0, this.bulbCount, randomRange(2, this.bulbCount));
            }
            return controlledGroup;
        },

        hasDuplicatedControlled : function(controlledGroup) {
            for (var i in this.controller) {
                if (this.controller[i].join("") === controlledGroup.join("")) {// 判断是否为相同的数组
                    return true
                }
            };
            return false;
        }
    }

    function randomRange(start, end, total) {
        // params must be integer
        var result;

        if (start)
            start = parseInt(start)
        if (end)
            end = parseInt(end)
        if (total)
            total = parseInt(total)

        if ( typeof (start) == "undefined")
            return Math.random()

        if ( typeof (end) == "undefined")
            return Math.floor(Math.random() * start);

        if ( typeof (total) == "undefined")
            return Math.floor(Math.random() * Math.max(0, end - start)) + start;

        // 随机从一个数组里取出n个元素
        var dumplings = [];

        for (var i = 0; i < end - start; i++)
            dumplings.push(start + i)

        result = []
        while (result.length < total && dumplings) {
            result.push(dumplings.splice(randomRange(dumplings.length), 1)[0])
        }

        return result.sort(function(a, b) {
            return a - b;
        });
    }

    function groups2str(groups) {
        return groups.map(function(e) {
            return e ? 1 : 0
        }).join("")
    }


    window.SwitchGame = SwitchGame;
})()
