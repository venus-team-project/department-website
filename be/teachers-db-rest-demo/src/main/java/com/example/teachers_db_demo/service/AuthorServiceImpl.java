package com.example.teachers_db_demo.service;

import com.example.teachers_db_demo.model.Author;
import com.example.teachers_db_demo.repository.AuthorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    @Override
    public List<Author> list() {
        log.info("Fetching all authors");
        return authorRepository.findAll();
    }

    @Override
    public Optional<Author> findAuthor(Long id) {
        log.info("Fetching author with id {}", id);
        return authorRepository.findById(id);
    }
}
