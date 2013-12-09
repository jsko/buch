<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>

<script>
function doOrderInfoList() {
	document.frm.target = "_self";
	document.frm.method = "post";
	document.frm.action = "<c:url value='/main/main.swick'/>";
	document.frm.submit();
	} 
</script>
<link rel="stylesheet" href="/resources/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="/resources/bootstrap/css/bootstrap-responsive.css">

    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:10px 0 0 25px">
	<tr>
		<td align="left" valign="top">
		 
		 <a href="http://www.libro.co.kr">
		 <img src="http://image.libro.co.kr/Libro_V5/CS_IMG/cs_logo_s.jpg"	border="0" id="Image0" />
		 </a>
		 </td>

	</tr>
   </table>

<div class="navbar navbar-inverse navbar-static-top" >
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>  
          </button>
          <a class="brand" href="#" onclick="doOrder();" > 주문관리</a>
          			<%-- <td><a href="#" onclick="javascript:openWin('<c:url value="/orderinfo/orderList.do?mode=inQty&orderNo=${detail.ORDER_NO }" />&intmKindCd=<c:out value="${detail.INTM_KIND_CD }" />');"><c:out value="${detail.IN_QTY }" /></a></td> --%>
         <%--  <a href="#" onclick="javascript:<c:url value="/main/main.swick" />;">주문관리</a> --%>
      
          <a class="brand" href="#">AS관리</a>
          <a class="brand" href="#">취소관리</a>
          <a class="brand" href="#">반송관리</a>
          <a class="brand" href="#">배송관리</a>
          <a class="brand" href="#">회원관리</a>
        </div>
      </div>
    </div>
    




