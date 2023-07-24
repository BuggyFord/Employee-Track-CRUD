DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;


CREATE TABLE department (
    id INT  AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT  AUTO_INCREMENT,
    title VARCHAR(32) NOT NULL,
    salary DECIMAL(10,0) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
    FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT  AUTO_INCREMENT,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    manager_id INT,
    role_id INT NOT NULL,
    PRIMARY KEY(id) 
    FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
    FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
);