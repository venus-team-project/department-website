-- liquibase formatted sql
-- changeset liquibase:1
create TABLE books (
    id INT,
    title VARCHAR(25),
    annotation VARCHAR(255),
    CONSTRAINT book_pkey PRIMARY KEY (id)
);