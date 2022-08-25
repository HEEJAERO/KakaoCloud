package com.mycom.board.dto;


import com.mycom.board.entity.BoardEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor // 인자가 없는 생성자 자동생성
public class BoardDTO {
    private Long id;
    private String writer;
    private String title;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public BoardEntity toEntity(){ // builder 패턴 -> entity 에 @Builder 를 명시해주고 다음과 같이
        // DTO 를 Entity 로 명시
        return BoardEntity.builder()
                .writer(writer)
                .title(title)
                .content(content)
                .build();
    }

    @Builder
    public BoardDTO(Long id, String writer, String title, String content, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}
