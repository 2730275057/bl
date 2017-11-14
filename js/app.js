var flag;

//页面加载
$(document).ready(function() {
	flag = 0;
	$(".container").slideDown(1000);
	$("#btnLogin span").css("color", "#FFC800");
	console.log(flag);
	// console.log("HHH");
	console.log($("#enterImgBox").css("margin"));
	//登录界面图片动画
	$("#photo").mouseenter(function(){
	    $("#photo").animate({
	    	left:'45px',
	    	opacity:'1',
	    },"slow");
	});
	

	//登录界面按钮
	$("#btnLogin").mouseenter(function () {
		$("#btnLogin span").css({
			"color": "#FFC800",
			"cursor": "default",
		});
	});
	$("#btnLogin").mouseleave(function () {
		if (flag != 0) {
			$("#btnLogin span").css("color", "dimgray");
		}
	});
	$("#btnLogin").click(function () {
		if (flag != 0) {
			$("#Login").show(500);
			$("#right").css("background-color", "#F9F9F9");
			$("#btnLogin span").css("color", "#FFC800");
			if (flag == 1) {
				$("#Register").hide(500);	
				$("#btnRegister span").css("color", "dimgray");
			} else if (flag == 2) {
				$("#Enter").hide(500);	
				$("#btnEnter span").css("color", "dimgray");
			}	

			flag = 0;	
		}
	});

	//注册界面按钮
	$("#btnRegister").mouseenter(function () {
		$("#btnRegister span").css({
			"color": "#FFC800",
			"cursor": "default",
		});
	});
	$("#btnRegister").mouseleave(function () {
		if (flag != 1) {
			$("#btnRegister span").css("color", "dimgray");
		}
	});
	$("#btnRegister").click(function () {
		if (flag != 1) {
			$("#Register").show(500);
			$("#right").css("background-color", "lightgray");
			$("#btnRegister span").css("color", "#FFC800");

			if (flag == 0) {		
				$("#Login").hide(500);
				$("#btnLogin span").css("color", "dimgray");
			} else if (flag == 4) {
				$("#Enter").hide(500);
				$("#btnEnter span").css("color", "dimgray");
			}

			flag = 1;
		}
	});

	
	//登录表单提交
	$("#btnSubmit").mouseenter(function () {
		$("#btnSubmit span").css({
			"color": "orange",
			"cursor": "default",
		});
	});
	$("#btnSubmit").mouseleave(function () {
		$("#btnSubmit span").css("color", "#FFC800");
	});
	$("#btnSubmit").click(function () {

	});

	//忘记密码
	$("#btnForget").mouseenter(function () {
		$("#btnForget span").css({
			"color": "#FFC800",
			"cursor": "default",
		});
	});
	$("#btnForget").mouseleave(function () {
		$("#btnForget span").css("color", "dimgray");
	});
	$("#btnForget").click(function () {

	});

	//注册表单提交
	$("#btnRegisterSubmit").mouseenter(function () {
		$("#btnRegisterSubmit span").css({
			"color": "orange",
			"cursor": "default",
		});
	});
	$("#btnRegisterSubmit").mouseleave(function () {
		$("#btnRegisterSubmit span").css("color", "#FFC800");
	});
	$("#btnRegisterSubmit").click(function () {

	});
});
window.onload = function() {
	var pics = document.getElementById('pics_ol').getElementsByTagName('li');
	var dots = document.getElementById("dots_ul").getElementsByTagName("li");
	var luanpo = document.getElementById("carousel");
	var oimg = document.getElementById('pics_ol');
	var iNow = 0;
	var dt = null;
	var dot_over_color = "white"; //选中状态的颜色
	var dot_out_color = "brown"; //没有选中的颜色
	dots[0].style.backgroundColor = dot_over_color;
	oimg.style.width = pics.length * pics[0].offsetWidth + "px";

	function tab() {
		for (var i = 0; i < dots.length; i++) {
			dots[i].index = i;
			//设置鼠标经过图片的动作
			pics[i].onmouseover = function() {
				clearInterval(dt);
			}
			pics[i].onmouseout = function() {
				start();
			}

			//设置鼠标经过小圆点的动作
			dots[i].onmouseover = function() {
				clearInterval(dt);
				iNow = this.index;
				for (var i = 0; i < dots.length; i++) {
					dots[i].className = "b";
					dots[i].style.backgroundColor = dot_out_color;
				}
				this.className = "a";
				this.style.backgroundColor = dot_over_color;
				oimg.style.left = -(pics[0].offsetWidth * iNow) + "px"; //这边可以加上我前面所写的那个缓动框架            
			}
			dots[i].onmouseout = function() {
				start();
			}
		}
	}

	function start() {　　
		clearInterval(dt);
		dt = setInterval(function() {
			if (iNow > dots.length - 2) {
				iNow = 0;
			} else {
				iNow++;
			}
			for (var k = 0; k < dots.length; k++) {
				if (iNow == dots[k].index) {
					dots[k].className = 'a';
					dots[k].style.backgroundColor = dot_over_color;
				} else {
					dots[k].className = 'b';
					dots[k].style.backgroundColor = dot_out_color;
				}
			}
			oimg.style.left = -(pics[0].offsetWidth * iNow) + "px"; //这边可以加上我前面所写的那个缓动框架
		}, 2000);
		tab();
	}

	start();
}
