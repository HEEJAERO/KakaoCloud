package member.controller;

import member.dto.Member;
import member.service.MemberService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "join", value = "/join")
public class JoinController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String id = request.getParameter("userId");
        String pw = request.getParameter("userPW");
        String name = request.getParameter("userName");
        System.out.println(id + " " + name + " " + pw);
        Member member = new Member(name, id, pw);
        MemberService service = new MemberService();
        Member join = service.join(member);
        if (join != null) {
            // 가입성공시 로그인? => 혹은 바로 서비스 이용화면으로
            //RequestDispatcher rd = request.getRequestDispatcher("/boardlist"); //이걸쓸때는 context root 명시 x
            // req 에 우리가 얻어온 member에 대한 정보를 붙여 같이 보내줌
            System.out.println("여기까지 들어옴");

            HttpSession session = request.getSession();
            session.setAttribute("userId", join.getUserid());
            //rd.forward(request, response);
            response.sendRedirect("/boardlist");
        } else {
            // 실패시 오류메세지 출력 후 다시 회원가입창
            response.sendRedirect("/member/join.html");
        }
    }
}
