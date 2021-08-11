// work with primitive type 
let a = 5
let b = a
console.log('primitive before any updates')
console.log('a value is ',a)
console.log('b value is ',b)

console.log('primitive after updates')
b = 7
console.log('a value is ',a)
console.log('b value is ',b)

// working with reference type
// array 
let x = [1,2,3]
let y = x 
console.log('array reference before any updates')
console.log('x value is ',x)
console.log('y value is ',y)
y[0] = 0 
console.log('array reference after updates')
console.log('x value is ',x)
console.log('y value is ',y)
// same with object 
let player1 = {name:'player1',age:18}
let player2 = player1
console.log('object reference before any updates')
console.log('player1 value is ',player1)
console.log('player2 value is ',player2)
player2.name = 'player2'
console.log('object reference after updates')
console.log('player1 value is ',player1)
console.log('player2 value is ',player2)

console.log('the end')

// run the code to see the difference
