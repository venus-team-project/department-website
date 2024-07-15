package com.example.teachers_db_demo.service;


import com.example.teachers_db_demo.model.Book;
import com.example.teachers_db_demo.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    public List<Book> list() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findBook(Long id) {
        return bookRepository.findById(id);
    }
}
