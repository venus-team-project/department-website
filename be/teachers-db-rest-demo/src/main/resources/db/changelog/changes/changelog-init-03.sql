-- liquibase formatted sql
-- changeset liquibase:6
ALTER TABLE books ADD COLUMN pdf BLOB;