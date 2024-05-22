
const greet = [
    'John Smith',
    (name) => "Hello, " + name
]

const name1 = greet[0];
const makeGreeting1 = greet[1];

const [name2, makeGreeting2] = greet

console.log(makeGreeting1(name1));
console.log(makeGreeting2(name2));