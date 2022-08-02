package comment.service;

import comment.dao.CommentDAO;
import comment.dto.Comment;

import java.util.ArrayList;
import java.util.List;

public class CommentService {
    public List<Comment> comments(int boardId) {
        List<Comment> comments = null;
        try {
            CommentDAO dao = new CommentDAO();
            comments = dao.selectAll(boardId);
        } catch (Exception e) {
            System.out.println(e);
        }
        return comments;
    }

    public void addComment(int boardId, String writer, String comment) {
        try {
            CommentDAO dao = new CommentDAO();
            System.out.println(comment);
            dao.insert(boardId, writer, comment);
            System.out.println(comment);

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void deleteComment(int commentId) {
        try {
            CommentDAO dao = new CommentDAO();
            dao.delete(commentId);

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
