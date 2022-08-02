package Board.controller;

import Board.dto.Board;
import Board.service.BoardService;
import comment.dto.Comment;
import comment.service.CommentService;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "boardlist", value = "/boardlist")
public class BoardListController extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        BoardService boardService = new BoardService();
        List<Board> boards = boardService.boardList();
        RequestDispatcher rd = request.getRequestDispatcher("/board/boardList.jsp");
        request.setAttribute("list", boards);

        rd.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
