package lecture0718.exam01;


import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;

//Server Process
public class Exam01_DateServer {

    public static void main(String[] args) {

        try {
            ServerSocket serverSocket = new ServerSocket(5678);
            System.out.println("Date Server 기동 - 포트번호(5678)");
            Socket socket = serverSocket.accept(); // blocking method  => 여기서 기다림 -> 클라이언트에서 요청이 오면
            // 통신가능한 socket을 만들어서 리턴해줌

            // 여기까지 오면 접속이 성공
            // 소켓을 이용해서 output stream 을 만들어야함
            PrintWriter pw = new PrintWriter(socket.getOutputStream());
            // 현재날짜를 구함
            Date date = new Date();
            pw.println(date.toLocaleString());

        } catch (IOException e) {

        }

    }
}
