$(document).ready(function(){ 
	
});

function go_register_action(){

	frm.submit();
}

$(function() {
	$("#list3").jqGrid({
		url : '/user/goods/goodsListData.salt',
		async: false,
		datatype : "json",
		colNames : [ '상품코드', '상품명' ,'소비자가격', '제조사', '브랜드', '제품상태', '상품상태', '바코드', '제조일자', '성인여부', '상품상세', '원산지', '사용여부', '등록날짜', '등록자', '수정날짜', '수정자'],
		colModel : [  {	name : 'goodsNo',		index : 'goodsNo'		,width : 60,height : 'auto', autowidth : true, shrinkToFit : false}
		             ,{	name : 'goodsName',	index : 'goodsName'	,width : 150,height : 'auto', autowidth : true, shrinkToFit : false , editable:true}
					 ,{	name : 'goodsPrice',	index : 'goodsPrice'	,width : 150,height : 'auto', autowidth : true, shrinkToFit : false , editable:true}
					 ,{	name : 'manufacturer',	index : 'manufacturer'	,width : 150,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'brand',	index : 'brand'	,width : 150,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'goodsState',	index : 'goodsState'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'goodsCode',	index : 'goodsCode'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'barCode',	index : 'barCode'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'manufactureDate',	index : 'manufactureDate'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'authYn',	index : 'authYn'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'goodsDetail',	index : 'goodsDetail'	,width : 150,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'origin',	index : 'origin'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'useYn',	index : 'useYn'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false, editable:true}
					 ,{	name : 'regDate',	index : 'regDate'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false}
					 ,{	name : 'regMan',	index : 'regMan'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false}
					 ,{	name : 'modDate',	index : 'modDate'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false}
					 ,{	name : 'modMan',	index : 'modMan'	,width : 60,height : 'auto', autowidth : true, shrinkToFit : false}
		],
		rowNum : 10,
		rowList : [ 10, 20, 30 ],
		pager : '#pager3',
		sortname : 'goodsNo',
		viewrecords : true,
		sortorder : "asc",
		caption : "상품 리스트",
		cellEdit:true,
	    cellsubmit:'remote',
	    cellurl:'/user/goods/goodsUpdate.salt', 
	    beforeSubmitCell : function(rowid, cellname, value) {   // submit 전

		return {
			"id":rowid, "cellName":cellname, "cellValue":value , 
			"goodsNo":$("#list3").getRowData(rowid)['goodsNo'],
			"goodsName":$("#list3").getRowData(rowid)['goodsName'],
			"goodsPrice":$("#list3").getRowData(rowid)['goodsPrice'],
			"manufacturer":$("#list3").getRowData(rowid)['manufacturer'],
			"brand":$("#list3").getRowData(rowid)['brand'],
			"goodsState":$("#list3").getRowData(rowid)['goodsState'],
			"goodsCode":$("#list3").getRowData(rowid)['goodsCode'],
			"barCode":$("#list3").getRowData(rowid)['barCode'],
			"manufactureDate":$("#list3").getRowData(rowid)['manufactureDate'],
			"authYn":$("#list3").getRowData(rowid)['authYn'],
			"goodsDetail":$("#list3").getRowData(rowid)['goodsDetail'],
			"origin":$("#list3").getRowData(rowid)['origin'],
			"useYn":$("#list3").getRowData(rowid)['useYn'],
			"regDate":$("#list3").getRowData(rowid)['regDate'],
			"regMan":$("#list3").getRowData(rowid)['regMan'],
			"modDate":$("#list3").getRowData(rowid)['modDate'],
			"modMan":$("#list3").getRowData(rowid)['modMan']	 
			};
	    },
	    afterSubmitCell : function(res) {    // 변경 후
        	jQuery("#list3").trigger("reloadGrid");

	    	if(res.responseText == "SUCCESS") {
	            alert("데이터가 변경되었습니다.");
	        }else{
	        	alert("데이터가 변경되지 않았습니다. 다시 시도해 주세요.");
	        }
	    },
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

