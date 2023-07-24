// rest operator demo
function test(a, ...b) {
    // b acts like an array
    console.log(`a = ${a}`);
    b.forEach((i, v) => console.log(`b = ${i}`))
}
test(20); // a = 20, b = []
test(50, 40); // a = 50, b = [40]
test(8, 9, 1, 5); // a = 8, b = [9, 1, 5]
let items = [25, 70, 80, 90];
// spread operator
test(...items); // a = 25, b = [70, 80, 90]