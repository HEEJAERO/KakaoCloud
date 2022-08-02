package member.controller;

import Board.dto.Board;
import Board.service.BoardService;
import member.dto.Member;
import member.service.MemberService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "login", value = "/login")
public class LoginController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher rd = request.getRequestDispatcher("/member/login.html");
        rd.forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("userId");
        String pw = request.getParameter("userPW");
        Member member = new Member();
        member.setUserid(id);
        member.setPassword(pw);
        MemberService service = new MemberService();
        Member login = service.login(member);
        System.out.println(login);
        if (login != null) {
            // 로그인 성공 로직
            // 성공 시 userId 정보를 세션에 저장하고
            HttpSession session = request.getSession();
            session.setAttribute("userId", login.getUserid());
            // boardList 를 불러오자
            response.sendRedirect("/boardlist");
        }
    }
}
