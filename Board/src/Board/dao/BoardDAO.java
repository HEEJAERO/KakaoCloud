package Board.dao;

import Board.dto.Board;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO {
    private DataSource ds;
    public BoardDAO() throws Exception{
        Context init = new InitialContext();
        ds = (DataSource) init.lookup("java:comp/env/jdbc/MYSQLDB");

    }
    public List<Board> selectAll() throws Exception{ // 게시글 리스트 불러오기
        Connection con = ds.getConnection();
        String sql = "SELECT * FROM board";
        PreparedStatement pstmt = con.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery();
        List<Board> list = new ArrayList<>();
        while (rs.next()) {
            Board board = new Board(rs.getInt("board_id"),
                    rs.getString("board_title"),
                    rs.getString("board_writer"),
                    rs.getString("board_content"),
                    rs.getTimestamp("board_createDate").toLocalDateTime(),
                    rs.getInt("board_likes"),
                    rs.getInt("board_views"),
                    rs.getInt("board_commentNum"));
            list.add(board);
        }
        pstmt.close();
        con.close();
        return list;
    }
    public Board selectOne(int id) throws Exception{ // 상세 게시글 정보
        Connection con = ds.getConnection();
        String sql = "SELECT * FROM board WHERE board_id = ?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setInt(1, id);
        ResultSet rs = pstmt.executeQuery();
        Board board = null;
        if(rs.next()) {
            board = new Board(rs.getInt("board_id"),
                    rs.getString("board_title"),
                    rs.getString("board_writer"),
                    rs.getString("board_content"),
                    rs.getTimestamp("board_createDate").toLocalDateTime(),
                    rs.getInt("board_likes"),
                    rs.getInt("board_views"),
                    rs.getInt("board_commentNum"));
        }

        pstmt.close();
        con.close();
        return board;
    }
    public void delete(int boardId) throws Exception{
        Connection con = ds.getConnection();
        String sql = "DELETE FROM board WHERE board_id = ?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setInt(1, boardId);
        int i = pstmt.executeUpdate();
        // 삭제 시 리턴값이 필요한가?
        pstmt.close();
        con.close();

    }

    public void insert(String writer,String title, String content) throws Exception {
        Connection con = ds.getConnection();
        String sql = "INSERT INTO board(board_title,board_writer,board_content,board_createDate)" +
                " VALUES (?,?,?,?)";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, title);
        pstmt.setString(2, writer);
        pstmt.setString(3, content);
        pstmt.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));
        int i = pstmt.executeUpdate();
        pstmt.close();
        con.close();
    }

    public void updateView(int id) throws Exception {
        Connection con = ds.getConnection();
        String sql = "UPDATE board SET board_views = board_views+1 WHERE board_id = ? ";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setInt(1, id);
        int i = pstmt.executeUpdate();
        pstmt.close();
        con.close();
    }

    public void updateLike(int id) throws Exception {
        Connection con = ds.getConnection();
        String sql = "UPDATE board SET board_likes = board_likes+1 WHERE board_id = ? ";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setInt(1, id);
        int i = pstmt.executeUpdate();
        pstmt.close();
        con.close();

    }

    public void updateContent(int id, String title, String content) throws Exception {
        Connection con = ds.getConnection();
        String sql = "UPDATE board SET board_title = ?,board_content = ? WHERE board_id = ? ";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, title);
        pstmt.setString(2,content);
        pstmt.setInt(3, id);
        int i = pstmt.executeUpdate();
        pstmt.close();
        con.close();
    }
}
