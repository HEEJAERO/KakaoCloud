package com.mycom.board.controller;

import com.mycom.board.dto.BoardDTO;
import com.mycom.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("board")
@Slf4j
@RequiredArgsConstructor // final (혹은 @NotNull) 이 붙은 인자를 가지고 해당 클래스의 생성자를 만들어줌
// @Autowired - setter injection - controller 객체 생성 후 setter 를 통해 값을 넣어주는것(중간에 다른값이 껴들수 있는 부작용)
// private BoardService boardService = setBoardService();
// Constructor injection - 생성할때 인자로 받아 객체가 서비스를 가지고 있다.
/* public BoardController(BoardSerivce boardService){
        this.boardService = boardService;
   }
*/
public class BoardController {
    private final BoardService boardService;

    @GetMapping("/post")
    public String write(Model model) {
        model.addAttribute("title", "[게시판 글쓰기]");
        return "board/write";
    }

    @PostMapping("/post")
    public String write(BoardDTO dto) {
        log.info("dto = " + dto);
        Long aLong = boardService.savePost(dto);
        return "redirect:/board/list";
    }

    @GetMapping("/list")
    public String list(Model model) {
        List<BoardDTO> list = boardService.listBoard();
        log.info("list = " + list);
        model.addAttribute("list", list);
        model.addAttribute("title", "[게시판 리스트]");
        return "board/list";
    }

    @GetMapping("/post/{no}")
    public String read(@PathVariable("no") Long no, Model model) {
        log.info("no = " + no);
        BoardDTO dto = boardService.readPost(no);
        log.info("dto" + dto);
        model.addAttribute("title", "[게시판 상세]");
        model.addAttribute("b", dto);
        return "board/read";
    }

    @GetMapping("/post/edit/{no}")
    public String edit(@PathVariable("no") Long no, Model model) {
        BoardDTO dto = boardService.readPost(no);
        model.addAttribute("title", "[게시판 수정]");
        model.addAttribute("b", dto);
        return "board/update";
    }
}
