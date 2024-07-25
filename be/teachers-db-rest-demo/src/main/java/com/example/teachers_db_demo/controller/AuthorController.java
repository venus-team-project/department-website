package com.example.teachers_db_demo.controller;

import com.example.teachers_db_demo.model.Author;
import com.example.teachers_db_demo.service.AuthorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/db/authors")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Validated
public class AuthorController {

    @Autowired
    private AuthorService service;

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<Author> getAuthors() {
        log.info("Fetching all authors");
        return service.list();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Author getAuthorById(@PathVariable("id") Long id) {
        log.info("Fetching author with id {}", id);
        return service.findAuthor(id).orElseThrow(() -> new RuntimeException("Author not found with id " + id));
    }
}
