package com.example.teachers_db_demo.controller;

import com.example.teachers_db_demo.model.Category;
import com.example.teachers_db_demo.service.CategoryService;
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
@RequestMapping("/api/db/categories")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Validated
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<Category> getCategories() {
        return service.list();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Category getCategoryById(@PathVariable("id") Long id) {
        return service.findCategory(id).orElseThrow(RuntimeException::new);
    }

}
