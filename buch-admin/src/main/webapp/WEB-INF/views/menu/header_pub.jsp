<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<link href="/resources/jqgrid/css/ui.jqgrid.css" rel="stylesheet">
<link href="/resources/jqgrid/css/jquery-ui-1.10.3.custom.css"	rel="stylesheet">

<script src="/resources/jqgrid/js/i18n/grid.locale-kr.js"	type="text/javascript"></script>
<script src="/resources/jqgrid/js/jquery.jqGrid.min.js"  	   type="text/javascript"></script>
<script src="/resources/jqgrid/plugins/jquery.tablednd.js"	   type="text/javascript"></script>
<script src="/resources/jqgrid/plugins/jquery.contextmenu.js"	type="text/javascript"></script>
<script src="/resources/jqgrid/plugins/grid.setcolumns.js"   	type="text/javascript"></script>
<script src="/resources/jqgrid/plugins/jquery.searchFilter.js"
	type="text/javascript"></script>
<script type="text/javascript"
	src="/resources/jqgrid/js/jquery-ui-1.10.3.custom.min.js"></script>

<script type="text/javascript" src="/resources/scripts/importRegForm.js"></script>
<script type="text/javascript">
	var registFormUrl = '/admin/publisher/add?';
	var SearchUrl ='/admin/publisher/search?';
	
	function goRegist() {
		location.href = registFormUrl + getParam();
	}
	
	function goSearch(){
		location.href = SearchUrl + getParam();
	}
	
</script>
<div>
<form name="frm" method="post">
	<table>
		<thead>
			<tr>
				<td>검색조건</td>
				<td colspan="5" align="right"><button type="button"
						onclick="goRegist()">등록</button></td>
			</tr>
		</thead>
		<tr>
			<td>사용유무</td>
			<td><select id="USE_YN" name="USE_YN">
					<option value="">전체</option>
					<option value="Y"
						<c:if test="${searchCondition.conditions['USE_YN'] eq 'Y'}">
					selected="selected"
					</c:if>>사용</option>
					<option value="N"
						<c:if test="${searchCondition.conditions['USE_YN'] eq 'N'}">
					selected="selected"
					</c:if>>미사용</option>
			</select></td>
		</tr>
		<tr>
			<th>출판사코드</th>
			<td><input type="text" id="PUB_CD" name="PUB_CD"
				value="${searchCondition.conditions['PUB_CD']}"></td>
			<th>출판사이름</th>
			<td><input type="text" id="PUB_NM" name="PUB_NM"
				value="${searchCondition.conditions['PUB_NM']}"></td>
			<th>대표자</th>
			<td><input type="text" id="BUSI_PRESIDENT" name="BUSI_PRESIDENT"
				value="${searchCondition.conditions['BUSI_PRESIDENT']}"></td>
			<td rowspan="2"><button type="submit" onclick="go_register_action()">검색</button></td>
		</tr>
		<tr>
			<th>사업자 번호</th>
			<td><input type="text" id="BUSI_NO" name="BUSI_NO"
				value="${searchCondition.conditions['BUSI_NO']}"></td>
			<th>전화번호</th>
			<td><input type="text" id="BUSI_TEL" name="BUSI_TEL"
				value="${searchCondition.conditions['BUSI_TEL']}"></td>
			<th>FAX</th>
			<td><input type="text" id="BUSI_FAX" name="BUSI_FAX"
				value="${searchCondition.conditions['BUSI_FAX']}"></td>
		</tr>
	</table>
	</form>
</div>