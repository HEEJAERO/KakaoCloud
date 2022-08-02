package Board.controller;

import Board.service.BoardService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "write", value = "/write")
public class WriteController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String content = request.getParameter("content");
        String writer = request.getParameter("writer");
        String title = request.getParameter("title");
        BoardService service = new BoardService();
        service.write(writer,title, content);
        response.sendRedirect("/boardlist");

    }
}
