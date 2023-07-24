// Browser or Node.js can run your javascript file
// Run: node filename.js i.e., node basics.js

console.log('Hello Node'); // in node.js console it prints
// declaring variables in Javascript - var(avoid), let & const

for(var i = 0; i < 5; i++) {
    let x = 35; // x is declared inside for loop, but visible outside for loop
    const y = 20;
    y = 35;
}
// if you use var you can access it outside the scope also
console.log('Outside for loop: '+x);