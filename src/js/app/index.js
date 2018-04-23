require(['jquery','swiper','handlebars','iscroll'],function($,swiper,Handlebars,iscroll){

	
	$.ajax({
		url:"/lb",
		success:function(res){
			var data=JSON.parse(res).swiper;
			render(data)
			console.log(data)


		},
		error:function(){
			console.warn(error)
		}
	})
	function render(data){
		console.log(data)
	var lbSource=$("#lb").html();

	var lbTemplate=Handlebars.compile(lbSource);
	var html=lbTemplate(data);
	console.log(html)
	$(".swiper-wrapper").html(html)
	new swiper(".swiper-container",{	    
		pagination: {
    el: '.swiper-pagination'
        },
		autoplay:true,
		loop:true

	})
	}
	var myScroll = new iscroll(".scroll",{
		scrollX:true,
		scrollY:false,
		hScorllbar:false,
		vScrollbar:false,
		vScroll:false
	})
	
	var myScroll = new iscroll(".scroll2",{
		scrollX:true,
		scrollY:false,
		hScorllbar:false,
		vScrollbar:false,
		vScroll:false
	})

})