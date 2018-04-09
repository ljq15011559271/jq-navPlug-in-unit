//全局
// ;(function($){

// 	$.extend({
// 		'nav':function(color){
// 			$(".nav").css({
// 			'list-style':'none',
// 			'display':'none',
// 			'color':color
// 			});

// 			$(".nav").parent().hover(function(){
// 				$(this).find(".nav").slideDown("nomarl");
// 			},function(){
// 				$(this).find(".nav").stop().slideUp("nomarl");
// 			})	
// 		}	
// });

// })(jQuery);

//局部

;(function($){

	$.fn.extend({
		'nav':function(color){
			$(this).find(".nav").css({
			'list-style':'none',
			'display':'none',
			'color':color
			});

			$(this).find(".nav").parent().hover(function(){
				$(this).find(".nav").slideDown("nomarl");
			},function(){
				$(this).find(".nav").stop().slideUp("nomarl");
			})
		}	
});

})(jQuery);