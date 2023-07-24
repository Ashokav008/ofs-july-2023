import fs from 'fs';
import read from 'readline-sync'; // helps to take input from the keyboard
//fs module has readFileSync() and writeFileSync functions to read & write
// writeFileSync(filename, content, appendStatus)
// writeFileSync uses only string to write the content
let data = read.question('Enter some text: ');
fs.writeFileSync('helloworld.txt', `${data}\n`, {flag: 'a+'});
console.log('DONE...')
// readFileSync returns the binary data that needs to be converted to string to see its content
let data2 = fs.readFileSync('helloworld.txt');
let stringData = data2.toString();
console.log(`String Data = ${stringData}`);