package Board.controller;

import Board.dto.Board;
import Board.service.BoardService;
import comment.dto.Comment;
import comment.service.CommentService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "board", value = "/board")
public class BoardController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id =Integer.parseInt( request.getParameter("id"));
        BoardService service = new BoardService();
        service.addViews(id);

        Board board = service.board(id);
        CommentService commentService = new CommentService();
        List<Comment> comments = commentService.comments(id);
        RequestDispatcher rd = request.getRequestDispatcher("/board/board.jsp");
        //board 정보를 불러오고
        request.setAttribute("board", board);
        request.setAttribute("comments", comments);
        rd.forward(request, response);
        // board.jsp 로 forwarding
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
