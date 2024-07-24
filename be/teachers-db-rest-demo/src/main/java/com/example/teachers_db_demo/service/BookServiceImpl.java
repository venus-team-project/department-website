package com.example.teachers_db_demo.service;


import com.example.teachers_db_demo.model.Book;
import com.example.teachers_db_demo.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    public List<Book> list() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findBook(Long id) {
        return bookRepository.findById(id);
    }
    @Override
    public void savePdf(Long id, MultipartFile file) throws IOException {
        Book book = bookRepository.findById(id).orElseThrow(RuntimeException::new);

        // Зберігаємо файл на сервері
        String filename = file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir, filename);
        Files.write(filePath, file.getBytes());

        // Зберігаємо URL посилання на файл в базу даних
        book.setPdfUrl(filePath.toString());
        bookRepository.save(book);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
}
