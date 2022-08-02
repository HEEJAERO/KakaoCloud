package Board.controller;

import Board.dto.Board;
import Board.service.BoardService;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name= "boardEdit" , value = "/boardedit")
public class BoardEditController extends HttpServlet { // edit 창으로 넘어갈떄 해야할 로직
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        BoardService service = new BoardService();
        Board board = service.board(id);
        String content = board.getBoard_content();
        String writer = board.getBoard_writer();
        String title = board.getBoard_title();

        RequestDispatcher rd = request.getRequestDispatcher("/board/edit.jsp");
        request.setAttribute("id", id);
        request.setAttribute("writer", writer);
        request.setAttribute("title",title);
        request.setAttribute("content", content);
        rd.forward(request, response);
    }
}
