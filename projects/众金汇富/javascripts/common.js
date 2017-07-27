
//  修复windows高清屏下viewport显示不正确的问题
(function () {
	var cw = document.documentElement.clientWidth;
	var metas = document.getElementsByTagName('meta'), vw;
	for (var i = 0; i < metas.length; i++) {
		if (metas[i].name == 'viewport') vw = metas[i]
	}
	if (vw) vw.setAttribute('content', 'width=' + (720 * 720 / cw) + ', user-scalable=no');

	console.log('%c auto fix viewport in chrome extensions', 'color: #bcbcbc');
})()

function showToast(text, delay) {
	var ID = '_$id_toast_'
	delay = typeof (delay) == 'undefined' ? 2000 : parseInt(delay)
	// clean before create
	var dirty_node = document.getElementById(ID)
	dirty_node && document.body.removeChild(dirty_node)

	var toast = document.createElement('div')
	toast.id = ID
	toast.className = "global-toast"
	toast.innerText = text
	document.body.appendChild(toast)

	if (delay) {
		setTimeout(function () {
			var e = document.getElementById(ID);
			e.style.opacity = '0'
			setTimeout(function () {
				document.body.removeChild(e)
			}, 300)
		}, delay)
	}
}

function showAlarm(text) {
    var ID = '_$id_alert_'
    
	// clean before create
	var dirty_node = document.getElementById(ID)
	dirty_node && document.body.removeChild(dirty_node)

	var alarm = document.createElement('div')
	alarm.id = ID
	alarm.className = "global-alarm"
	alarm.innerHTML = '<div class="global-alarm-panel">'+
        '<div class="global-alarm-text">'+text+'</div>'+
        '<div class="global-alarm-btn" onClick="hideAlarm()">确定</div>'+
        '</div>'
    
	document.body.appendChild(alarm)
}

function hideAlarm(){
    var ID = '_$id_alert_'
    document.body.removeChild(document.getElementById(ID))
}