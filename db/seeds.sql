INSERT INTO department (name) 
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Paul", "Gallos", 1, NULL),
       ("Kathy", "Gallos", 2, NULL),
       ("George", "Doe", 3, 1),
       ("Charlie", "Burns", 4, 1),
       ("Heather", "Brown", 5, 1),
       ("Carter", "Michaud", 6, 2),
       ("Terry", "Crews", 7, 2),
       ("Donovan", "Jones", 8, 2);