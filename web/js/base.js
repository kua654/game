var myLayer = {
	alert: function(content,time,callback){
		if($(".c-alert-box").is(":visible")){
			$(".c-alert-box").remove();
		}
		if(time == undefined || time == "" || time == null){
			time = 2000;
		}
		var ahtml = '<div class="c-alert-box">'+content+'</div><div class="c-al-screen"></div>';
		$("body").append(ahtml);
		if(typeof jQuery == 'undefined'){
			var aleL = ($(window).width() - $(".c-alert-box").width()) / 2;
		}else{
			var aleL = ($(window).width() - $(".c-alert-box").width() - 20) / 2;
		}
		$(".c-alert-box").css('left', aleL + "px");
		setTimeout(function(){
			$(".c-alert-box,.c-al-screen").remove();
			if (callback){callback();}
		},time);
	},
	load: function(content){
		if($(".c-load-box").is(":visible")){
			$(".c-load-box").remove();
		}
		if(content == undefined || content == "" || content == null){
			content = "\u52a0\u8f7d\u4e2d..."
		}
		var lhtml = '<div class="c-load-box"><span class="loadgif"></span><p>'+content+'</p></div><div class="c-al-screen"></div>';
		$("body").append(lhtml);
		var totW = $(window).width();
		if(typeof jQuery == 'undefined'){
			var aleL = (totW - $(".c-load-box").width()) / 2;
		}else{
			var aleL = (totW - $(".c-load-box").width() - 60) / 2;
		}
		$(".c-load-box").css('left', aleL + "px");
	},
	clear: function(){
		$(".c-load-box,.c-al-screen").remove();
	},
	confirm: function(options){
		var dft= {
			title:'',
			con:'',
			cancel: null,
			cancelValue:'\u53d6\u6d88',
			ok: null,
			okValue:'\u786e\u5b9a'
		}
		var ops = $.extend(dft,options);
		var chtml = '<div class="c-conf-screen"></div>';
		chtml += '<div class="c-conf-box">';
		if(ops.title != ""){
			chtml += '<div class="conftitle">'+ops.title+'</div>';
		}
		chtml += '<div class="confcontent">'+ops.con+'</div>';
		if(ops.cancel != null){
			chtml += '<div class="c-confbtn"><a href="javascript:;" class="c-twobtn" id="popcanclebtn">'+ops.cancelValue+'</a><a href="javascript:;" class="c-twobtn" id="popsurebtn">'+ops.okValue+'</a></div>';
		}else{
			chtml += '<div class="c-confbtn"><a href="javascript:;" class="c-onebtn" id="popsurebtn">'+ops.okValue+'</a></div>';	
		}
		chtml += '</div></div>';
		$("body").append(chtml);
		if(typeof jQuery == 'undefined'){
			var aleT = ($(".c-conf-box").height() + 80) / 2;
		}else{
			var aleT = ($(".c-conf-box").height() + 15) / 2;
		}
		$(".c-conf-box").css('margin-top', -aleT);
		$("#popcanclebtn").click(function(){
			if (ops.cancel){ops.cancel();}
			$(".c-conf-box,.c-conf-screen").remove();
		});
		$("#popsurebtn").click(function(){
			if (ops.ok){ops.ok();}
			$(".c-conf-box,.c-conf-screen").remove();
		});
	}
}

function throttle(fn, delay){
	var timer = null;
	return function(){
		var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay);
    };
};

//分享
function sharepop(content) {
	var shtml = '<div class="share-pop-hold">'+
					'<div class="share-pop c-hide">'+
						'<h2>分享赚</h2>'+
						'<h4>当小伙伴复制您分享的靓粉吧口令进入靓粉吧，购买了该商品，您可获得靓粉吧钱包收益奖励！如小伙伴是靓粉吧的新用户，TA将成为您的邀请用户，小伙伴今后每一笔订单，您都将获得钱包收益奖励。</h4>'+
						'<div class="share-con">'+
							'<p>'+content+'</p>'+
							'<p>下载靓粉吧：https://w.wwww.com</p>'+
						'</div>'+
						'<div class="share-road mt10">'+
							'<a href="javascript:;"><p><i class="share-tb-wx"></i></p><p>微信</p></a>'+
							'<a href="javascript:;"><p><i class="share-tb-pyq"></i></p><p>朋友圈</p></a>'+
						'</div>'+
						'<div class="mt10">'+
							'<a href="javascript:;" class="c-btn c-btn-gray btn-radius-lit share-close">取消</a></a>'+
						'</div>'+
					'</div>'+
					'<div class="share-pop-mb"></div>'+
				'</div>';
	$('body').append(shtml);
	setTimeout(function(){
		$('.share-pop').removeClass('c-hide');
	},10);
	$('.share-pop-mb,.share-close').click(function(){
		$('.share-pop-hold').remove();
	});
}
//分享
$('.mui-content').on('click','.sn-share',function(){
	var con = '【同仁堂珍珠粉0.3g*60瓶天然同仁堂食用珍珠粉内服外用可制面膜粉），原价15.9元，抢券省10元】复制这条信息￥Uqxc0Qm4hwI￥后打开靓粉吧';
	sharepop(con);
});
//普通分享
function shareplain() {
	var shtml = '<div class="share-pop-hold">'+
					'<div class="share-pop c-hide">'+
						'<h2>分享</h2>'+
						'<div class="share-road mt10">'+
							'<a href="javascript:;"><p><i class="share-tb-wx"></i></p><p>微信</p></a>'+
							'<a href="javascript:;"><p><i class="share-tb-pyq"></i></p><p>朋友圈</p></a>'+
						'</div>'+
						'<div class="mt20">'+
							'<a href="javascript:;" class="c-btn c-btn-gray btn-radius-lit share-close">取消</a></a>'+
						'</div>'+
					'</div>'+
					'<div class="share-pop-mb"></div>'+
				'</div>';
	$('body').append(shtml);
	setTimeout(function(){
		$('.share-pop').removeClass('c-hide');
	},10);
	$('.share-pop-mb,.share-close').click(function(){
		$('.share-pop-hold').remove();
	});
}
//普通分享
$('.mui-content').on('click','.pt-share',function(){
	shareplain();
});
//收藏
$('.mui-content').on('click','a[data-opera=collect],div[data-opera=collect]',function(){
	var checked = $(this).hasClass('checked');
	if(checked){
		myLayer.alert('已取消收藏');
		$(this).removeClass('checked');
	}else{
		myLayer.alert('收藏成功');
		$(this).addClass('checked');
	}
});
$(function(){
	$('.full-page').height($(window).height());
	$(window).resize(function(){
		$('.full-page').height($(window).height());
	});
});

document.body.addEventListener('touchstart', function () {});