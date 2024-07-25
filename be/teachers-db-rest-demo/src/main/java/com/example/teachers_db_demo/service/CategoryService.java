package com.example.teachers_db_demo.service;

import com.example.teachers_db_demo.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<Category> list();

    Optional<Category> findCategory(Long id);
}

