import read from 'readline-sync';
import { readEmployee, writeEmployee } from './employee-util.js';
// write a program that can perform read and write until you quit
let option = 0;
do {
    option = read.questionInt('1: Store, 2: Read -1: Exit: ');
    switch(option) {
        case 1: 
        // ask user to enter id, name & salary and store in the employee.json
        let empId = read.questionInt("Enter employee id: ");
        let empName = read.question("Enter employee name: ");
        let empSalary = read.questionFloat("Enter employee salary: ");
        let emp = {id: empId, name: empName, salary: empSalary};
        writeEmployee("employees.json", emp);
        break;
        case 2: 
        let employees = readEmployee("employees.json");
        console.log(employees);
        break;
    }
} while(option != -1);
console.log('Program exited');