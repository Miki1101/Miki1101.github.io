$(function () {

	var PicAttr = [
		"img/active-01.png",
		"img/active-02.png",
		"img/active-03.png",
		"img/active-04.png",
		"img/active-05.png",
		"img/active-06.png"
	]
	for (var i = 0; i < PicAttr.length; i++) {
		//加入圖片到html裡
		var Imgs = ("<img class='Imgitem' src=" + PicAttr[i] + ">")
		$(".active-picture").append(Imgs)
	}

	//判斷滑鼠移入到第幾個li就顯示第幾個img
	$(function () {
		if ($(".Imgitem").css('z-index') == '0') {
			//如果沒有內容就顯示第一個
			$(".Imgitem").eq(0).addClass("show");
		}
		$(".listItem").mouseenter(function () {
			$(".Imgitem").hide();
			var max = $(".activelist li").length;
			var num = max - $(this).nextAll().length;
			//目前是第幾個被滑鼠移入 
			$(".Imgitem").eq(num - 1).show();
			//顯示第幾個項目
		})
	})

	//active-picture父層高度塌陷(因絕對定位)
	$(function () {
		//抓取子元素的高度帶入父層
		var box = $(".Imgitem").innerHeight();
		$(".active-pictureBox").height(box);
	  
	   })

	//連結a標籤滑動效果
	$(document).on('click','a',function(event){
		event.preventDefault();
		var target= $(this).attr("href");
		$('html,body').animate({
	   scrollTop: $(target).offset().top
		},500);
	   
	  });

})



