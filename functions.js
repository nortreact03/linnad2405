function makeGreeting1(name) {
    return  'Hello ' + name
}

const makeGreeting2 = (name) => {
    return  'Hello ' + name
} 

const makeGreeting3 = name => 'Hello ' + name

console.log(makeGreeting1('Nipitiri'))
console.log(makeGreeting2('SomeOne'))
console.log(makeGreeting3('John Doe'))

const greet1 = () => {
    console.log(makeGreeting3('Jane Doe'))
}

greet1()

setTimeout(greet1, 3000)

setTimeout(() => {console.log(makeGreeting3('John Doe'))}, 3000)

let colors = [
    'green',
    'yellow',
    'red',
    'black',
    'orange'
]

colors.forEach((color) => {console.log(`My favorite color is ${color}`)})

let elements = colors.map((color => {
    return `<div>${color}</div>`
}))

console.log(elements)

