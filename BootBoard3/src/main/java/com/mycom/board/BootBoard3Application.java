package com.mycom.board;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // 이것을 사용해 시간이 들어감
public class BootBoard3Application {

    public static void main(String[] args) {
        SpringApplication.run(BootBoard3Application.class, args);
    }

}
