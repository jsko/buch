(function($){ 		  
	$.fn.popupWindow = function(instanceSettings){
		
		return this.each(function(){
		
		$(this).click(function(){
		
		$.fn.popupWindow.defaultSettings = {
			centerBrowser:0, // center window over browser window? {1 (YES) or 0 (NO)}. overrides top and left
			centerScreen:0, // center window over entire screen? {1 (YES) or 0 (NO)}. overrides top and left
			height:500, // sets the height in pixels of the window.
			left:0, // left position when the window appears.
			location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
			resizable:0, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			width:500, // sets the width in pixels of the window.
			windowName:'popupProc', // name of window set from the name attribute of the element that invokes the click
			windowURL:null, // url used for the popup
			top:0, // top position when the window appears.
			toolbar:0 // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
		};
		
		settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});
		
		var windowFeatures =    'height=' + settings.height +
								',width=' + settings.width +
								',toolbar=' + settings.toolbar +
								',scrollbars=' + settings.scrollbars +
								',status=' + settings.status + 
								',resizable=' + settings.resizable +
								',location=' + settings.location +
								',menuBar=' + settings.menubar;

				settings.windowName = this.name || settings.windowName;
				settings.windowURL = this.href || settings.windowURL;
				var centeredY,centeredX;
			
				if(settings.centerBrowser){
						
					if ($.browser.msie) {//hacked together for IE browsers
						centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120)/2) - (settings.height/2)));
						centeredX = window.screenLeft + ((((document.body.offsetWidth + 20)/2) - (settings.width/2)));
					}else{
						centeredY = window.screenY + (((window.outerHeight/2) - (settings.height/2)));
						centeredX = window.screenX + (((window.outerWidth/2) - (settings.width/2)));
					}
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else if(settings.centerScreen){
					centeredY = (screen.height - settings.height)/2;
					centeredX = (screen.width - settings.width)/2;
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
				}else{
					window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + settings.left +',top=' + settings.top).focus();	
				}
				return false;
			});
			
		});	
	};
})(jQuery);


function returnVal(id,name,returnFunction){
	$('#orgSrch').hide();
	eval(returnFunction+"('"+id+"','"+name+"')");
}

function orgSrch(obj,returnFunction,cd){
	$('body').append("<div id='orgSrch' style=\"display:none;\"></div>");
	
//	var divTop = obj.offsetTop+obj.offsetHeight; //상단 좌표
    var target = $(obj).offset(); 
	$('#orgSrch').css({
       "top": target.top + 22
       ,"left": target.left
       , "position": "absolute"
       , "width": "90px"
       , "border" : "3px solid #E09E01"
       , "background-color" : "white"
    }).show();
	$('#orgSrch > li').remove();
    if($.trim(obj.value) == ""){
    	$('#orgSrch').hide();
    	return;
    }
	var _obj = {
			orgName : obj.value
			,oneCd : cd
		};
	$.getJSON('/in/agentinfo/popList.do', _obj, function(data) {
		if(data){
			for(i=0; i<data.length; i++){
 				$('#orgSrch').append("<li><a href='#' onclick=\"returnVal('"+data[i].ORG_OID+"','"+data[i].ORG_NAME+"','"+returnFunction+"');\">"+data[i].ORG_NAME+"</a></li>");
			}
			if(data.length == 0){
//				$('#orgSrch').hide();
//				alert("검색된 매장이 없습니다.");
				$('#orgSrch').append("<li><a href='#'>검색된 결과없음</a></li>");
			}
		}else{
			$('#orgSrch').hide();
			alert("잠시 후 시도하세요.");
		}
	});
 }

function StringBuffer()
{
	var string = "";
	
	this.append = function(str)
	{
		string += str;
	};
	
	this.toString = function()
	{
		return string;
	};
}

var _ObjectView = null;
var _ObjectCode = null;
var _targetId = null;
var _indexDirect = 0;

