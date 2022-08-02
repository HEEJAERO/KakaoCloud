package lecture0725;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/servleta")
public class Aservlet extends HttpServlet {
    public Aservlet() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1. 입력
        // 2. 로직 -> servlet Context 를 사용 -> 얻어와보자( 공유객체에 대한 reference 를 획득)
        ServletContext context = getServletContext();
        // ServletContext 에 특정정보를 저장
        context.setAttribute("product", "냉장고");
        // 3. 출력
    }
}
