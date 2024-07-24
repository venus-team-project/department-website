package com.example.teachers_db_demo.service;

import com.example.teachers_db_demo.model.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    List<Author> list();
    Optional<Author> findAuthor(Long id);
}
