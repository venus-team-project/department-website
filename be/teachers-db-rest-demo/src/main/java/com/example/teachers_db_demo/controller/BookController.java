package com.example.teachers_db_demo.controller;

import com.example.teachers_db_demo.model.Book;
import com.example.teachers_db_demo.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

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

}
