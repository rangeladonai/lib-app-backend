CREATE DATABASE IF NOT EXISTS libapp;
USE libapp;
CREATE TABLE IF NOT EXISTS book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    responsible_phone VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    born_date DATE NOT NULL,
    responsible_name VARCHAR(255) NOT NULL,
    cep VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL,
    complement VARCHAR(255) NOT NULL,
    neighborhood VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS loan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    student_id INT NOT NULL,
    loan_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    return_date DATETIME,
    FOREIGN KEY (book_id) REFERENCES book(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

INSERT INTO book (title, author) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald'),
('To Kill a Mockingbird', 'Harper Lee'),
('1984', 'George Orwell');

INSERT INTO student (responsible_phone, name, born_date, responsible_name, cep, address, number, complement, neighborhood, city, state) VALUES
('1234567890', 'John Doe', '2000-01-01', 'Jane Doe', '12345-678', 'Main Street', '123', 'Apt 1', 'Downtown', 'Cityville', 'Stateville'),
('0987654321', 'Alice Smith', '1999-05-15', 'Bob Smith', '98765-432', 'Second Street', '456', '', 'Uptown', 'Townsville', 'Regionville');
INSERT INTO student (responsible_phone, name, born_date, responsible_name, cep, address, number, complement, neighborhood, city, state) VALUES
('5551234567', 'Charlie Brown', '2001-03-10', 'Lucy Brown', '54321-987', 'Third Street', '789', 'Apt 2', 'Midtown', 'Villageville', 'Provinceville');

INSERT INTO loan (book_id, student_id, return_date, loan_date) VALUES
(1, 1, '2025-07-01 10:00:00', '2024-06-01 10:00:00'),
(2, 2, '2025-07-15 15:30:00', '2024-06-15 15:30:00'),
(3, 3, '2025-07-20 15:30:00', '2024-06-20 12:00:00');