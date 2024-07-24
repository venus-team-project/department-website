-- liquibase formatted sql

-- changeset liquibase:2
create TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL
);

-- changeset liquibase:3
create TABLE categories (
    id INT  AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL
);

-- changeset liquibase:4
create TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author_id INT,
    data DATE NOT NULL,
    category_id INT,
    title VARCHAR(150) NOT NULL,
    annotation VARCHAR(255) NOT NULL,
    pdf_url VARCHAR(255),
    CONSTRAINT book_author_fk FOREIGN KEY (author_id) REFERENCES authors(id),
    CONSTRAINT book_category_fk FOREIGN KEY (category_id) REFERENCES categories(id)
);
