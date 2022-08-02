package lecture0725;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/mysession")
public class SeesionTestServlet extends HttpServlet {
    // 세션에 데이터를 저장
    public SeesionTestServlet() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1. 입력
        String id = req.getParameter("myID");
        // 2. 로직
        // 해당 client 에게 session 을 할당하거나 할당된 session 을 찾아옴
        HttpSession session = req.getSession();
        session.setAttribute("id", id);
    }
}
