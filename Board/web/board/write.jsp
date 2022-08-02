<%--
  Created by IntelliJ IDEA.
  User: heejae
  Date: 2022/07/28
  Time: 9:11 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>글작성</title>
</head>
<body>
    <h1>글작성</h1>
    <form action="/write" method="POST">
        작성자:<input type="text" name="writer"readonly value="<%=session.getAttribute("userId")%>"/><br>
        <input type="text" name="title"><br>
        <textarea  name="content" cols="80" rows="20"></textarea><br>
        <input type="submit"/>
    </form>

</body>
</html>
