package member.dto;

public class Member {
    private String userid;
    private String password;
    private String name;
    public Member(){

    }

    @Override
    public String toString() {
        return this.getName() + this.getUserid() + this.getPassword();
    }

    public Member(String name, String userid, String password) {
        this.userid = userid;
        this.password = password;
        this.name = name;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
