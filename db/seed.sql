INSERT INTO department (name)
VALUES ('Sales'), ('Legal'), ('Finance'), ('Support');

INSERT INTO
    role (title, salary, department_id)
VALUES ('Sales Lead', '100,000', 1), ('Sales Person', '70,000', 1), ('Lawyer', '150,000', 2), ('Paralegal', '60,000', 2) (
        'Account Manager',
        '125,000',
        3
    ), ('Accountant', '110,000', 3), ('Fraud CSR', '35,000', 4) (
        'Customer Service R',
        '35,000',
        4
    );

INSERT INTO
    employee (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ('Andre', 'Taylor', 3, null), ('Rachel', 'Zane', 4, 1), ('Jessica','Pearson', 1, null), ('Louis','Litt', 2, 3) (
        'Harvey',
        'Spector',
        '5',
        null
    ), ('Donna','Paulsen' '6', null), ('Dana','Scott' '7', null) (
        'Katrina',
        'Bennett',
        '8',
        null
    );