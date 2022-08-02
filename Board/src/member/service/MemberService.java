package member.service;

import member.dao.MemberDAO;
import member.dto.Member;

public class MemberService {

    public Member login(Member member) {
        try{
            MemberDAO dao = new MemberDAO();
            member = dao.select(member.getUserid(), member.getPassword());
        }catch(Exception e){
            System.out.println(e);
        }
        return member;
    }

    public Member join(Member member) {
        try{
            MemberDAO dao = new MemberDAO();
            member = dao.insert(member.getName(), member.getUserid(), member.getPassword());
        }catch(Exception e){
            System.out.println(e);
        }
        return member;

    }
}
