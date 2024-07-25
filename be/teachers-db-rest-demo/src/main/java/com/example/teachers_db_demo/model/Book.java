package com.example.teachers_db_demo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "books")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "author_id", nullable = false)
  private Author author;

  @Column(name = "data", nullable = false)
  @Temporal(TemporalType.DATE)
  private Date data;

  @ManyToOne
  @JoinColumn(name = "category_id", nullable = false)
  private Category category;

  @Column(name = "title", nullable = false, length = 150)
  private String title;

  @Column(name = "annotation", nullable = false, length = 255)
  private String annotation;

  @Column(name = "pdf_url")
  private String pdfUrl;

  // Getters and setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Author getAuthor() {
    return author;
  }

  public void setAuthor(Author author) {
    this.author = author;
  }

  public Date getData() {
    return data;
  }

  public void setData(Date data) {
    this.data = data;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getAnnotation() {
    return annotation;
  }

  public void setAnnotation(String annotation) {
    this.annotation = annotation;
  }

  public String getPdfUrl() {
    return pdfUrl;
  }

  public void setPdfUrl(String pdfUrl) {
    this.pdfUrl = pdfUrl;
  }
}