// function add (a, b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));


// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

function greetPerson (name, age){
  console.log('Hi ' + name + ', you are ' + age);
}

greetPerson(...person);
greetPerson(...personTwo);

var names = ['Mike', 'Ben'];
var final = [...names, 'Vitali'];
// Hi Andrew

final.forEach(function (name) {
  console.log('Hi ' + name);
});
