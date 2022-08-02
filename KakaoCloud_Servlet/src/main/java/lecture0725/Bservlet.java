package lecture0725;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/servletb")
public class Bservlet extends HttpServlet {
    public Bservlet() {
        super();
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 문제 1 해결 - 서블릿끼리의 데이터 공유 - ServletContext 라는 공유객체를 이용하여 해결
        // 1. 입력
        // 2. 로직처리
        ServletContext context = getServletContext();
        String product = (String) context.getAttribute("product");
        // 3.출력
        resp.setContentType("text/html; charset =UTF-8");
        PrintWriter out = new PrintWriter(resp.getOutputStream());
        out.println("얻어온 결과는 :" + product);
        out.close();
    }
}
