 // GNB 마우스 오버/아웃시 배경 컬러 변경 스크립트
$(function(){ 
	$("ul#gnb li").mouseout(function(){ 
		$(this).removeClass("over");
	}).mouseover(function(){
		$(this).addClass("over");
	});

	//우편번호 검색 리스트 마우스 오버시
	$("ul.adressSearchResult li").mouseout(function(){ 
		$(this).removeClass("over");
	}).mouseover(function(){
		$(this).addClass("over");
	});

	currentMenu(); // gnb lnb 현상유지
});

/* gnb lnb 현상유지 */
var currentMenu = function(){
	var curLocation = $(".location").find("span").eq(0).text().replace(/\s/g, ""),
		dep3Location = $(".location").find("span").eq(1).text().replace(/\s/g, ""),

		gnb = $("#gnb"),
		gnbMenu = gnb.find(">li >a"),

		lnb = $("ul.lnbList"),
		lnbMenu = lnb.find(">li >a"),
		subLnbMenu = lnb.find(">li > ul >li >a");

	gnbMenu.each(function(){
		var _this = $(this),
			menuStr = _this.find("span").eq(0).text().replace(/\s/g, "");
		if(menuStr == curLocation){
			_this.parent().addClass("on");
		}
	});

	lnbMenu.each(function(){
		var _this = $(this),
			menuStr = _this.find("span").text().replace(/\s/g, "");
		//if(menuStr == curLocation){
		if(menuStr == dep3Location){
			_this.parent().addClass("on");
		}
	});
};
