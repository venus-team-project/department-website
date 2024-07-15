package com.example.teachers_db_demo.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
  @GeneratedValue
  @Column(name = "id")
  private Long id;

  @Column(name = "title")
  private String title;

  @Column(name = "annotation")
  private String annotation;
}
