/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function($, owner) {

	/**
	 * 设备ID
	 **/
	owner.getUuid = function() {
		return plus.device.uuid;
	};

	/**
	 * 型号
	 **/
	owner.getVendor = function() {
		return plus.device.vendor;
	};
	
	/**
	 * 检查网络
	 **/
	owner.checkNet = function() {
		var connectionStatus = plus.networkinfo.getCurrentType();
		if(connectionStatus == 0 || connectionStatus == 1) {
			mui.toast('无法连接网络');
			plus.nativeUI.closeWaiting();
		} else if(connectionStatus == 3) {
			//			mui.toast('使用wifi');
		}
	};

	/**
	 * 获取图片地址
	 **/
	owner.getImgUrl = function() {

		return 'http://120.77.179.240:8888/';
	};

	/**
	 * 获取服务器接口地址
	 **/
	owner.getUrl = function() {

		return 'http://120.77.179.240:8888/zhyq2017/backend/web/index.php/app/';
	};

	/**
	 * 获取token
	 **/
	owner.getToken = function() {
		var tokenText = localStorage.getItem('user_token');
		return tokenText;
	};

	/**
	 * 设置token
	 **/
	owner.setToken = function(token) {
		localStorage.setItem('user_token', token);
		return token;
	};

	/**
	 * 获取 用户信息
	 **/
	owner.getUserinfo = function() {
		var userinfoText = localStorage.getItem('$userinfo');
		//		alert(userinfoText);
		return JSON.parse(userinfoText);
	};

	/**
	 * 设置 用户信息
	 **/
	owner.setUserinfo = function(userinfo) {
		localStorage.setItem('$userinfo', JSON.stringify(userinfo));
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

}(mui, window.my = {}));