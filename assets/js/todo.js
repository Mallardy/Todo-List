// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 	})}
// 	else
// 		$(this).css({
// 			color: "grey",
// 			textDecoration: "line-through"
// 	});
// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(){
	// check to see if enter key pressed
	if(event.which === 13){
		var text = $(this).val();
		$(this).val();
		//create new item
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});