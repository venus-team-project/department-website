package com.example.teachers_db_demo.service;

import com.example.teachers_db_demo.model.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {

  List<Book> list();

  Optional<Book> findBook(Long id);
  void savePdf(Long id, MultipartFile file) throws IOException;
  void deleteBook(Long id); // Додаємо метод deleteBook
}
