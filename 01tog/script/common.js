/*
 *打开新窗口 openWin
 */
function openNewWindows(nm,urls,pms){
	var parames={
		name:nm,
		url:urls,
		pageParam:pms
	}
	api.openWin(parames);
}

/*
 *打开内置窗口 openFrame
 */
function openNewFrames(nm,urls,pms,head_h,bottom_h){
	var params = {
		name:nm,
		url:urls,
		pageParam:pms,
		rect:{
			x:0,
			y:head_h,
			w:api.frameWidth,
			h:api.winHeight-head_h-bottom_h
		}
	}
	api.openFrame(params)
}


/*
 *打开内置窗口 openFrame 再次封装,页面初始化后直接加载该函数
 */
function initOpen(pageParam){
	var head = $api.dom('#topbar');
	$api.fixStatusBar(head);		//沉浸式，自动给当前的头部添加状态栏的高度，以内边距padding-top的方式
	head.style.display = "block";
	head_h = head.offsetHeight;
	bottom_h=0;
	openNewFrames(api.winName+'_body','./'+api.winName+'_body.html',pageParam,head_h,bottom_h);
}
