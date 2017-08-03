
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

window._GLOBAL_DATA = {}

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
	alarm.innerHTML = '<div class="global-alarm-panel">' +
		'<div class="global-alarm-text">' + text + '</div>' +
		'<div class="global-alarm-btn" onClick="hideAlarm()">确定</div>' +
		'</div>'

	document.body.appendChild(alarm)
}

function hideAlarm() {
	var ID = '_$id_alert_'
	document.body.removeChild(document.getElementById(ID))
}

function showConfirm(title, ok_cb, cancel_cb) {

	window._GLOBAL_DATA.confirm_callback = {
		ok: ok_cb,
		cancel: cancel_cb
	}

	var ID = '_$id_confirm_'

	// clean before create
	var dirty_node = document.getElementById(ID)
	dirty_node && document.body.removeChild(dirty_node)

	var confirm = document.createElement('div')
	confirm.id = ID
	confirm.className = "global-confirm"
	confirm.innerHTML = '<div>' +
		'<div class="global-confirm-panel"><div class="global-confirm-title">' + title + '</div>' +
		'<div class="global-confirm-ok" onClick="hideConfirmOK()">确定</div>' +
		'<div class="global-confirm-cancel" onClick="hideConfirmCancel()">取消</div>' +
		'<div class="global-confirm-close" onClick="hideConfirmCancel()">&times;</div>' +
		'</div></div>';

	document.body.appendChild(confirm)
}

function hideConfirmOK() {
	var ID = '_$id_confirm_'
	document.body.removeChild(document.getElementById(ID))
	
	var cb = window._GLOBAL_DATA.confirm_callback
	cb.ok && cb.ok()
}

function hideConfirmCancel() {
	var ID = '_$id_confirm_'
	document.body.removeChild(document.getElementById(ID))

	var cb = window._GLOBAL_DATA.confirm_callback
	cb.cancel && cb.cancel()
}

function touchBottom(cb) {
	if (window._GLOBAL_DATA['touch_bottom_fn'])
		throw ('duplicated event listener on slide up');

	var fn = function () {
		//判断滚动条滚到了网页最底部
		if (window.innerHeight + document.body.scrollTop + document.documentElement.scrollTop + 50 > document.body.scrollHeight) {
			if (window._GLOBAL_DATA['touch_bottom'] == 'running') return;
			window._GLOBAL_DATA['touch_bottom'] = 'running';
			cb(function () {
				window._GLOBAL_DATA['touch_bottom'] = 'ready';
			})
		}
	};
	window._GLOBAL_DATA['touch_bottom_fn'] = fn;
	window.addEventListener("scroll", fn, false);
}

function cancelTouchBottom() {
	window.removeEventListener('scroll', window._GLOBAL_DATA)
}

function showProtocol(html_seg) {
	var ID = '_$id_protocol_'

	// clean before create
	var dirty_node = document.getElementById(ID)
	dirty_node && document.body.removeChild(dirty_node)

	var protocol = document.createElement('div')
	protocol.id = ID
	protocol.className = "global-protocol"
	protocol.innerHTML = html_seg +
		'<div class="global-protocol-close" onClick="hideProtocol()">&times;</div>';

	document.body.appendChild(protocol)
}

function hideProtocol() {
	var ID = '_$id_protocol_'
	document.body.removeChild(document.getElementById(ID))
}