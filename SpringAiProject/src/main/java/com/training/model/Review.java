package com.training.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Review {
    private int id;
    private String author;
    private String content;
    private String sentiment;
    private LocalDateTime createdAt;
}
