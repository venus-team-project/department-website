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

    public List<Book> findBooksByTitle(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }

    public List<Book> findBooksByCategory(String category) {
        return bookRepository.findByCategoryContainingIgnoreCase(category);
    }

    public List<Book> findBooksByAnnotation(String annotation) {
        return bookRepository.findByAnnotationContainingIgnoreCase(annotation);
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);

    }

    public Book updateBook(Long id, Book book) {
        return bookRepository.findById(id).map(existingBook -> {
            existingBook.setAuthor(book.getAuthor());
            existingBook.setData(book.getData());
            existingBook.setCategory(book.getCategory());
            existingBook.setTitle(book.getTitle());
            existingBook.setAnnotation(book.getAnnotation());
            return bookRepository.save(existingBook);
        }).orElseThrow(() -> new RuntimeException("Book not found"));
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

}