
//gnb
jQuery(function($) {
	$("#wrap #head .li1 a").click(function(event) {
		$("#wrap #head .li1").addClass("on");
		$("#wrap #head .li2 , #wrap #head .li3 , #wrap #head .li4 , #wrap #head .li5 , #wrap #head .li6").removeClass("on");
	});
	$("#wrap #head .li2 a").click(function(event) {
		$("#wrap #head .li2").addClass("on");
		$("#wrap #head .li1 , #wrap #head .li3 , #wrap #head .li4 , #wrap #head .li5 , #wrap #head .li6").removeClass("on");
	});
	$("#wrap #head .li3 a").click(function(event) {
		$("#wrap #head .li3").addClass("on");
		$("#wrap #head .li1 , #wrap #head .li2 , #wrap #head .li4 , #wrap #head .li5 , #wrap #head .li6").removeClass("on");
	});
	$("#wrap #head .li4 a").click(function(event) {
		$("#wrap #head .li4").addClass("on");
		$("#wrap #head .li1 , #wrap #head .li2 , #wrap #head .li3 , #wrap #head .li5 , #wrap #head .li6").removeClass("on");
	});
	$("#wrap #head .li5 a").click(function(event) {
		$("#wrap #head .li5").addClass("on");
		$("#wrap #head .li1 , #wrap #head .li2 , #wrap #head .li3 , #wrap #head .li4 , #wrap #head .li6").removeClass("on");
	});
	$("#wrap #head .li6 a").click(function(event) {
		$("#wrap #head .li6").addClass("on");
		$("#wrap #head .li1 , #wrap #head .li2 , #wrap #head .li3 , #wrap #head .li4 , #wrap #head .li5").removeClass("on");
	});	
});
