package com.example.teachers_db_demo.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String category_name;

}
