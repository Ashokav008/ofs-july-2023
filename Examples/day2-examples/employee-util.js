import fs from 'fs';
// readEmployee takes the filename and returns the array 
export function readEmployee(filename) {
    // if file exists what to do or else what do
    if(fs.existsSync(filename)) {
        let employeeBin = fs.readFileSync(filename);
        let employeeJSON = employeeBin.toString();
        let employeeJS = JSON.parse(employeeJSON);
        return employeeJS;
    } else {
        let employeeEmptyArray = []; //this is a Javascript object you can't write this to file
        let employeeEmptyArrayString = JSON.stringify(employeeEmptyArray);
        fs.writeFileSync(filename, employeeEmptyArrayString);
        return readEmployee(filename);
    }
}
// writeEmployee takes the filename & employee object to write the file
export function writeEmployee(filename, employee) {
    // get the array from the file by calling readEmployee(filename)
    let employeeArray = readEmployee(filename);
    // add the employee to the array using push
    employeeArray.push(employee);
    let employeeString = JSON.stringify(employeeArray);
    fs.writeFileSync(filename, employeeString);
}