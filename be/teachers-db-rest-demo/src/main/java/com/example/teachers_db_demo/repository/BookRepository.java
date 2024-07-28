package com.example.teachers_db_demo.repository;


import com.example.teachers_db_demo.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByTitleContainingIgnoreCase(String title);
    List<Book> findByCategoryContainingIgnoreCase(String category);
    List<Book> findByAnnotationContainingIgnoreCase(String annotation);
    //Репозиторій вже містить метод save, який успадковується від JpaRepository, тому додаткові зміни тут не потрібні.

}

