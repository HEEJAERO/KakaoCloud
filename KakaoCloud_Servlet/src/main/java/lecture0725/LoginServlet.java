package lecture0725;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    String jdbcURL = "jdbc:mysql://localhost:3306/sqldb?" +
            "characterEncoding=UTF-8&serverTimeZone=UTC&useSSL=false";
    Connection con = null;
    public LoginServlet() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (Exception e) {

        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1. 입력받고
        // 주의! 입력을 받을 때 사용되는 stream 의 encoding이 ISO-8859-1
        // 만약 한글 데이터를 전달받기 위해서는 처리가 필요
        // (1) 만약 GET 방식인 경우 - Tomcat 의 입력스트림의 encoding 을 변경
        //req.setCharacterEncoding("UTF-8");
        String email = req.getParameter("userEmail");
        String pw = req.getParameter("userPassword");
        System.out.println(email + " " + pw);
        String jdbcURL = "jdbc:mysql://localhost:3306/sqldb?" +
                "characterEncoding=UTF-8&serverTimeZone=UTC&useSSL=false";
        Connection con = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        boolean loginStatus = false;
        try {
            // 2.DBMS 와 연결
            con = DriverManager.getConnection(jdbcURL, "root", "jae576792@");
            System.out.println("데이터 베이스 연결 성공!!");


            String sql = "SELECT * FROM tmpuser where email=? and password = ?";
            pstmt = con.prepareStatement(sql);
            pstmt.setString(1, email);
            pstmt.setString(2, pw);
            rs = pstmt.executeQuery(); // 이미 전처리된 SQL 문장을 가지고 있기 때문에 parameter 를 안넣어도 됨
            if (rs.next()) {
                loginStatus =true;
            }
        }catch(Exception e){

        }finally {
            // close 진행
        }
        resp.setContentType("text/html; charset=UTF-8");
        PrintWriter out = new PrintWriter(resp.getOutputStream());
        if(loginStatus){
            out.println("환영합니다");
        }else{
            out.println("로그인에 실패 했습니다.");
        }

        out.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // post 인 경우에는 여기에서 UTF-8 로 인코딩..
        req.setCharacterEncoding("UTF-8");
    }
}
