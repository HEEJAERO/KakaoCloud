package Board.controller;

import Board.service.BoardService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name= "boardupdate" , value = "/boardupdate")
public class BoardUpdateController extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String content = request.getParameter("content");
        String title = request.getParameter("title");
        int id = Integer.parseInt(request.getParameter("id"));
        BoardService service = new BoardService();
        service.update(id,title, content);
        response.sendRedirect("/board?id=" + id);

    }
}
