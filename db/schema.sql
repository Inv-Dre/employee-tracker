DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
  id INT PRIMARY KEY,
  NAME VARCHAR(30) NOT NULL,
 
);

DROP TABLE IF EXISTS role;
CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30) ,
  salary DECIMAL,
  department_id INT,

);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT
);

