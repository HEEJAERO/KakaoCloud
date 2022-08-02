package member.dao;

import member.dto.Member;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class MemberDAO {
    private DataSource ds;
    public MemberDAO() throws Exception{
        Context init = new InitialContext();
        ds = (DataSource) init.lookup("java:comp/env/jdbc/MYSQLDB");

    }
    public Member select(String userId,String userPassword) throws Exception{ // 로그인 시 select
        Connection con = ds.getConnection();
        System.out.println("connection 획득 성공");

        String sql = "SELECT * FROM user WHERE user_id = ? AND user_pw = ?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, userId);
        pstmt.setString(2, userPassword);
        ResultSet rs = pstmt.executeQuery();
        if (rs.next()) {
            Member member = new Member(rs.getString("user_name"), rs.getString("user_id"), rs.getString("user_pw"));
            pstmt.close();
            con.close();
            return member;
        }
        // 실패시 null 리턴
        pstmt.close();
        con.close();
        return null;
    }

    public Member insert(String username, String userId, String userPassword) throws Exception { // 회원가입 시 insert

        Connection con = ds.getConnection();
        System.out.println("connection 획득 성공");
        String sql = "INSERT INTO user(user_name,user_id,user_pw) VALUES(?,?,?) ";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, username);
        pstmt.setString(2, userId);
        pstmt.setString(3, userPassword);
        int i = pstmt.executeUpdate();
        if (i == 1) {
            pstmt.close();
            con.close();
            return new Member(username, userId, userPassword);
        }
        pstmt.close();
        con.close();
        return null;
    }
}
