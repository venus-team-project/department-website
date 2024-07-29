package com.example.teachers_db_demo.service;

import com.example.teachers_db_demo.model.Book;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface BookService {

  List<Book> list();

  Optional<Book> findBook(Long id);
  List<Book> findBooksByTitle(String title);

  List<Book> findBooksByCategory(String category);

  List<Book> findBooksByAnnotation(String annotaition);

  Book saveBook(Book book);

  Book updateBook(Long id, Book book);

  void deleteBook(Long id);

  void savePdf(Long id, MultipartFile file) throws IOException;
}
