package Board.controller;

import Board.service.BoardService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "boarddelete", value = "/boarddelete")
public class BoardDeleteController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        BoardService service = new BoardService();
        service.deleteBoard(id);
        response.sendRedirect("/boardlist");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
