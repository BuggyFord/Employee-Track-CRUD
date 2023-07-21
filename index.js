// const inquirer = require('inquirer')
// const db = require('./db/connection');

import inquirer from 'inquirer';
import db from './db/connection.js';


function userChoice() {

    inquirer.prompt(
        {
            type: 'list',
            name: 'decide',
            message: 'What would you like to do?',
            choices: ['View All Employees',
                'Add Employees',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Departments'
                ]
        }
    ).then(answer => {
        console.log("Answer Object: ", answer); // --> 
    
        // Based on the USer choice --> we need  to direct our applications logic
        // --> we want to run a CHOICE (if/else, switch)
        if(answer.decide === 'View All Departments') {
            // we call/invoke the viewDepartments() function
            viewDepartments();
        
        } else if(answer.decide === 'Add Departments') {
            addDepartment();
        }else if (answer.decide === 'View All Roles') {
            // we call/invoke the viewDepartments() function
            viewRoles();

        } else if (answer.decide === 'Add Role'){
            addRole();
        }else if(answer.decide === 'Add Employees'){
            addEmployee();
        }else if (answer.decide === 'View All Employees'){
            viewAllEmployees();
        }
    
    })
    .catch(error => {
        throw error;
    });
}


function viewDepartments() {
    // make a query to our DATABASE (persisting data)
    // db.query(<THE SQL COMMAND TO OUR DB>, callback())
    db.query("SELECT id, name FROM department;", (error, data) => {
        if(error) {
            console.log("Error: ", error);
            throw error;
        }

        // IF NO ERROR --> we have DATA!
        // console.log("Departments: ", data);
        console.table(data);
        userChoice();
    });

}

function addDepartment() {

    // if we need addition USER INPUT 
    inquirer.prompt(
        {
            type: 'input',
            name: 'department_name',
            message: 'What would you like to call the new department?'
        }).then(data => {

            // db.query(<THE SQL COMMAND TO OUR DB>, callback())
            db.query(`INSERT INTO department (name) VALUES ( '${data.department_name}' );`, (error, data) => {
                if(error) {
                    console.log("Error: ", error);
                    throw error;
                }
        
                // IF NO ERROR --> we have DATA!
                // console.log("Departments: ", data);
                console.table(data);
            });
            userChoice();
        }).catch()
        
    // make a query to our DATABASE (persisting data)

}

function viewRoles() {
    // make a query to our DATABASE (persisting data)
    // db.query(<THE SQL COMMAND TO OUR DB>, callback())
    db.query("SELECT * FROM role;", (error, data) => {
        if(error) {
            console.log("Error: ", error);
            throw error;
        }
        
        // IF NO ERROR --> we have DATA!
        // console.log("Departments: ", data);
        console.table(data);
        // after we see our data request --> we query the USER for a new choice;
        userChoice();
    });

}
function addRole() {

    // if we need addition USER INPUT 
    inquirer.prompt([
        {
            type: 'input',
            name: 'role_name',
            message: 'What would you like to call the new role?'
        },
        {
            type:'input',
            name:'salary',
            message:'How much does this role make a year?'

        },
        {
            type:'list',
            name:'department_id',
            message:'what is the department id?',
            choices:[1,2,3,4,5,6,7,8],

        }

    ]).then(data => {

            // db.query(<THE SQL COMMAND TO OUR DB>, callback())
            db.query(`INSERT INTO role (title, salary, department_id) VALUES ( '${data.role_name}', '${data.salary}', '${data.department_id}');`, (error, data) => {
                if(error) {
                    console.log("Error: ", error);
                    throw error;
                }
        
                // IF NO ERROR --> we have DATA!
                // console.log("Roles: ", data);
                console.table(data);
            });
            userChoice();
        }).catch()

}     
function addEmployee() {

    //we need addition USER INPUT 
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee?'
        },
        {
            type:'input',
            name:'last_name',
            message:'What is the last name of the employee?'

        },
        {
            type:'input',
            name:'manager',
            message:'Is this employee a manager?',
        },
        {
            input:'list',
            name:'department',
            message:'What department will this employee work in?',
            choices:['Sales', 
            'Engineering',
            'Legal',
            'Management',
            'Technicians',
            'Human Resources',
            'Janitorial',
            'Finance']
    },
        {
            input:'input',
            name:'role',
            message:'What role will this employee have?'
        }

    ]).then(data => {

            // db.query(<THE SQL COMMAND TO OUR DB>, callback())
            db.query(`INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ( '${data.first_name}', '${data.last_name}', '${data.manager_id}', '${data.role_id}');`, (error, data) => {
                if(error) {
                    console.log("Error: ", error);
                    throw error;
                }
        
                // IF NO ERROR --> we have DATA!
                // console.log("Roles: ", data);
                console.table(data);
            });
            userChoice();
        }).catch()

}     

function viewAllEmployees() {
    // make a query to our DATABASE (persisting data)
    // db.query(<THE SQL COMMAND TO OUR DB>, callback())
    db.query("SELECT * FROM employee;", (error, data) => {
        if(error) {
            console.log("Error: ", error);
            throw error;
        }
        
        // IF NO ERROR --> we have DATA!
        // console.log("Departments: ", data);
        console.table(data);
        // after we see our data request --> we query the USER for a new choice;
        userChoice();
    });

}


// -- makeing requrest to our DATABASE -- //
// DB connection --> QUERY method (SQL COMMAND, callback eeror first function)

// WE want to query for ALL employees 
// db.query()


// We have to KICK off our APP
userChoice();