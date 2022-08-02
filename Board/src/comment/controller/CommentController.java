package comment.controller;

import comment.dao.CommentDAO;
import comment.dto.Comment;
import comment.service.CommentService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "comment", value = "/comment")
public class CommentController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String boardId = request.getParameter("boardId");
        String comment = request.getParameter("comment");
        HttpSession session = request.getSession();
        String writer = (String) session.getAttribute("userId");
        CommentService service = new CommentService();
        service.addComment(Integer.parseInt(boardId), writer, comment);

        response.sendRedirect("/board?id="+ boardId);
    }
}
