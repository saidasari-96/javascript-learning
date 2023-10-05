// function add() {
//     var counter = 0;
//     var secondCounter=0;

//     function plus() {
//         counter += 1;
//         return counter;
//     }
//plus();
//     return plus;
// }
//var temp = add();

var temp = (function (ar) {
  console.log(ar);
  console.log("inside ifi");

  var counter = 0;
  var secondCounter = 0;
  function plus() {
    counter += 1;
    return counter;
  }
  //plus();
  return plus;
})("Hello");

console.log("After ifi");

//ifi or //self-invoking function expression..

// call the parent once to get the nested func ref..
//use the nested func ref for accessing the clousre..

console.log(temp());
console.log(temp());
console.log(temp());

// let person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// let person2=person1;
// person1.firstName="H";

//================
// var x=10;
// var x=20;

//====================

// const a=10; // declaration + assignment => initialization
// a=5; //error

//====================

// let a=10; // declaration + assignment => initialization
// a=5; //assignment
// a=6; //assignment

// ! Conditions and loops
// ! Object iterations
// ! String iterations
// ! array iterations
// !
