package com.mycom.board.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "board") // 테이블명 지정
@ToString
public class BoardEntity extends TimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length=10,nullable = false)
    private String writer;

    @Column(length=100,nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Builder
    public BoardEntity(Long id, String writer, String title, String content) {
        this.id = id;
        this.writer = writer;
        this.title = title;
        this.content = content;
    }

}
