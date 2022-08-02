<%@ page import="Board.dto.Board" %>
<%@ page import="comment.dto.Comment" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    Board board = (Board)request.getAttribute("board");
    List<Comment> comments = (List<Comment>) request.getAttribute("comments");

%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%=board.getBoard_id()%><br>
<%=board.getBoard_title()%><br>
<%=board.getBoard_content()%><br>
<%=board.getBoard_views()%><br>

<button onclick="location.href='/addView?id='+<%=request.getParameter("id")%>"
<% if(board.getBoard_writer().equals((String)session.getAttribute("userId"))){%>
    disabled <%}%>> <%=board.getBoard_writer().equals(session.getAttribute("userId"))%>좋아요!<%=board.getBoard_likes()%></button>
<button onclick="location.href ='/boardedit?id='+<%=request.getParameter("id")%>"
        <% if(!board.getBoard_writer().equals((String)session.getAttribute("userId"))){%>
        disabled <%}%>>게시글 수정</button>

<button onclick="location.href ='/boarddelete?id='+<%=request.getParameter("id")%>"
        <% if(!board.getBoard_writer().equals((String)session.getAttribute("userId"))){%>
        disabled <%}%>>게시글 삭제</button>


<br>
<% for(Comment comment:comments){%>
    <%=comment.getWriter()%>
    <%=comment.getContent()%>
    <button onclick="location.href ='http://localhost:8080/deletecomment?id=<%=comment.getId()%>&boardId=<%=board.getBoard_id()%>'"
    <%if(!comment.getWriter().equals(session.getAttribute("userId"))){%>
            disabled
    <%}%>>삭제</button>
<br>
<%}%>
<form action="/comment" method="POST">
    <input type="hidden" name="boardId" value="<%=board.getBoard_id()%>"/>

    <textarea name="comment" cols="60" rows="5"></textarea>
    <input type="submit" value="댓글작성">
</form>
</body>
</html>
