/*package com.example.teachers_db_demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

@Configuration
public class DatabaseCleanupConfig {

    @Autowired
    private DataSource dataSource;

    @PostConstruct
    public void dropLiquibaseTables() {
        try (Connection connection = dataSource.getConnection();
             Statement statement = connection.createStatement()) {
            statement.execute("DROP TABLE IF EXISTS DATABASECHANGELOG");
            statement.execute("DROP TABLE IF EXISTS DATABASECHANGELOGLOCK");
            statement.execute("DROP TABLE IF EXISTS AUTHORS");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
*/