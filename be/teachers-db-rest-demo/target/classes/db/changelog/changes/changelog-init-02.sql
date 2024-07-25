-- liquibase formatted sql
-- changeset liquibase:7
INSERT INTO authors VALUES(default,'Іван', 'Ткаченко');
INSERT INTO authors VALUES(default,'Марія', 'Мельник');
INSERT INTO authors VALUES(default,'Євген', 'Кравченко');
INSERT INTO authors VALUES(default,'Андрій', 'Литвин');

-- changeset liquibase:8
INSERT INTO categories VALUES(default,'Бази даних');
INSERT INTO categories VALUES(default,'Штучний інтелект');
INSERT INTO categories VALUES(default,'Тестування');
INSERT INTO categories VALUES(default,'Комп`ютерні мережі');

-- changeset liquibase:9
INSERT INTO books (id, author_id, data, category_id, title, annotation, pdf_url) VALUES
(default, 1, '2024-07-01', 2, 'Використання штучного інтелекту', 'штучний інтелект', null);
INSERT INTO books (id, author_id, data, category_id, title, annotation, pdf_url) VALUES
(default, 1, '2024-07-03', 1, 'Структура бази даних', 'дані, бази даних', null);
INSERT INTO books (id, author_id, data, category_id, title, annotation, pdf_url) VALUES
(default, 3, '2024-07-05', 3, 'Автоматизоване тестування', 'тест-кейс', null);
INSERT INTO books (id, author_id, data, category_id, title, annotation, pdf_url) VALUES
(default, 4, '2024-07-08', 4, 'Мережеві протоколи', 'мережа, протокол, рівні протоколів', null);
