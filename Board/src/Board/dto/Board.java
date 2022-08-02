package Board.dto;

import javax.sql.DataSource;
import java.time.LocalDateTime;
import java.util.Date;

public class Board {
    private int board_id;
    private String board_title;
    private String board_writer;
    private String board_content;
    private LocalDateTime board_createDate;
    private int board_likes;
    private int board_views;
    private int board_commentNum;
    public Board(){

    }
    public Board(int board_id, String board_title, String board_writer, String board_content, LocalDateTime board_createDate) {
        this.board_id = board_id;
        this.board_title = board_title;
        this.board_writer = board_writer;
        this.board_content = board_content;
        this.board_createDate = board_createDate;
        this.board_likes = 0;
        this.board_views = 0;
        this.board_commentNum = 0;
    }

    public Board(int board_id, String board_title, String board_writer, String board_content, LocalDateTime board_createDate, int board_likes, int board_views, int board_commentNum) {
        this.board_id = board_id;
        this.board_title = board_title;
        this.board_writer = board_writer;
        this.board_content = board_content;
        this.board_createDate = board_createDate;
        this.board_likes = board_likes;
        this.board_views = board_views;
        this.board_commentNum = board_commentNum;
    }

    public int getBoard_id() {
        return board_id;
    }

    public void setBoard_id(int board_id) {
        this.board_id = board_id;
    }

    public String getBoard_title() {
        return board_title;
    }

    public void setBoard_title(String board_title) {
        this.board_title = board_title;
    }

    public String getBoard_writer() {
        return board_writer;
    }

    public void setBoard_writer(String board_writer) {
        this.board_writer = board_writer;
    }

    public String getBoard_content() {
        return board_content;
    }

    public void setBoard_content(String board_content) {
        this.board_content = board_content;
    }

    public LocalDateTime getBoard_createDate() {
        return board_createDate;
    }

    public void setBoard_createDate(LocalDateTime board_createDate) {
        this.board_createDate = board_createDate;
    }

    public int getBoard_likes() {
        return board_likes;
    }

    public void setBoard_likes(int board_likes) {
        this.board_likes = board_likes;
    }

    public int getBoard_views() {
        return board_views;
    }

    public void setBoard_views(int board_views) {
        this.board_views = board_views;
    }

    public int getBoard_commentNum() {
        return board_commentNum;
    }

    public void setBoard_commentNum(int board_commentNum) {
        this.board_commentNum = board_commentNum;
    }
}
