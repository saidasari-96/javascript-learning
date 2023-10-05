// *1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let todayDateTime = new Date();
let hours = todayDateTime.getHours();
let meridian = hours >= 12 ? "PM" : "AM";
let minutes = todayDateTime.getMinutes();
let seconds = todayDateTime.getSeconds();
let formattedHours = hours % 12 || 12;
console.log(`Today is : ${daysArray[todayDateTime.getDay()]}`);
console.log(
  `Current time is : ${formattedHours} ${meridian} : ${minutes} : ${seconds} `
);

//*2. Write a JavaScript program to print the current window contents
function printTheWindow() {
  window.print();
}

// *3. Write a JavaScript program to get the current date.
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let dd = todayDateTime.getDate();
let mm = todayDateTime.getMonth() + 1;
let yyyy = todayDateTime.getFullYear();
if (mm < 10) {
  mm = `0${mm}`;
} else if (dd < 10) {
  dd = `0${dd}`;
}

console.log(mm + "-" + dd + "-" + yyyy);
console.log(mm + "/" + dd + "/" + yyyy);
console.log(dd + "-" + mm + "-" + yyyy);
console.log(dd + "/" + mm + "/" + yyyy);

//* 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const side1 = 5;
const side2 = 6;
const side3 = 7;
let perimeter = (side1 + side2 + side3) / 2;
var areaOfTriangle = Math.sqrt(
  perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
);
console.log(areaOfTriangle);

//*5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// function animate_string(id) {
//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0]; // assuming no other children
//   var text = textNode.data;

//   setInterval(function () {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }

var word = "w3resource";
var reword = "";
// w3resource
// ecrouser3w
// reword = "" + word[index];
// reword = e + c;
// reword = ec + r;
// 9<=0 false
// 8<=0 false
for (var i = word.length - 1; i >= 0; i--) {
  //! get error word.length i<=word.length
  reword = reword + word[i];
}
console.log(reword);

// *6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapYear(year) {
  return console.log(year % 4 === 0 ? "leapYear" : "not leap year");
}
leapYear(2016);

// *7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) {
  let a = new Date(year, 0, 1);
  if (a.getDay() === 0) {
    console.log(year + "this year is sunday");
  }
}

// * 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
// const randomNumber = Math.floor(Math.random() * 10);  // ! Doubt on math.random
// console.log(randomNumber);
// const userNum = prompt("Enter the number");
// if (userNum == randomNumber) {
//   console.log("matched");
// } else {
//   console.log("Not matched");
// }

// *9. Write a JavaScript program to calculate the days left before Christmas.

var todayDate = new Date();

var Christmas = new Date(todayDate.getFullYear(), 11, 25);
if (todayDate.getMonth() == 11 && todayDate.getDate() < 25) {
  Christmas.setFullYear(Christmas.getFullYear() + 1);
} else {
  var oneDay = 1000 * 60 * 60 * 24;
  console.log(
    Math.ceil((Christmas.getTime() - todayDate.getTime()) / oneDay) + // ! Doubt on logic
      "days left untill christmas"
  );
}

// *10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

// function multiply() {
//   var num1 = document.getElementById("firstNumber").value;
//   var num2 = document.getElementById("secondNumber").value;
//   console.log(num1 * num2);
// }

// function divide() {
//   var num1 = document.getElementById("firstNumber").value;
//   var num2 = document.getElementById("secondNumber").value;
//   return (document.getElementById("result").innerHTML = num1 / num2);
// }

//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function tempInCelsius(temp) {
  var CelsiusToFar = temp - 9 / 5 + 32;
  console.log(`${temp}\xB0C is ${CelsiusToFar}`);
}
function temperatureInFar(temp) {
  var farToCelsius = ((temp - 32) * 5) / 9;
  console.log(`${temp}\xB0C is ${farToCelsius}`);
}

tempInCelsius(60);
temperatureInFar(45);

// *12. Write a JavaScript program to get the website URL (loading page).

// console.log(document.URL);

//13. Write a JavaScript exercise to create a variable using a user-defined name.

const myVariable = "sai";
const xyz = 6;
this[myVariable] = xyz; //! Doubt on logic
console.log(this[myVariable]);

// *14. Write a JavaScript exercise to get the filename extension.

var fileName1 = "javascript.js";
var fileName2 = "script.php";
console.log(fileName1.split(".").pop()); // ! Doubt on split
console.log(fileName2.split(".").pop());

// *15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

class diff {
  constructor(value) {
    this.broaderThirteen = () => {
      if (value <= 13) {
        console.log(13 - value);
      } else {
        console.log((value - 13) * 2);
      }
    };
    this.greaterNineteen = () => {
      if (value > 19) {
        console.log(value - 19) * 3;
      } else {
        console.log(19 - value);
      }
    };
  }
}
var difference = new diff(20);
difference.broaderThirteen();
difference.greaterNineteen();

// *16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sum(num1, num2) {
  if (num1 === num2) {
    console.log((num1 + num2) * 3);
  } else {
    console.log(num1 + num2);
  }
}
sum(10, 10);
sum(12, 6);

// *18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function pair(p1, p2) {
  var sum = p1 + p2;
  if (p1 === 50 || p2 === 50) {
    console.log(true);
  } else if (sum === 50) {
    console.log(true);
  } else {
    console.log(false);
  }
}
pair(50, 25);

// *19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function withIn(num) {
  switch (true) {
    case num > 20 || num < 100:
      console.log("number is within 20 of 100"); //!  ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
      break;
    case num < 400:
      console.log("number is within  400");
      break;
    default:
      console.log("No number Matched");
  }
}

withIn(300);

// * 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function posNeg(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
posNeg(-1, -2);

//*21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function stringCheck(str) {
  if (str === null || str === undefined || str.substring(0, 2) == "Py") {
    console.log(str);
  } else {
    console.log("Py" + str);
  }
}

stringCheck(null);

// * 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function remove_character(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}
console.log(remove_character("w3resource", 5));

// * 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function firstLastStr(str) {
  if (str.length >= 1) {
    var newStr = str.slice(1, str.length - 1);
    var formatedString = str[str.length - 1] + newStr + str[0];
    console.log(formatedString);
  }
}
firstLastStr("");

// * 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function firstLastSameStr(str) {
  var formatedString = str[0] + str + str[0];
  console.log(formatedString);
}
firstLastSameStr("Swift");

// * 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function test(num) {
  if ((Math.sign(num) == 1 && num % 3 == 0) || num % 7 == 0) {
    console.log("given number is multiple with 3 or 7");
  }
}
test(12);

//* 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function threeCut(str) {
  // var newStr = str.substr(-3);
  var newStr = str.slice(str.length - 3);
  var formatted = newStr + str + newStr;
  console.log(formatted);
}
threeCut("swift");
