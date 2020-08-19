$(function(){
    var v_width= $(document.body).width();
    $(".select_textul").width(v_width);
    
    $(".select_textdiv").click(function(){
		$(this).parent().parent().siblings().find(".select_textul").hide();
    	$(".select_textdiv").removeClass("divfocus");
    	$(this).addClass("divfocus");
    	$(this).siblings(".select_textul").fadeToggle(500);
        var lilength = $(this).siblings(".select_textul").find("li.focus").has(".select_second_ul").length;
    	if(lilength > 0){
    		$(this).siblings(".select_textul").find("li.focus>.select_second_ul").show();
    	}else{
    		$(".select_first_ul>li>p").css("width","100%");
    	}
    })
	var shijian=null;//时间-筛选值
	var leixing=null;//类型-筛选值
	$(".select_first_ul>li>p").click(function(){
		$(".select_second_ul").hide();
		$(this).parent("li").addClass("focus").siblings("li").removeClass("focus");
		var ynul = $(this).parent("li").has(".select_second_ul").length;
        if(ynul == 0){
        	var choose = $(this).text();//点击的值
			var bia = $(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text();//筛选类型
			if(choose!="全部"){//判断是否点击了全部
				if(bia.indexOf("(")==-1){//判断一下筛选类型后面是否有括号
					if(bia=="时间"){//判断一下点击的筛选类型
						shijian=choose;//赋值
					}else if(bia=="类型"){
						leixing=choose;
					}
					$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(bia+"( "+choose+" )");
				}else{
					var biao=bia.substring(0,bia.indexOf("("));
					if(biao=="时间"){//判断一下点击的筛选类型
						shijian=choose;//赋值
					}else if(biao=="类型"){
						leixing=choose;
					}
					$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(biao+"( "+choose+" )");
				}
			}else{
				if(bia.indexOf("(")==-1){
					if(bia=="时间"){//判断一下点击的筛选类型
						shijian=null;//赋值
					}else if(bia=="类型"){
						leixing=null;
					}
					$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(bia);
				}else{
					var biao=bia.substring(0,bia.indexOf("("));
					if(biao=="时间"){//判断一下点击的筛选类型
						shijian=null;//赋值
					}else if(biao=="类型"){
						leixing=null;
					}
					$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(biao);
				}
			}
			orderdingdan(shijian,leixing);//带筛选条件进行查询
			$(this).parents(".select_textul").siblings("input").val(choose);
			$(this).parents(".select_textul").fadeOut(300);
        }else{
        	$(".select_second_ul").hide();
		    $(this).siblings(".select_second_ul").show();
		    event.stopPropagation();
			chooseclick();
        }
		
	});
	
	chooseclick();
	function chooseclick(){
		$(".select_second_ul>li").click(function(){
			var choose = $(this).text();
			$(this).addClass("focusli").siblings("li").removeClass("focusli");
			$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(choose);
			$(this).parents(".select_textul").siblings("input").val(choose);
			$(this).parents(".select_textul").fadeOut(300);
			
			event.stopPropagation();
		});
	}
		
})
