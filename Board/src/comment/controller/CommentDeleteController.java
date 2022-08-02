package comment.controller;

import comment.service.CommentService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "deletecomment", value = "/deletecomment")
public class CommentDeleteController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        int commentId = Integer.parseInt(request.getParameter("id"));
        String boardId = request.getParameter("boardId");
        CommentService service = new CommentService();

        service.deleteComment(commentId);
        response.sendRedirect("/board?id="+ boardId);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}

