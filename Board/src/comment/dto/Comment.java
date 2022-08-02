package comment.dto;

public class Comment {
    private int id;
    private String content;
    private int boardId;
    private String writer;

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public Comment(){

    }

    public Comment(int id, String content, int boardId,String writer) {
        this.id = id;
        this.content = content;
        this.boardId = boardId;
        this.writer = writer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getBoardId() {
        return boardId;
    }

    public void setBoardId(int boardId) {
        this.boardId = boardId;
    }
}
