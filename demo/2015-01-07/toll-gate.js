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
    $(".section-0").addClass("active");

    $(".btn-start, .section-0").on("touchstart", function () {
        $(".section-0").addClass("press-down")
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
            //choice.data("next", answer.next);
            choice.data("answer-order", answer.order);
            choice.data("question-index", questionIndex);
            choice.on("touchend", function () {
                var e = $(this);
                if (window.__disableChoiceSelect) return;
                e.data("next");
                Questions[e.data("question-index")].selectedAnswerOrder = e.data("answer-order");
                $(this).removeClass("on-hold");
                showNextQuestion();
                refreshScore();
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
}
