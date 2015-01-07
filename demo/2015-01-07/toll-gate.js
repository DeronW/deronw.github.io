var questions = [{
	background : "现在小明终于圆梦，成为了一个合（bei）格(cui)的核电厂备件采购工程师，假如你就是小明，请继续作答？别打我，也就是个假设",
	question : "你是否愿意自己被假设为小明，天天被老师训话的小明，天天滚来滚去的小明，好傻好天真的小明？",
	answers : [{
		text : "是",
		score : 1,
		next : "next_question"
	}, {
		text : "否",
		score : 0,
		next : {
			text : "不想你还点？强行变成小明",
			next : "next_question"
		}
	}]
}, {
	background : "上班第一天，他又被通知开会了。领导说，今天我们的会议是分配下个月度的采购任务",
	question : "如果您是小明，看到花花绿绿的采购系统中隐藏着无数数不认识的东东时，您是否已经想起了老师的一句话：核电厂200多个系统，你知道哪几个就敢去干采购。这时候头大的您会怎么办？",
	answers : [{
		text : "闷头看手机笑话，等领导分配",
		score : 0,
		next : "self"
	}, {
		text : "眼瞅着领导，脉脉含情，说，领导，随便您怎么整",
		score : 9,
		next : "next_question"
	}, {
		text : "自己跳出来领取相对看得懂的采购任务",
		score : 5,
		next : "next_question"
	}]
}, {
	background : null,
	question : "逃不掉的，有钱认性，没钱认命吧。当您拿到现场物资需求单时，看到物资名称XXX，规格型号X;XXX;XXX;XXXXX;XXXXXX，急得您得查新华字典时，天外飘来一个字，那都不是事，先抓主要的，主要先干啥",
	answers : [{
		text : "自行核实参数是否齐全",
		score : 0,
		next : {
			text : "逼格太高了，连211都没毕业就敢自行核实，自宫应该没问题",
			next : "end"
		}
	}, {
		text : "联系潜在供方核实参数是否齐全",
		score : 10,
		next : "next_question"
	}, {
		text : "与现场技术人员一起核实参数是否齐全",
		score : 5,
		next : "next_question"
	}]
}, {
	background : null,
	question : "饭要一口一口吃，事要一步步干，下面该到您掷骰子选择怎么买东西了（专业术语采购方式选择），您是否做好了心理准备",
	answers : [{
		text : "两家或以上代理商询价/竞争性谈判采购",
		score : 5,
		next : "next_question",
	}, {
		text : "两家或以上原供货商和代理商询价/竞争性谈判采购",
		score : 8,
		next : "next_question"
	}, {
		text : "原供应商单一来源采购",
		score : 10,
		next : "next_question"
	}, {
		text : "招标采购",
		score : 9,
		next : "next_question"
	}, {
		text : "找个亲戚，赶紧注册个公司，从他那买",
		score : 0,
		next : {
			text : "警告"
		}
	}, {
		text : "淘宝采购，方便快捷",
		score : 2,
		next : "next_question"
	}]
}, {
	background : null,
	question : "我们这里不是赌石市场，拿个罩子，两只手在罩子下一握手，成交，我们这里的，要专业，怎么也得见个纸片飞来飞去吧，专业点，询报价阶段，您准备咋操办",
	answers : [{
		text : "要求传真或电子邮件报价",
		score : 0,
		next : {
			text : "国家审计署找您喝茶",
			img : "",
			type : "end"
		}
	}, {
		text : "不管如何，全部要求密封报价",
		score : 10,
		next : "next_question"
	}, {
		text : "根据预估金额大小和现场紧急程度考虑要求密封报价或传真/电子邮件报价",
		score : 8,
		next : "next_question"
	}]
}, {
	background : null,
	question : "某潜在供应商知道了是您在负责采购，于是指派您的老朋友（美女小花）请吃饭，小花带了您最爱吃的酸菜，穿着超短裙，嗲声嗲气，你会怎么办（受不了了，流鼻血去，这时候的您，就是红人）",
	answers : [{
		text : "借故老师有事叮嘱，不参加",
		score : 8,
		next : "next_question"
	}, {
		text : "吃饭喝酒唱歌一条龙，玩high了再说",
		score : 0,
		next : {
			text : "检察院找您喝茶，廉洁从业，干净做人",
			img : "",
			type : "end"
		}
	}, {
		text : "约上其他不相干的同学一起AA聚餐，饭后坚决拒绝表达要做好人",
		score : 10,
		next : "next_question"
	}]
}, {
	background : null,
	question : "前面手续都完了，又到您表现的时候了。金主席教导我们，给领导当参谋，要把所思所想都汇报，要准确地给出建议，不然你就等着坐老虎凳吧，您建议领导选择中标人的方式",
	answers : [{
		text : "最低价中标",
		score : 0,
		next : {
			text : "技术上和现场有细微差别怎么办，供应商拿到订单后反悔怎么办，慎重啊慎重",
			img : "",
			type : "end"
		}
	}, {
		text : "经评审的满足技术要求的最低价中标",
		score : 10,
		next : "next_question"
	}, {
		text : "提供原产品的最低价中标",
		score : 8,
		next : "next_question"
	}]
}, {
	background : null,
	question : "最可怕的时刻到了，最严谨的时刻到了，要签合同了。以前小明也就看到妈妈签过租房合同，现在到了备件采购合同签订的时刻，您最喜欢的合同模板是",
	answers : [{
		text : "简易订单",
		score : 8,
		next : "next_question"
	}, {
		text : "简易合同",
		score : 9,
		next : "next_question"
	}, {
		text : "标准合同",
		score : 10,
		next : "next_question"
	}]
}, {
	background : null,
	question : "合同终于签好了，捧着墨香的合同文本交给领导，您是否认为结束了",
	answers : [{
		text : "是",
		score : 5,
		next : {
			text : "你把合同人员想得太简单了",
			type : "end"
		}
	}, {
		text : "否",
		score : 10,
		next : "next_question"
	}]
}, {
	background : null,
	question : "小明跳出来告诉您，合同人员后面还有一堆事情呢，哪是签完合同就能结束的，接下来您就是个忙人（画外音：小明你这个新手怎么知道的，小明说，上次把小花灌多了她给我说的）",
	answers : [{
		text : "督促交货+督促文件+安排付款",
		score : 10,
		next : "next_question"
	}, {
		text : "检验+入库+支付",
		score : 10,
		next : "next_question"
	}, {
		text : "检验+入库+督促文件+支付+聚餐",
		score : 5,
		next : "next_question"
	}]
}, {
	background : null,
	question : "最后一个问题，我是说万一，万一您采购的设备用到现场出问题了，您会怎么处理，常在江湖漂，那有不挨刀，找上门来了吧，可不能做罪人啊",
	answers : [{
		text : "梳理自己的采购流程，挑出缺陷，主动找领导，一起弥补",
		score : 5,
		next : {
			type : "end",
			img : ""
		}
	}, {
		text : "与现场技术人员一起分析产品的质量，找出产品的问题，与制造厂一起解决现存实际困难",
		score : 10,
		next : {
			img : "",
			type : "end"
		}
	}, {
		text : "辞职，拿上收受的2万元现金继续找工作",
		score : 0,
		next : {
			text : "您到底是来干活的还是来骗钱的",
			img : "",
			type : "end"
		}
	}]
}];

setInterval(function() {
	var colors = ["#97FFF0", "#ABE86B", "#FFD882", "#E87C73", "#C99AFF"];
	var i = window.__sectionBackgroundColorIndex || 0;
	i++;
	if (i >= colors.length)
		i = 0;
	document.getElementsByTagName("body")[0].style.backgroundColor = colors[i];
	window.__sectionBackgroundColorIndex = i;
}, 10000);

$(function() {
	$(".section-0").addClass("active");

	$(".btn-start").on("touchstart", function() {
		$(".section-0").addClass("press-down")
	}).on("touchend", function() {
		$(".section-0").removeClass("press-down").addClass("top-out");
		// show question panel
		setTimeout(function() {
			$(".section-question").css("left", 0)
		}, 400)
	})
});
