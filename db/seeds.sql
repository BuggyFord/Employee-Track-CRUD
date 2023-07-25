INSERT INTO department(name)
VALUES
("Sales"), 
("Engineering"),
("Legal"),
("Management"),
("Technicians"),
("Human Resources"),
("Janitorial"),
("Finance");

INSERT INTO role(title, salary ,department_id)
VALUES
("Sales Person", 75000, 1),
("JR Software Developer", 72000, 2),
("SR Software Developer", 13500, 2),
("Attorney at law", 14000, 3),
("Legal Assistant", 55000, 3),
("Private I", 66000, 3),
("Entry level Management", 80000, 4),
("Middle Management", 90000, 4),
("Entry level Tech", 45000, 5),
("Mid tier Tech", 60000, 5),
("Head Tech", 75000, 5),
("HR base", 62000, 6),
("HR Head", 72000, 6),
("Entry Custodian", 38000, 7),
("Head Custodian", 44000, 7),
("Accounting", 66000, 8),
("Aquisition", 82000, 8);

INSERT INTO employee(first_name, last_name, manager_id, role_id)
VALUES
("Daves", "Nothereman", 0,7),
("Rebeccas", "Foonsy", 0,7),
("Mateo", "Sandoval", 0,4),
("Jerry", "Perry", 1, 5),
("Halie", "Breeze", 1, 3),
("Victor", "Rye", 0, 5
);
