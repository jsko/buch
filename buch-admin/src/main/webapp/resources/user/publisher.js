$(document).ready(function(){ 
	
});

function go_register_action(){
	doCodeSearch();
	frm.submit();
}
function doCodeSearch()
{  var action = $("#frm").attr('action');
	$.post("/publisher/publisher.buch");
	
}
$(function() {
	$("#list3").jqGrid({
		url : '/publisher/publisherListData.buch',
		async: false,
		datatype : "json",
		colNames : [ '출판사코드', '출판사명' ,'대표자', '전화번호', '팩스', '우편번호', '주소'],
		colModel : [ 
						{name:'pubCd'             ,index:'pubCd'              , width:150},
						{name:'pubNm'             ,index:'pubNm'              , width:100},
						{name:'busiPresident'     ,index:'busiPresident'      , width:100},
						{name:'busiTel'           ,index:'busiTel'            , width:100},
						{name:'busiFax'           ,index:'busiFax'            , width:100},
						{name:'busiZip'           ,index:'busiZip'            , width:100},
						{name:'busiAddr1'         ,index:'busiAddr1'          , width:100},
		],
		rowNum : 10,
		rowList : [ 10, 20, 30 ],
		height:500,
		pager : '#pagingDiv',
		sortname : 'pubCd',
		viewrecords : true,
		sortorder : "asc",
		caption : "출판사 리스트",
		cellEdit:true,
	    		jsonReader : {
			repeatitems : false
		// json key와 밸류로사용하기 위해
		},
		loadError : function(xhr, status, error) {
			alert(xhr.responseText); // 
		},
		loadComplete : function(data) {
		}
	});
});


