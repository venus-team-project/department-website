package com.example.teachers_db_demo.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Entity
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="books")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name="author", nullable = false)
  private String author;

  @Column(name = "data", nullable = false)
  @Temporal(TemporalType.DATE)
  private Date data;

  @Column(name = "category", nullable = false)
  private String category;

  @Column(name = "title", nullable = false)
  private String title;

  @Column(name = "annotation", nullable = false)
  private String annotation;

  @Lob
  private byte[] pdf;
/*
  @Id
  @GeneratedValue
  @Column(name = "id")
  private Long id;

  @Column(name = "title")
  private String title;

  @Column(name = "annotation")
  private String annotation;

 */
}
