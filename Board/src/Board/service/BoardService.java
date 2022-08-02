package Board.service;

import Board.dao.BoardDAO;
import Board.dto.Board;
import comment.dao.CommentDAO;
import comment.dto.Comment;

import java.util.List;

public class BoardService {
    public List<Board> boardList(){ // 게시글 리스트 가져오기
        List<Board> boards = null;
        try {
            BoardDAO dao = new BoardDAO();
            boards = dao.selectAll();
        } catch (Exception e) {
            System.out.println(e);
        }
        return boards;
    }

    public Board board(int id) { // 상세 게시글 정보

        Board board = null;
        try {
            BoardDAO dao = new BoardDAO();
            board = dao.selectOne(id);

        } catch (Exception e) {
            System.out.println(e);
        }
        return board;
    }

    public void deleteBoard(int boardId) {
        //Board board = null;
        try{
            BoardDAO dao = new BoardDAO();
            dao.delete(boardId);
        }catch(Exception e){
            System.out.println(e);
        }
    }

    public void addLikes(int id) {
        try {
            BoardDAO dao = new BoardDAO();
            dao.updateLike(id);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void write(String writer,String title,String content) { // 게시글 작성
        try {
            BoardDAO dao = new BoardDAO();
            dao.insert(writer,title,content);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void addViews(int id) {// 조회수 업데이트

        try {
            BoardDAO dao = new BoardDAO();
            dao.updateView(id);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void update(int id, String title, String content) {
        try {
            BoardDAO dao = new BoardDAO();
            dao.updateContent(id, title, content);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
