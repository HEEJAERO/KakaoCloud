package lecture0725;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/usesession")
public class UseSessionServlet extends HttpServlet {
    // 세션을 찾아와서 사용하는것

    public UseSessionServlet() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1. 입력
        // 2. 로직
        HttpSession session = req.getSession();
        String result = (String)session.getAttribute("id");

        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = new PrintWriter(resp.getOutputStream());
        out.println("얻어낸 세션은 " + result);
        out.close();
    }
}
