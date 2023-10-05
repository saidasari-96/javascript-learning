// let a = 3;
// function x () {
//   console.log(a);
// }
// x();


// program to remove duplicate value from an array

function getUnique(arr){

  let uniqueArr = [];

  // loop through array
  for(let i of arr) {
      if(uniqueArr.indexOf(i) === -1) {
          uniqueArr.push(i);
      }
  }
arr.forEach((ele) => {
  if(uniqueArr.indexOf(ele) === -1) {
    uniqueArr.push(ele)
  }
})
  return uniqueArr;
}

const array = ["Banana", "Orange", "Apple", "Mango", "Apple"];

// // calling the function
// // passing array argument
// console.log(getUnique(array));

// function z() {
//   var b = 6
//   function x() {
//     var a = 5;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// console.log(z());

// Akshay saini closure + setInterval interview question

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000)
//     }
//     close(i);
//   }
// }
// x();


// crazy interview

// function outer() {
//   let a = 8, x= 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();

// function eventAttacher() {
//   var count = 0;
//   document.getElementById("clickMe").addEventListener("click", function() {
//     console.log("button clicked", ++count)
//   })
// }

// eventAttacher();

// var b = function xyz() {
//   console.log(xyz)
// }

// b();

// var arr_1 = ['1', '6', '3', '15', '22', '8'];

// var arr_2 = arr_1.map(Number);

// // var sum = arr_1.reduce((acc, curr) => acc + curr, 0);
// // console.log(sum);


// var sum = (arr_1) => {
//   return arr_1.reduce((sum, num) => sum + num, 0);
// }

// console.log(sum(arr_2));



// function buzz(X) {
//    if(X > 5) {
//     return X;
//    }
//    return buzz(X + 1)
// }
// console.log(buzz(1));


// // tricky reduce

// const users = [
//   {firstName:"sai", lastName:"kumar", age: 27},
//   {firstName:"sai1", lastName:"kumar1", age: 28},
//   {firstName:"sai2", lastName:"kumar2", age: 28},
//   {firstName:"sai3", lastName:"kumar3", age: 31}
// ]

// // {28:2, 27:1, 29:1}

// const output = users.reduce((acc, curr) => {
//     if(acc[curr.age]) {
//       acc[curr.age] = ++acc[curr.age]
//     } else {
//       acc[curr.age] = 1
//     }
//     return acc
// }, {});
// console.log(output);

// const output2 = users.filter((x) => x.age < 30).map((ele) => ele.firstName);

// console.log(output2);



function Fruit(color, taste, seeds) {
  this.color1 = color;
  this.taste2 = taste;
  this.seeds3 = seeds;
}

// Create an object
const fruit1 = new Fruit('Yellow', 'Sweet', 1);

// Display the result
console.log(fruit1.color1);

//
var x = 1;
function y() {
    console.log(x);
    var x = 2;
}
y();