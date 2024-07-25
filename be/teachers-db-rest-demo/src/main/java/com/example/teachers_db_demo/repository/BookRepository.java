package com.example.teachers_db_demo.repository;

import com.example.teachers_db_demo.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
