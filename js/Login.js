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

