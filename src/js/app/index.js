require(['jquery','handlebars'],function($,Handlebars){

	
	$.ajax({
		url:"/list",
		success:function(res){
			var data=JSON.parse(res);
			render(data)
			


		},
		error:function(){
			console.warn(error)
		}
	})
	function render(data){
console.log(data)
	var Source=$("#xr").html();
     
	var Template=Handlebars.compile(Source);

	var html=Template(data);
     
	$(".box").html(html)
	
	}

})