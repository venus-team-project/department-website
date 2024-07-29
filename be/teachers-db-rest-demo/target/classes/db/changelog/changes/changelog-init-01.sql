-- liquibase formatted sql
-- changeset liquibase:1
create TABLE books (
    id INT AUTO_INCREMENT,
    author VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    category VARCHAR(50) NOT NULL,
    title VARCHAR(150) NOT NULL,
    annotation VARCHAR(4000) NOT NULL,
    CONSTRAINT book_pkey PRIMARY KEY (id)
);