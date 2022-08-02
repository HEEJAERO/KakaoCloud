package lecture0725;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet("/hello")
public class TestServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // 클라이언트에게 특정 문자열을 출력해야 되기 떄문에 OutputStream 이 필요
        // header 먼저 작성하고 stream 생성
        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = new PrintWriter(response.getOutputStream()); // 응답이기 때문에 response 를 통해 stream 생성
        out.println("<html><head><body><h1>하이하이</h1></body></head></html>");
        out.close(); // stream 을 닫은 시점에 servlet container -> web server -> client 에게 전송
    }

    public void destroy() {
    }
}