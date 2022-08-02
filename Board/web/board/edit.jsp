
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>글작성</title>
</head>
<body>
<h1>글작성</h1>
<form action="/boardupdate?id=<%=request.getParameter("id")%>" method="POST">
    작성자:<input type="text" name="writer"readonly value="<%=request.getAttribute("writer")%>"/><br>
    <input type="text" name="title" value="<%=request.getAttribute("title")%>"><br>
    <textarea  name="content" cols="80" rows="20"><%=request.getAttribute("content")%></textarea><br>
    <input type="submit"/>
</form>

</body>
</html>