function setValueForPop(value)
{
	$('#'+_targetId).hide();
	try
	{
		_ObjectView.value = value;
	}
	catch(e)
	{
	}
}

function setCodeForPop(code)
{
	$('#'+_targetId).hide();
	try
	{
		_ObjectCode.value = code;
		try
		{
			_ObjectCode.onchange();
		}
		catch(e)
		{
			//do Nothing
		}
		
	}
	catch(e)
	{
		//do Nothing
	}
}

function findPositionTop(obj)
{
    var curLeft = curTop = 0;

    if (obj.offsetParent) {
        do {
            curLeft += obj.offsetLeft;
            curTop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }

    return curTop;
}

function hideDivElement(_targetId)
{
	$('#'+_targetId).hide();
}

/**
 * 
 * @param objView 조회시 보여질 값필드명
 * @param objCode 조회시 받아올 코드필드명
 * @param OrderCode 조회 키 코드
 * @param isUserAuth 사용자 권한 설정 true/false
 * @param code1 더미코드필드1
 * @param code2 더미코드필드2
 * @param code3 더미코드필드3
 * @param code4 더미코드필드4
 * @returns CODE,NAME
 * 
 * []안넣어도 되는 코드
 * <>반드시 넣어야되는코드
 * 
 * 1.MODEL_NAME ->모델명 검색 (단말,USIM) [code1 : 01(단품), 02(USIM)]
 * 
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true) // 단품, USIM
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'01') //단품
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'02') //USIM
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'01','01') //단품 국내
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'01','02') //단품 외산
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'02','01') //USIM 국내
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'02','02') //USIM 외산
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'','03', '<협력사코드값>' ) //해당 협력사 단품,USIM
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'','03', '<협력사코드값>' ,'01') //해당 협력사 단품,USIM 국내
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'','03', '<협력사코드값>' ,'02') //해당 협력사 단품,USIM 해외
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'01','03', '<협력사코드값>' ,'') //해당 협력사 단품
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'01','03', '<협력사코드값>' ,'01') //해당 협력사 단품 국내 
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'01','03', '<협력사코드값>' ,'02') //해당 협력사 단품 해외
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'02','03', '<협력사코드값>' ,'') //해당 협력사 USIM
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'02','03', '<협력사코드값>' ,'01') //해당 협력사 USIM 국내
 *  예)popSimpleLayer(objView,objCode,'MODEL_NAME',true,'02','03', '<협력사코드값>' ,'02') //해당 협력사 USIM 해외
 *  
 * 2.MEJANG_NAME -> 매장명 검색 [code1 : 현재 대리점코드]
 * 	예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true) // 매장
 *  예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true, '<대리점코드값>') //해당 대리점별 매장
 *  예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true, '' ,'FIX_QTY_ONLY_CENTER' ,'01') // 단품 출고건수가 남아있는 센터
 *  예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true, '' ,'FIX_QTY_ONLY_CENTER' ,'02') // USIM 출고건수가 남아있는 센터
 *  예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true, '' ,'FIX_QTY_ONLY' ,'01') // 단품 출고건수가 남아있는 매장
 *  예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true, '' ,'FIX_QTY_ONLY' ,'02') // USIM 출고건수가 남아있는 매장
 *  예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true, '' ,'FIX_QTY_ONLY' ,'01' , '<센터코드값>') // 단품 출고건수가 남아있는 해당 센터 매장
 *  예)popSimpleLayer(objView,objCode,'MEJANG_NAME',true, '' ,'FIX_QTY_ONLY' ,'02' , '<센터코드값>') // USIM 출고건수가 남아있는 해당 센터 매장
 *  
 * 3.DELIZUM_NAME -> 대리점명 검색 [code1 : 현재 대리점코드]
 * 	예)popSimpleLayer(objView,objCode,'DELIZUM_NAME',true) // 대리점
 *  예)popSimpleLayer(objView,objCode,'DELIZUM_NAME',true, '<센터코드값>') //해당 센터별 대리점
 *  
 * 4.CHANGE_NO -> 교품번호검색 검색 [code1 : 01 단말교품, 02 USIM 교품]
 * 예)popSimpleLayer(objView,objCode,'CHANGE_NO',true) // 교품번호
 * 예)popSimpleLayer(objView,objCode,'CHANGE_NO',true,'01') // 단말 교품번호
 * 예)popSimpleLayer(objView,objCode,'CHANGE_NO',true,'02') // 유심 교품번호
 * 
 * 5.USER_NAME -> 사용자 검색 [code1 : 01 단말교품, 02 USIM 교품]
 * 예)popSimpleLayer(objView,objCode,'USER_NAME',true) // 사용자
 * 예)popSimpleLayer(objView,objCode,'USER_NAME',true,'<조직코드값>') // 해당 조직별 사용자
 * 
 * 6.CENTER_NAME -> 물류센터 검색
 * 예)popSimpleLayer(objView,objCode,'CENTER_NAME',true) // 사용자
 * 
 */ 
function popSimpleLayer(objView,objCode,OrderCode,isUserAuth,code1,code2,code3,code4)
{
	/**
	 * 크롬 focus bug 대응
	 */
	objView.focus();
	
	_ObjectView = objView;
	_ObjectCode = objCode;
	
	if(_ObjectView.tagName != "INPUT")
	{
		alert("텍스트 상자만 지원해요^^ 혹은 네임이 두개입니다.");
		return;
	}
	else if(_ObjectCode.tagName != "INPUT")
	{
		alert("텍스트 상자만 지원해요^^ 혹은 네임이 두개입니다.");
		return;
	}
	
	var targetId = objView.id + "ViewLayer";
	_targetId = targetId;
	
	
	if(objView.value == "")
	{
		$('#'+_targetId).hide();
		_indexDirect = 0;
		return;
	}
	
	var _codeNm = "";
	if(objView.value == " ")
	{
		_codeNm = "%";
	}
	else
	{
		_codeNm = objView.value;
	}
	
	if(code1 == undefined)
	{
		code1 = "";
	}
	if(code2 == undefined)
	{
		code2 = "";
	}
	if(code3 == undefined)
	{
		code3 = "";
	}
	if(code4 == undefined)
	{
		code4 = "";
	}
	
	$('body').append('<div id="'+targetId+'" style="display:none;border:3px solid #E09E01;z-index:99"></div>');
	var divTop = findPositionTop(objView) + objView.clientHeight;
	var target = $(objView).offset(); 
	
	var objViewClientWidth = 0;
	
	if(objView.clientWidth < 130)
	{
		objViewClientWidth = 130;
	}
	else
	{
		objViewClientWidth = objView.clientWidth;
	}
	
	if(OrderCode == 'MODEL_NAME')
	{
		objViewClientWidth = objViewClientWidth + 50;
	}
	else
	{
		objViewClientWidth = objViewClientWidth - 3;
	}
	
	$('#' + targetId).css({
       "top": divTop
       ,"left": target.left
       , "position": "absolute"
       , "width" : objViewClientWidth
    }).show();
	
	var _obj = {
			codeNm : _codeNm
			,orderCode : OrderCode
			,code1 : code1
			,code2 : code2
			,code3 : code3
			,code4 : code4
		};
	
	$.getJSON('/in/common/popSimpleLayer.do', _obj, function(data) {
		
		$('#'+objView.id).unbind("blur");
		$('#'+objView.id).attr('autocomplete','off').blur(function(event){
			
			var isHideCorrect = true;
			
			if(document.activeElement != null)
			{
				if(document.activeElement.id != null && document.activeElement.id != undefined)
				{
					if(document.activeElement.id == targetId)
					{
						isHideCorrect = false;
					}
				}
			}
			
			if(isHideCorrect)
			{
				setTimeout("hideDivElement('"+_targetId+"')" , 200);
			}
		});
		
		$('#'+objView.id).unbind("keyup");
		$('#'+objView.id).attr('autocomplete','off').keyup(function(event){
			
			   if(_ObjectView.value == "")
			   {
				   _ObjectCode.value = "";
				   try
				   {
					  _ObjectCode.onchange();
				   }
				   catch(e)
				   {
					   //do Nothing
				   }
			   }
			   else if(event.keyCode == 27)
			   {
				   $('#'+_targetId).hide();
				   objView.value = "";
				   _ObjectCode.value = "";
				   try
				   {
					   _ObjectCode.onchange();
				   }
				   catch(e)
				   {
					   //do Nothing
				   }
			   }
			   else if(event.keyCode == 38)
			   {
				   _indexDirect--;
			   }
			   else if(event.keyCode == 40)
			   {
				   _indexDirect++;
			   }
			   else if(event.keyCode == 13)
			   {
				   if(_ObjectView.value != "")
				   {
					   var div = document.getElementById(targetId);
					   var size = div.childNodes.length;
					   
					   for(var i=0;i<size;i++)
					   {
						   var li = div.childNodes[i];
						   var bgColor = li.style.backgroundColor;
						   
						   if(bgColor == "rgb(74, 74, 74)")
						   {
							   div.childNodes[i].onclick();
						   }
						   else if(bgColor.toUpperCase() == "#4A4A4A")
						   {
							   div.childNodes[i].onclick();
						   }
					   }
				   }
			   }
		});
		
		if(data != "")
		{
			$('#' + targetId).html('');
			
			if(_indexDirect >= data.length)
			{
				_indexDirect = 0;
			}
			
			if(_indexDirect < 0)
			{
				_indexDirect = 0;
			}
			
			for(var i=0; i<data.length; i++)
			{
				var sb = new StringBuffer();
				if(_indexDirect == i)
				{
					sb.append("<li style='background-color:#4A4A4A;color:#FFFFFF;text-align:left;cursor:pointer;' ");
				}
				else
				{
					sb.append("<li style='background-color:#FFFFFF;color:#000000;text-align:left;cursor:pointer;' ");
				}
				
				/**
					쿼리상 값없음 처리
				*/
				var resultCode = data[i].CODE;
				var resultName = data[i].NAME;
				var resultKorName = data[i].MODEL_NAME_KOR;
				
				/**
				 * json rebugging
				 */
				if(resultCode == undefined)
				{
					resultCode = '';
				}
				
				if(resultName == undefined)
				{
					resultName = '';
				}
				
				if(resultKorName == undefined)
				{
					resultKorName = '';
				}
				
				resultName = new String(resultName).replace(/ /gi, "&nbsp;");
				resultKorName = new String(resultKorName).replace(/ /gi, "&nbsp;");
				
				sb.append(" onmouseover='this.style.backgroundColor=\"#4A4A4A\";this.style.color=\"#FFFFFF\";'");
				sb.append(" onmouseout='this.style.backgroundColor=\"#FFFFFF\";this.style.color=\"#000000\";'");
				sb.append(" onclick='setValueForPop(\""+resultName+"\");setCodeForPop(\""+resultCode+"\");'");
				sb.append(">");
				
				if(OrderCode == 'MODEL_NAME')
				{
					sb.append(resultName);
					sb.append("<font color='#A4A4A4'>");
					sb.append(resultKorName);
					sb.append("</font>");
				}
				else if(code2 == 'FIX_QTY_ONLY')
				{
					sb.append(resultName);
					sb.append("<font color='#A4A4A4'>");
					sb.append("(");
					sb.append(data[i].FIX_OUT_QTY);
					sb.append("건)");
					sb.append("</font>");
				}
				else if(code2 == 'FIX_QTY_ONLY_CENTER')
				{
					sb.append(resultName);
					sb.append("<font color='#A4A4A4'>");
					sb.append("(");
					sb.append(data[i].FIX_OUT_QTY);
					sb.append("건)");
					sb.append("</font>");
				}
				else
				{
					sb.append(resultName);
				}
				sb.append("</li>");
 				$('#' + targetId).append(sb.toString());
			}
		}
		else
		{
			_indexDirect = 0;
			$('#' + targetId).html('');
			var sb = new StringBuffer();
			sb.append("<li style='background-color:#FFFFFF;text-align:left;cursor:pointer;' ");
			sb.append(" onmouseover='this.style.backgroundColor=\"#C2C2C2\"'");
			sb.append(" onmouseout='this.style.backgroundColor=\"#FFFFFF\"'");
			sb.append(" onclick='this.parentNode.style.display=\"none\";'");
			sb.append(">");
			sb.append("검색결과 없음");
			sb.append("</li>");
			$('#' + targetId).append(sb.toString());
		}
	});
}

/**
 * 
 * @param objView 셀렉트 박스 id
 * @param OrderCode 조회 범위 코드
 * @param isUserAuth 사용자 권한 설정 true/false
 * @param isShowAll 초기 전체 표시 true/false (isShowSelect 과 같이 모두 true를 줄 수 없음)
 * @param isShowSelect 초기 선택 표시 true/false (isShowAll 과 같이 모두 true를 줄 수 없음)
 * @param code1 더미코드필드1
 * @param code2 더미코드필드2
 * @param code3 더미코드필드3
 * 
 * @returns 셀렉트 옵션들
 * 
 * []안넣어도 되는 코드
 * <>반드시 넣어야되는코드
 * 
 * 1.COLOR_OPTIONS -> 색상옵션들
 * 
 *  예)selectSimpleLayer(objView,'COLOR_OPTIONS',true,false,true) // 모든 색상들
 *  예)selectSimpleLayer(objView,'COLOR_OPTIONS',true,false,true,'7777') // 모델코드 7777에 해당되는 색상들
 *  
 * 2.MAKER_OPTIONS -> 협력사들
 * 예)selectSimpleLayer(objView,'MAKER_OPTIONS',true,true,false) // 전체
 * 예)selectSimpleLayer(objView,'MAKER_OPTIONS',true,false,false,'<기기유형코드>') // 기기유형에 따른 취급협력사
 */
function selectSimpleLayer(objView,OrderCode,isUserAuth,isShowAll,isShowSelect,code1,code2,code3)
{
	if(objView.tagName != "SELECT")
	{
		alert("셀렉트 박스만 지원해요^^ 혹은 네임이 두개입니다.");
		return;
	}
	
	if(code1 == undefined)
	{
		code1 = "";
	}
	if(code2 == undefined)
	{
		code2 = "";
	}
	if(code3 == undefined)
	{
		code3 = "";
	}
	var _obj = {
			orderCode : OrderCode
			,code1 : code1
			,code2 : code2
			,code3 : code3
		};
	
	$.getJSON('/in/common/selectSimpleLayer.do', _obj, function(data) {
		
		if(data != "")
		{
			while(objView.firstChild)
			{
				objView.removeChild(objView.firstChild); 
			}
			
			if(isShowAll)
			{
				var option = new Option(":: 전체 ::","");
				option.setAttribute("value1", "");
				objView.options[0] = option;
				
			}
			else if(isShowSelect)
			{
				var option = new Option(":: 선택 ::","");
				option.setAttribute("value1", "");
				objView.options[0] = option;
			}
			
			for(var i=0; i<data.length; i++)
			{
				var option = new Option(data[i].NAME,data[i].CODE);
				
				if(data[i].BR_CD == null || data[i].BR_CD == undefined)
				{
					option.setAttribute("value1", "");
				}
				else
				{
					option.setAttribute("value1", data[i].BR_CD);
				}
				
				objView.options[objView.options.length] = option;
			}
		}
		else
		{
			while(objView.firstChild)
			{
				objView.removeChild(objView.firstChild); 
			}
		}
	});
}

