<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<title>FirstPage</title>
<meta charset="UTF-8">

<!--[if IE]> 
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
<body>
<div class="container">
	<table>

		<tr>
			<td colspan="2"><tiles:insertAttribute name="menu" /></td>
		</tr>
		<tr>
			<td colspan="2"><tiles:insertAttribute name="header" /></td>
		</tr>
		<tr>
			<td><tiles:insertAttribute name="body" /></td>
		</tr>
		<tr>
			<td colspan="2"><tiles:insertAttribute name="footer" /></td>
		</tr>

	</table>
</div>
</body>
</html>