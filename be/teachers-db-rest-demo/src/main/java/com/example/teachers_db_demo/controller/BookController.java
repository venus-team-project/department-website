package com.example.teachers_db_demo.controller;

import com.example.teachers_db_demo.model.Book;
import com.example.teachers_db_demo.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/db/books")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Validated
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<Book> getBooks() {
        return service.list();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Book getBookById(@PathVariable("id") Long id) {
        return service.findBook(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping("/{id}/upload")
    @ResponseStatus(HttpStatus.OK)
    public void uploadPdf(@PathVariable("id") Long id, @RequestParam("file") MultipartFile file) throws IOException {
        service.savePdf(id, file);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable("id") Long id) {
        service.deleteBook(id);
    }
}
