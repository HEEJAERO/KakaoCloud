package com.mycom.board.entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // BoardEntity 에서 해당 엔티티의 값을 상속받아서 사용하기 위해서 해당 어노테이션을 이용
// 모든 테이블에 공통으로 들어가는 값은(ex. 시간) 이와같이 상속을 하여 사용하면 편함
@EntityListeners(AuditingEntityListener.class) // 변경을 감지
public class TimeEntity {
    @CreatedDate
    @Column(updatable = false) // 한번 만들어지면 수정안함
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime modifiedDate;
}
