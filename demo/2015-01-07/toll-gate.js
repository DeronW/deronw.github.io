window.__sectionBackgroundColorIndex = 0;
window.__disableChoiceSelect = false;
window.__currentQuestionIndex = 0;

// 背景自动变色
setInterval(function () {
    //var colors = ["#97FFF0", "#ABE86B", "#FFD882", "#E87C73", "#C99AFF"];
    var colors = ["#ffcc33"];
    var i = window.__sectionBackgroundColorIndex;
    i++;
    if (i >= colors.length)
        i = 0;
    document.getElementsByTagName("body")[0].style.backgroundColor = colors[i];
    window.__sectionBackgroundColorIndex = i;
}, 10000);

$(function () {
    // 开始界面， 点击后自动上划隐藏
    $(".section-welcome").click(function () {
        $(this).css("top", "-100%")
    });

    // 插图界面
    $(".section-iconograph").on("click", function () {
        var e = $(this);
        e.css("top", "-100%");
        var callback = e.data("callback");
        if (typeof callback === "function") {
            e.data("callback", null);
            callback();
        }
    });
    //禁止弹出菜单
    document.documentElement.style.webkitTouchCallout = "none";
});

$(function () {
    $(".section-0").addClass("active");

    $(".btn-start, .section-0").on("touchstart", function () {
        //$(".section-0").addClass("press-down")
    }).on("touchend", function () {
        $(".section-0").removeClass("press-down").addClass("top-out");
        // show question panel
        setTimeout(function () {
            $(".section-question").css("left", 0);
            showNextQuestion();
        }, 200)
    })
});

function showNextQuestion() {
    var questionIndex = window.__currentQuestionIndex;
    var panel = $(".next-question");
    panel.find(".question-sequence").text("第 " + (questionIndex + 1) + " 题");
    panel.find(".question-panel p").text(Questions[questionIndex].question);

    var answers = [];
    Questions[questionIndex].answers.forEach(function (i) {
        answers.push(i)
    });

    panel.find(".choices-panel .item").removeClass("hide").each(function () {
        var choice = $(this);
        if (answers.length == 0) {
            choice.addClass("hide");
        } else {
            var sliceCursor = Math.floor(Math.random() * answers.length);
            var answer = answers[sliceCursor];
            answers = answers.slice(0, sliceCursor).concat(answers.slice(sliceCursor + 1));
            choice.find("p").text(answer.text);
            choice.data("points", answer.points);
            choice.data("next", answer.next);
            choice.data("answer-order", answer.order);
            choice.data("question-index", questionIndex);
            choice.on("touchend", function () {
                var e = $(this);
                if (window.__disableChoiceSelect) return;
                Questions[e.data("question-index")].selectedAnswerOrder = e.data("answer-order");
                $(this).removeClass("on-hold");
                // 判断下一步去哪
                var next = e.data("next");
                if (next == "next_question") {
                    showNextQuestion();
                } else if (next == "end") {
                    showEnd();
                } else if (next.picture) {
                    showIconograph(next.picture, next.next);
                }
                //refreshScore();
            }).on("touchstart", function () {
                $(this).addClass("on-hold");
                return false;
            });
        }
    });

    if (questionIndex == 0) {
        $(".section-question").removeClass("hide");
        $(".current-question").addClass("hide");
        setTimeout(function () {
            $(".pre-question").removeClass("hide")
        }, 250)
    }

    $(".current-question").addClass("pre-question").removeClass("current-question");
    $(".next-question").addClass("current-question").removeClass("next-question");
    window.__disableChoiceSelect = true;

    setTimeout(function () {
        $(".pre-question").addClass("next-question hide").removeClass("pre-question");
        setTimeout(function () {
            $(".next-question").removeClass("hide");
            window.__disableChoiceSelect = false;
        }, 20);
    }, 350);

    questionIndex += 1;
    window.__currentQuestionIndex = questionIndex;
}

function refreshScore() {
    var score = 0;
    for (var i = 0; i < Questions.length; i++) {
        var q = Questions[i];
        if (q.selectedAnswerOrder != null) {
            score += q.answers[q.selectedAnswerOrder].points;
        } else {
            break
        }
    }
    $("#total-score").find("span").text(score);
    return score;
}

function showIconograph(picture, next) {
    var graph = $(".section-iconograph");
    graph.find("img").remove();
    graph.append('<img src="' + picture + '">');
    if (next == "retry") {
        $(".section-iconograph .btn-primary").removeClass("hide")
    } else {
        $(".section-iconograph .btn-primary").addClass("hide")
    }
    setTimeout(function () {
        $(".section-iconograph").css({
            "top": 0
        }).data("callback", function () {
            if (next == "next_question") {
                showNextQuestion();
            } else if (next == "end") {
                showEnd();
            } else if (next == "retry") {
                setTimeout(function () {
                    // window.location.reload()
                    window.location.href = "http://mp.weixin.qq.com/s?__biz=MzA4NDQ2OTUyOA==&mid=204619279&idx=1&sn=b7008c5ebfa79c1c719cf343e85f0da1#rd"
                }, 500)
            }
        });
    }, 500);
}

function showEnd() {
    $(".section-end").css("top", 0);
}

function postData() {
    var username = $("#username").val(), company = $("#company").val();
    if (!username) {
        alert("请填写姓名");
        $("#username").focus();
        return;
    }
    if (!company) {
        alert("请填写所属公司");
        $("#company").focus();
        return;
    }
    var position = "unknown";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (currentPosition) {
            position = currentPosition.coords.longitude + "," + currentPosition.coords.latitude
        });
    }

    var totalScore = refreshScore();

    $.get("/hdnds/commit/" + totalScore + "/" + username + "/" + company + "/" + position, {
    }, function (data) {
        console.log(data);
    }, "json");

    $.post("/report_score/", {
        "score": totalScore,
        "username": username,
        "company": company,
        "position": position
    }, function (data) {
        console.log(data);
        alert("感谢您的参与");
    }, "json");

    $(".post-data-panel").addClass("hide");
    $(".section-end .total-score").text(totalScore);
}