// create this list of players and store them in variable name players
/*
name  age   rating 
a     23      5
b     22      3
c     22      3
*/


// your code 
const players = [
  {
    name: 'a', age: 23, rating: 5
  },
  {
    name: 'b', age: 22, rating: 3
  },
  {
    name: 'c', age: 22, rating: 3
  }
]
// write single line code to print the 2nd player name in the list ( without using dot notation .name )
console.log(players[1]['name'])
