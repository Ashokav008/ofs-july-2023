// using callback functions in the forEach & map
let items = [20, 30, 10, 50, 40];
// the callback of forEach takes 2 arguments
items.forEach(function(v, i){
    console.log(`V = ${v}, I = ${i}`)
});
// map is used to generate a new array from the iterated array
let mappedItems = items.map(function(v, i) {
    return v - (v * 0.1);
});
console.log(`Items = ${items}`)
console.log(`Mapped Items = ${mappedItems}`);
// arrow functions can limit certains lines in callback and return keyword is not required
items.forEach((v, i) => console.log(`Arrow fn v = ${v}, i = ${i}`))
let mappedItems2 = items.map((v, i) => v - (v * 0.2));
console.log(`Mapped Items2 = ${mappedItems2}`);
// using arrow function display array of user objects 
// let users = [{id:1, name:"Raj", address: {state:ABC, city:XYZ}}, .... ]