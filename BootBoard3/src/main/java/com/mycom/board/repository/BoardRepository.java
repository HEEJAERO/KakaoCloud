package com.mycom.board.repository;

import com.mycom.board.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardRepository extends JpaRepository<BoardEntity, Long> {
    // <우리가 사용할 엔티티, Primary key>
}
