package com.mycom.board.service;

import com.mycom.board.dto.BoardDTO;
import com.mycom.board.entity.BoardEntity;
import com.mycom.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardService {
    private final BoardRepository boardRepository;

    @Transactional
    public Long savePost(BoardDTO dto) {
        return boardRepository.save(dto.toEntity()).getId(); // 저장 후 id
    }
    public List<BoardDTO> listBoard() {
        List<BoardEntity> entities = boardRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        // 이런식으로 정렬 기준을 지정해 줄 수 있다.
        log.info("entities = " + entities);
        List<BoardDTO> list = new ArrayList<>();
        for (BoardEntity e : entities) {
            BoardDTO dto = BoardDTO.builder()
                    .id(e.getId())
                    .title(e.getTitle())
                    .content(e.getContent())
                    .writer(e.getWriter())
                    .createdDate(e.getCreatedDate())
                    .modifiedDate(e.getModifiedDate())
                    .build();
            list.add(dto);
        }
        return list;

    }

    public BoardDTO readPost(Long id) {
        Optional<BoardEntity> boardEntityWrapper = boardRepository.findById(id); // null 을 방지하는 optional
        BoardEntity e = boardEntityWrapper.get();
        BoardDTO dto = BoardDTO.builder()  //DTO 를 빌드해주는것 - dto 를 빌드하려면 dto.builder()를 호출
                .id(e.getId())
                .title(e.getTitle())
                .content(e.getContent())
                .writer(e.getWriter())
                .createdDate(e.getCreatedDate())
                .modifiedDate(e.getModifiedDate())
                .build();
        return dto;
    }
}
