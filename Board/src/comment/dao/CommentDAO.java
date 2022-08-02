package comment.dao;

import comment.dto.Comment;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class CommentDAO {
    private DataSource ds;
    public CommentDAO() throws Exception{
        Context init = new InitialContext();
        ds = (DataSource) init.lookup("java:comp/env/jdbc/MYSQLDB");
    }

    public List<Comment> selectAll(int boardId) throws Exception {
        // comments 불러오기 => 따로 분리해야하는가?
        Connection con = ds.getConnection();
        String sql = "SELECT * FROM comment WHERE board_id = ?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setInt(1, boardId);
        ResultSet rs = pstmt.executeQuery();
        List<Comment> list = new ArrayList<>();
        while (rs.next()) {
            System.out.println(rs.getInt(1));
            Comment comment = new Comment(rs.getInt("comment_id"),
                    rs.getString("comment_content"),
                    rs.getInt("board_id"),
                    rs.getString("comment_writer"));
            list.add(comment);
        }

        pstmt.close();
        con.close();
        return list;

    }

    public void insert(int boardId, String writer, String comment) throws Exception {
        Connection con = ds.getConnection();
        String sql = "INSERT INTO comment(comment_content,comment_writer,board_id) VALUES (?,?,?)";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, comment);
        pstmt.setString(2, writer);
        pstmt.setInt(3, boardId);
        int i = pstmt.executeUpdate();

        pstmt.close();
        con.close();

    }

    public void delete(int commentId) throws Exception {
        Connection con = ds.getConnection();
        String sql = "DELETE FROM comment WHERE comment_id = ?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setInt(1, commentId);
        int i = pstmt.executeUpdate();

        pstmt.close();
        con.close();
    }
}
