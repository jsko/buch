<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="stylesheet" href="/resources/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="/resources/bootstrap/css/bootstrap-responsive.css">
<link rel="stylesheet" href="/resources/css/admin_common.css">
<link rel="stylesheet" href="/resources/css/button.css">

    <link rel="stylesheet" href="/resources/css/style.css">
    <link rel="stylesheet" href="/resources/css/redmond/jquery-ui.css">
    <link rel="stylesheet" href="/resources/css/redmond/jquery.ui.theme.css">
    <link rel="stylesheet" href="/resources/css/jqgrid/ui.jqgrid.css">

 <link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" media="all" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js" type="text/javascript"></script>
<script type="text/javascript" src='/resources/js/user/orderinfo.js'></script>
<script>
$(function() {
    $( "#datepicker1, #datepicker2" ).datepicker({
    	dateFormat: 'yy-mm-dd',
	    prevText: '이전 달',
	    nextText: '다음 달',
	    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	    dayNames: ['일','월','화','수','목','금','토'],
	    dayNamesShort: ['일','월','화','수','목','금','토'],
	    dayNamesMin: ['일','월','화','수','목','금','토'],
	    showMonthAfterYear: true,
	    yearSuffix: '년'
    });
    $("#datepicker1").datepicker("setDate", 'today-3');
	$('#datepicker2').datepicker('setDate', 'today');
  });
$(function() {
    $( "#datepicker3, #datepicker4" ).datepicker({
    	dateFormat: 'yy-mm-dd',
	    prevText: '이전 달',
	    nextText: '다음 달',
	    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','  12월'],
	    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	    dayNames: ['일','월','화','수','목','금','토'],
	    dayNamesShort: ['일','월','화','수','목','금','토'],
	    dayNamesMin: ['일','월','화','수','목','금','토'],
	    showMonthAfterYear: true,
	    yearSuffix: '년'
    });
    $("#datepicker3").datepicker("setDate", 'today-3');
	$('#datepicker4').datepicker('setDate', 'today');
  });


function doOrderInfoList() {
	document.frm.target = "_self";
	document.frm.method = "post";
	document.frm.action = "<c:url value='/order/detail.swick'/>";
	document.frm.submit();
	} 
</script>
<form name="frm" method="post">
 
	<div>
		<table>
			<tr>
				<td><span class="require1"> 주문처</span></td>
				<td><select class="selectBox"
					style="width: 165px; height: 30px; font-size: 12px;" id="joinsid"
					name="joinsid">
						<option value="">:: 전체 ::</option>
						<c:forEach items="${list3}" var="detail3">
							<option value="${detail3.commonCd}">${detail3.commonNm}</option>
						</c:forEach>
				</select></td>
				<td><span class="require">주문일</span></td>
				<td><input type="text" id="datepicker1" name="startdt"
					class="inp" size="10" style="width: 80px;"  />~
					<input type="text" id="datepicker2" name="enddt" class="inp"
					size="10" style="width: 80px;"/></td>

				<td><span class="require">출고예정일</span></td>
				<td><input type="text" id="datepicker3" name="startdt1"
					class="inp" size="10" style="width: 80px;"  />~
					<input type="text" id="datepicker4" name="enddt1" class="inp"
					size="10" style="width: 80px;"  /></td>
			</tr>
			<tr>
				<td><span class="require1">고객ID</span></td>
			    <td> <input type="text" id="custid" name="custid" class="inp"  style="width:165px;"/> </td>
                <td><span class="require1">고객명</span></td>
			    <td><input type="text" id="custid" name="custnm" class="inp"  style="width:165px;"/></td>		
			    <td><span class="require1">HP번호</span></td>
			    <td><input type="text" id="telhp" name="telhp" class="inp"  style="width:165px;"/></td>
			    <td><span class="require1">전화번호</span></td>
			    <td><input type="text" id="tel" name="tel" class="inp"  style="width:165px;"/></td>
			</tr>
			<tr>
				<td><span class="require1">주문번호</span></td>
			    <td> <input type="text" id="custid" name="custid" class="inp"  style="width:165px;"/> </td>
                <td><span class="require1">주문상태</span></td>
			    <td><select class="selectBox"
					style="width: 170px; height: 30px; font-size: 12px;" id="ordst"
					name="ordst">
						<option value="">:: 전체 ::</option>
						<c:forEach items="${list4}" var="detail4">
							<option value="${detail4.commonCd}">${detail4.commonNm}</option>
						</c:forEach>
				</select></td>	
			    <td><span class="require1">송장번호</span></td>
			    <td><input type="text" id="telhp" name="telhp" class="inp"  style="width:165px;"/></td>
			    <td><span class="require1">메일주소</span></td>
			    <td><input type="text" id="tel" name="tel" class="inp"  style="width:165px;"/></td>
			</tr>
		</table>
	</div>

<!-- 	<table margin-top:15px;> -->
	<table width=100% border=0 style="margin-top:15px;" >
		<tr>
			<td><input type="submit" class="btn btn-success" name="sub2" value=" 주문검색 "
				onclick="go_register_action();"
				style="height: 40px; font-size: 14pt; width: 227px; font-weight: bold;" />
			</td>
			<!-- <td>
			   <input type="submit" class="btn btn-success" name="sub32" value=" 상세검색 "
				onclick="doOrderInfoList();"
				style="height: 40px; font-size: 14pt; width: 227px; font-weight: bold;" />
			</td> -->
		</tr>
	</table>
</form>   
     
