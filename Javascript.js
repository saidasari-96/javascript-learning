// TODOHow javascript works & execution context -- No coding
// TODOHow javascript code is executed & call stack  -- No code
// TODOHoisting in javascript

// *   var x = 7;
// *   function getName() {
// *     console.log("Saikumar");
// *   }
// *   getName();
// *   console.log(x);
// *   ----------------------------------
// *   getName();
// *   console.log(x);
// *   var x = 7;
// *   function getName() {
// *     console.log("Saikumar");
// *   }
// *   ----------------------------------
// *   getName();
// *   console.log(x);
// *   var x = 7;
// *   var getName = function () {
// *     console.log("Saikumar");   we will get error typeerror getName is not a function since js engine treats as a variable
// *   }
// *   ----------------------------------
// *   getName();
// *   console.log(x);
// *   var x = 7;
// *   var getName = () => {
// *     console.log("Saikumar");   we will get error getName is not a function since js engine treats as a variable it assigns the special value undefined
// *   }

// TODO •	How functions work in javascript & variable environment

// *   var x =1;
// *   a();
// *   b();
// *   console.log(x);

// *   function a() {
// *     var x =10;
// *     console.log(x);
// *   }
// *   function b() {
// *     var x =100;
// *     console.log(x);
// *   }

// TODO •	Shortest program in javascript

// *   Empty file is a shortest program
// *   javascript engine creates the window object or this object .This points to global object in case of browser window object is created and Node.js something else created
// *   this === window -- true
// *   Everthing we see in top level is a global space or global memory space for example

// *   var x = 1;  // *   Global space and this variable and function is attached to the global object and we can access through the window or this
// *   function x() { // *   function also global space
// *     var x = 10; // *    this x is not in global space
// *   }
// *   console.log(window.x) we can access through window or this
// *   console.log(this.x)
// *   console.log(x) we can access through like it points to global object

// TODO •	Undefined vs not defined in javascript

// *   var a;
// *   console.log(a);
// *   a = 10;
// *   if(a === undefined) {
// *     console.log("a is undefined");
// *   } else {
// *     console.log("a is not undefined");
// *   }

// *   javascript is a loosly typed language means it doesn't attaches its variable to any specific data type suppose if i assign string to any variable later i can assign boolen also but other languages not like this
// *   a = undefined assigning like this is not a good practice

// TODO •The scope chain & scope & Lexical environment

// *   function a() {
// *   var b = 10;
// *     c();
// *     function c() {
// *       console.log(b); //c function creates the execution context and its local memory along with its parent lexical environment(reference of the parent)
// *     }
// *   }
// *   a();

//•	Let and const in js Temporal dead zone
// *   console.log(b);
// *   console.log(a); whenever we access a variable in temporal dead zone it gives an ReferenceError we can access it once the value is intialize to them
// *   let a = 10; Incase of let and const these are allocated to memory but these variables are stored in different memory space than global
// *   var b = 3;  the b variable is attached to the global object allocated global memory
// *   -----------------------
// *   console.log(x); we will get ReferenceError
// *   var b = 10
// *   -----------------------
// *   let a = 10;
// *   let a = 100; it will through the SyntaxError a has already declared
// *   -----------------------
// *   var b = 10;
// *   var b = 100; it won't through any error
// *   -----------------------
// *   const b;
// *   b = 100 throws a error it meant declare and intialize happen in the same line
// *   -----------------------
// *   const b = 100;
// *   b = 1000;  it throws the type error "Assigment to constant variable"

// TODO •	Block scope & Shadowing in js

// *   {
// *     var a = 9;
// *     let b = 10;
// *     const c = 11;
// *     console.log(a);
// *     console.log(b);
// *     console.log(c);
// *   }
// *    console.log(a);
// *    console.log(b); // *   b and c gets an error since its in block scope not in global scope
// *    console.log(c);

//shadowing

// *   let b= 100;
// *   {
// *     var a = 12;
// *     let b = 10;
// *     const c = 11;
// *     console.log(a);
// *     console.log(b);
// *     console.log(c);
// *   }
// *    console.log(b);

// *   Illegal shadowing

// *   let a =20;
// *   {
// *     var a = 20; // *   it will throw an error identifier a has been declared syntax error
// *   }

// TODO •	Closures in js

// *   function x() {
// *     var a = 10;
// *     function y() {
// *       console.log(a);  // *   A function along with its lexical scope bundled together forms a closure
// *     }
// *     y();
// *   }
// *   x();

// *   function x() {
// *     var a = 10;
// *     function y() {
// *       console.log(a);
// *     }
// *     return y;
// *   }
// *   var z = x();
// *   console.log(z);

// *   ----- 100 of lines

// *   z(); // *   functions(y function) when they are returned from another function(x function) it(y function) still maintain their lexical scope and remember where they actaully present here y function still remember the a variable or reference not value

// TODO •	SetTimeout + closures in js

// *   function x() {
// *     var i = 10;
// *     setTimeout(() => {
// *       console.log(i);
// *     }, 1000);
// *     console.log("saikumar");
// *   }
// *   function x() {
// *     for(var i=1; i<=5; i++) {
// *       setTimeout(() => {
// *         console.log(i);        // *   the result is saikumar and 6 times prints the 6 why because javascript doesn't wait for something so it will print the saikumar meantime  setTimeout stores the function in a different place and attached a timer to it also the reference of i , when the timer is finished it rejoins the call stack and executed. once it done latest value of because it remembers i reference 6 is printed .
// *       }, i*1000);
// *     }
// *     console.log("saikumar");
// *   }
// *   x();

// *   Using let since it is a block scope creates every time a new variable and prints 1,2,3,4,5

// *   function x() {
// *     for (let i = 1; i <= 5; i++) {
// *       setTimeout(() => {
// *         console.log(i);
// *       }, i * 1000);
// *     }
// *     console.log("saikumar");
// *   }

// *   x();

// *   without using let

// *   function x() {
// *     for (var i = 1; i <= 5; i++) {
// *       function close(x) {  // *   Closure helps here
// *         setTimeout(() => {
// *           console.log(x);
// *         }, x * 1000);
// *       }
// *       close(i);
// *     }
// *     console.log("saikumar");
// *   }

// *   x();

// TODO •	Crazy js interview questions in closures

// *   function outer() {
// *     var a =10;
// *     function inner() {
// *       console.log(a);
// *     }
// *     return inner;
// *   }
// *   outer(); // *   if we execute this it returns the inners function
// *   var close = outer();
// *   close(); // *   short form of current and above line and 229 outer()(); // *   if we execute this it executes inner function
// *   function outest() {
// *     var b = 10
// *     function outer(c) {
// *       var a = 10;
// *       function inner() {
// *         console.log(a,b,c);
// *       }
// *       return inner;
// *     }
// *     return outer
// *   }

// *   var close = outest()("helloworld")
// *   close();

// TODO Data hiding and encapsulation using closures

// *   function counter() {
// *     var count = 0;       // *   Here count is hidden noOne can access and  change the value
// *     return function incretmentCounter () {
// *       count++;
// *       console.log(count);
// *     }
// *   }

// *   var counter1 = counter();
// *   counter1();
// *   counter1();
// *   var counter2 = counter();
// *   counter2(); // *   this is completely new call altogether again program will start with new count with value 1

// *   Above data hiding examples is not scalable if we can add decrement function we can't add so that we can use constructor function

// *   function Counter() {
// *     var count = 0;
// *     this.incrementCounter = () => {
// *       count++;
// *       console.log(count);
// *     };
// *     this.decrementCounter = () => {
// *       count--;
// *       console.log(count);
// *     };
// *   }

// *   var counter1 = new Counter(); // *   we have to add new keyword to create the constructor function
// *   counter1.incrementCounter();
// *   counter1.decrementCounter();

// TODO •	First class functions & anonymous functions and what is pure function

// TODO   Function statement & function declaration
// *   function a() {
// *     console.log(x);
// *   }
// *   a();

// TODO   Function expression
// *   var b = function (){
// *     console.log(x);
// *   }
// *   b();

// TODO   Anonymous function

// *   var c = function () { // *   these functions doesn't have their own identity in function statement or declaration we cannot use the anonymous function we have to assign a varible then only it won't throw an error
// *   }

// TODO   Named function expression
// *   var b = function xyz() {
// *     console.log(x);
// *   }
// *   b();
// *   xyz(); // *   if we call it like this we will get a reference error xyz is not defined since it is not in global scope we can access it like below

// *   var b = function xyz() {
// *     console.log(xyz);
// *   };
// *   b();

// TODO   Difference between arguments and parameters

// *   var b = function (xyz, a) { // *   Passing parameters these are the local variables to the function
// *     console.log(xyz, b);
// *   };
// *   b("Helloworld", b); // *   passing arguments

// TODO   First class functions

// *   function x() {

// *   }
// *   function y(a) {
// *     console.log(a);
// *   }
// *   function z(a) {
// *     return a;
// *   }
// *   The ability of functions to be used as values and can passed as an argument to another functions and it can be returned from the  function this ability is known as first class functions in javascript
// *   y(x); // *   passing another function inside a function
// *   z(x); // *    also we can return the function

// TODO  what are pure and impure functions & side effects

// *   Pure function should always gives the same output whenever we call the function with the same input if the function shouldn't have any dependency outside of the function (global variable).These functions are predictable and it shouldn't have any side effects below example

// *   function greeting(name) {
// *     console.log(`Hi ${name}`);
// *   }
// *   greeting("sai");

//An impure function has a dependency on something outside of function

// *   let message = "Good Morning";
// *   function greeting(name) {
// *     var message = "Good evening" // *   Still it not a pure function because it changes global variable and pure function cannot  manipulate the DOM even if we use outer varible which is not part of the function and it has dependency of message variable since it can be change it later so it is a impure function(This is a side effects)
// *     console.log("Hello") // *   still it not a pure function beacuse console is a externa api of javascript Pure function can't even use console
// *     console.log(`Hi ${message} ${name}`);
// *   }
// *   greeting("sai");

// *   Converting impure to pure function

// *   let x =10;
// *   function impure(y) {
// *     console.log(x+y)
// *   }
// *   impure(20);

// *   function pure(x,y) {
// *     console.log(x + y); // *   Instead of taking as a global we can pass it as a arguments
// *   }
// *   pure(20,10);

// *   Note : In real time using pure functions technical possible but application with pure functions will not do much it has some http calls, input and output operations and dom manipulations

// TODO Falsey values
// *   Null, undefined, false, 0, "", NAN

// TODO•	Callback functions and event listeners

// *   what is a callback function in javascript

// *   setTimeout(function () {
// *     console.log("timer");
// *   }, 5000);

// *   function x(y) {
// *     console.log("x");
// *     y();
// *   }
// *   x(function y() {
// *     console.log("y");
// *   });

// *   Here everything is executed in the callstack if any operation blocks the callstack that is known as blocking the main thread suppose if function x has a heavy operation it takes time to complete that function by the time javascript won't be execute any other function in single call stack that's why we should never block the main thread we should always try to use async operations for things which takes time

// *   Event listeners

// *   document.getElementById("clickMe").addEventListener("click", function xyz() {
// *     console.log("button clicked");
// *   });       // *   when javascript execute this line it pickups the element and it will add the event listener when event occurs this callback function is execute. CB is store in somewhere when button clicks it will come into the callstack

// *   Closures along with event listeners

// *   let count = 0;
// *   document.getElementById("clickMe").addEventListener("click", function xyz() {
// *     console.log("button clicked", ++count); // *   Using a global variable not a good solution we can use closure count hide
// *   });

// *   function evemtListeners() {
// *     let count = 0;
// *     document.getElementById("clickMe").addEventListener("click", function xyz() {
// *       console.log("button clicked", ++count); // *   Now its a closure xyz has has parent lexical scope
// *     });
// *   }
// *   evemtListeners();

// *   Garbage collections & remove event listeners

// *   whenever we attach the event listeners it kind of forms a closure just like we did it in above code it takes a lot of memory of all their scopes all this callback functions hold on their scopes we should not use more buttons and hover kind of things.If we remove evenlisteners then all these variables which were held by this closure will be garbage collector.

// TODO •	Asynchronous javascript & event loop
// TODONo code here

// TODO •	How javascript engine exposed

// TODO Doubts
// *   JS V8 Engine
// *   byte code
// *   machaine code
// *   JIT compilation
// *   AOT compilation

// TODO •	Trust issues with setTimeout

// *   console.log("start");
// *   setTimeout(function () {
// *     console.log("callback");
// *   }, 5000);

// *   console.log("end");

// *   1 million code
// *   let startDate = new Date().getTime();
// *   let endDate = startDate;
// *   while (endDate < startDate + 10000) {
// *     endDate = new Date().getTime();
// *     console.log(endDate);
// *   }

// *   console.log("while expires");

// *   if we to defer for some piece of code or any function we can use below like this
// *   setTimeout(function () {
// *     console.log("call back");
// *   }, 0); // *   Even if we use the zero seconds it registers into web api environment and move to the callback queue once call stack is empty it get a chance to execute meanwhile event loop contineously monitor the callstack

// TODO •	Higher order functions and functional programing

// *   function x() {
// *     console.log("sai"); // *   callback function
// *   }

// *   function y(x) {
// *     // *   High order function
// *     x();
// *   }

// *   const radius = [3, 1, 2, 4];

// *   const calculateArea = function (radius) {
// *     const output = [];
// *     for (let i = 0; i <= radius.length; i++) {
// *       output.push(Math.PI * radius[i] * radius[i]);
// *     }
// *     return output;
// *   };
// *   console.log(calculateArea(radius));                       // *   Here These three functions almost 90% code is same we are repeating things a lot jsut logic is different

// *   const calculateCircumference = function (radius) {
// *     const output = [];
// *     for (let i = 0; i <= radius.length; i++) {
// *       output.push(2 * Math.PI * radius[i]);
// *     }
// *     return output;
// *   };
// *   console.log(calculateCircumference(radius));

// *   const calculateDiameter = function (radius) {
// *     const output = [];
// *     for (let i = 0; i <= radius.length; i++) {
// *       output.push(2 * radius[i]);
// *     }
// *     return output;
// *   };
// *   console.log(calculateDiameter(radius));

// *   Optimized way of above programs

// *   const radius = [3, 1, 2, 4];

// *   function area(radius) {
// *     return Math.PI * radius[i] * radius[i];
// *   }
// *   function circumference(radius) {
// *     return 2 * Math.PI * radius[i];
// *   }
// *   function diameter(radius) {
// *     return 2 * radius[i];
// *   }

// *   const calculate = function (radius, logic) {
// *     const output = [];
// *     for (let i = 0; i <= radius.length; i++) {
// *       output.push(logic(radius[i]));
// *     }
// *     return output;
// *   };
// *   console.log(calculate(radius, area));
// *   console.log(calculate(radius, circumference));
// *   console.log(calculate(radius, diameter));

// *   Using map method

// *   console.log(radius.map(area));

// *   To make calculate function to be available for all the arrays we see in code and we can use like array.map we have to use  Array.prototype

// *   Array.prototype.calculate = function (logic) {
// *     const output = [];
// *     for (let i = 0; i <= this.length; i++) {
// *       output.push(logic(this[i]));
// *     }
// *     return output;
// *   };
// *   console.log(radius.calculate(area));

// TODO •	Map, filter, & reduce

// *   const arr = [5, 1, 3, 2, 6];
// *   function binary(x) {
// *     return x.toString(2);
// *   }

// *   arr.map(binary);

// TODO filter
// *   const arr = [5,5,1,6,7,8,9];
// *   let filteredArr = arr.filter((item, index) => arr.indexOf(item) === index);
// *   console.log(filteredArr);

// TODO find sum

// *   const arr1 = [5, 5, 1, 6, 7, 8, 9];

// *   function findSum(arr1) {
// *     let sum = 0;
// *     for (let i = 0; i < arr1.length; i++) {
// *       sum +=arr1[i];
// *     }
// *     return sum;
// *   }
// *   function findMax(arr1) {
// *     let max = 0;
// *     for (let i = 0; i < arr1.length; i++) {
// *       if (arr1[i] > max) max = arr1[i];
// *     }
// *     return max;
// *   }
// *   console.log(findSum(arr1));
// *   console.log(findMax(arr1));

// *   const Max = arr1.reduce((acc, curr) => {
// *     if (curr > acc) {
// *        acc = curr;
// *     }
// *     return acc;
// *   }, 0);
// *   console.log(Max);

// *   const users = [
// *     { firstName: "sai", lastName: "kumar", age: 26 },
// *     { firstName: "sai1", lastName: "kumar1", age: 27 },
// *     { firstName: "sai2", lastName: "kumar2", age: 23 },
// *     { firstName: "sai3", lastName: "kumar3", age: 34 },
// *   ];

// *   list of fullnames

// *   let list = users.map((obj) => obj.firstName + obj.lastName);
// *   console.log(list);

// *   output {23: 1, 26: 2, 27: 1} return single object with key value pairs
// *   reduce method reduces the array and returns the particular value or one value here its object

// *   let age = users.reduce((acc, curr) => {
// *       if (acc[curr.age]) {
// *           acc[curr.age] = ++acc[curr.age];
// *       } else {
// *           acc[curr.age] = 1
// *       }
// *       return acc;
// *   }, {});

// *   console.log(age);

// *   find the people less than 30 and returns the firstName in above array

// *   let firstName = users.filter((arr) => arr.age < 30).map((arr) => arr.firstName);
// *   console.log(firstName);

// *   use reduce method instead of map and filter

// *   let firstNameAge = users.reduce((acc, curr) => {
// *     if (curr.age < 30) {
// *       acc.push(curr.firstName);
// *     }
// *     return acc;
// *   }, []);
// *   console.log(firstNameAge);

// TODO Callback hell

// *   console.log("start");
// *   setTimeout(function () {
// *     console.log("x");
// *   }, 5000);
// *   console.log("end")
// *   setTimeout(function () {
// *     console.log("y");
// *   }, 100);

// *   const cart = ["shoes", "pants", "kurta"];

// *   api.createOrder(cart, function () {
// *     api.proceedToPayment(function () {
// *       api.summary(function () {
// *         api.updateWallet(); // *   this is callback hell code not readable and unmaintainable and the structure is called "Pyramid of doom"
// *       });
// *     });
// *   });

// *   Invarsion of control is loose the control of our code when we use callbacks below is the example

// *   api.createOrder(cart, function () {
// *     api.proceedToPayment(); // *   Here we have callback function given to the createOrder api and expecting at some point will create an order call our function back here we gave the control to create order api to execute procedtopayment here blindly trusting the create order api what if it won't call the function or we don't know whether create order function will never execute the call back or not
// *   });

// TODO Promises;

// *   const cart = ["shoes", "pants", "kurta"];

// *   createOrder(cart, function (oderId) {
// *     proceedToPayment(oderId);
// *   });

// *   const promise = createOrder(cart);

// *   promise.then(function (oderId) {
// *     proceedToPayment(oderId);
// *   });

// *   what is a promise == promise object is a placeholder for certain period untill we recieve a value from a asynchronous operation and also some people call it container for future value

// *   promise is object that represents eventual completion or failure of an asynchronous operation.

// *   createOrder(cart, function (oderId) {
// *     proceedToPayment(oderId, function (paymentInfo) {
// *       showOrderSummary(paymentInfo, function () {
// *         updateWalletBalance();
// *       });
// *     });
// *   });

// *   createOrder(cart)
// *     .then((orderId) => proceedToPayment(orderId))
// *     .then((paymentInfo) => showOrderSummary(paymentInfo))
// *     .then((paymentInfo) => updateWalletBalance(paymentInfo));

// TODOCreate a Promises chaining, chaining & Error handling

// *   const cart = ["shoes", "pants", "kurta"];

// *   const promise = createOder(cart);

// *   promise
// *     .then((orderId) => {
// *       console.log(orderId); // *   if any errors occurs here directly catch block will be execute it skip the praymentInfo To overcome this behavaiour we have add catch block to this then method now if any occurs catch will execute and promise chain will not skip
// *       return orderId;
// *     })
// *     .catch((err) => {
// *       console.log(err);
// *     })
// *     .then((orderId) => proceedToPayment(orderId))
// *     .then((paymentInfo) => console.log(paymentInfo))
// *     .catch((err) => {
// *       console.log(err);
// *     })
// *     .then(() =>
// *       console.log("no matter what happens it will definetely execute or called")
// *     );

// *   function createOder(cart) {
// *     const pr = new Promise((resolve, reject) => {
// *       if (!validateCart(cart)) {
// *         const err = new Error("Cart is not valid");
// *         reject(err);
// *       }
// *       const orderId = "1234";
// *       if (orderId) {
// *         resolve(orderId);
// *       }
// *     });
// *     return pr;
// *   }

// *   function validateCart(cart) {
// *     return true;
// *   }

// *   function proceedToPayment(orderId) {
// *     return new Promise((resolve, reject) => {
// *       resolve("Payment Sucessful");
// *     });
// *   }

// TODO Async and await

// *  Akshay saini

//* Async is a keyword it use before a function. A function with async keyword always returns the promise

/* async function getData() {
   //* If this function doesn't return the promise by itself it return a value (any value boolean string etc) it will automatically wrapped inside a promise and it will return a promise
return "Namaste";
} 

const data = getData(); // Here it will return the promise
 data.then((res) => console.log(res)); */ // Output : Namaste

//*  Promise example

/* const p = new Promise((resolve, reject) => {
  resolve("Hello promise value");
});

async function getData() {
  return p;
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res)); */ // Output : Hello promise value

//* Async and await are used to handle the promises
//* Await is a keyword that can only be used inside an async function

/* const p1 = new Promise((resolve, reject) => {
  resolve("Hello promise value");
});

async function handlePromise() {
  const val = await p1;
  console.log(val);
}

handlePromise(); */ // Output : Hello promise value

//* Older way to write promise

/* const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello promise value");
  }, 10000)
});

function handlePromise() {
  p1.then((res) => console.log(res)); // Over here JS engine will not wait for promise to be resolved it will just move on to the next line print the hello older 
  console.log("hello older");
}

handlePromise(); */ // hello older "after 10 sec "  Hello promise value

//* New way to write Promise handling using async and await

/* async function handlePromise() {
  const val = await p1; // Here JS Engine was waiting for promise to be resolved once the promise is resolved then only it will go to the next line.
  console.log("hello new");
  console.log(val);
}

handlePromise(); */ // Output : After 10 secs -- hello new , Hello promise value

//* Error Handling the promise

const API_URl = "https://invalidapi.com";

async function handlePromise() {
  try {
    const data = await API_URl;
    const jsonValue = await data.JSON();
  } catch(err) {
    console.log(err);
  }
}

handlePromise();
handlePromise().catch((err) => console.log(err))

//* Interview 

//* async is a keyword which is used with function. The function with async keyword always returns the promise. await is used inside the function to handle the promises. async and await basically use to handle the promises it is a modern way to write the promises.

//* promise vs async and await

//* Async and await is a syntactical sugar over promise native methods behind the scenes javascript uses the normal promise things 

// TODO Cors, preflight request , Options method  Access Control Allow Origin Error

// *   CORS is a mechanism which uses additional http headers to tell the browser whether specific web appliation can share the resource with another web app major imporatnt point is that the both web apps are different origin
// *   Suppose the both web apps are same origin share resources very easily but if they don't have same origin they need to follow the CORS meachanism
// *   In old days the browser are not supported to make request to another origin, suborigin and different PORT after CORS become standard modern browsers are allowing this

// TODO Prefight

// *   preflight is a handshake between browser and server it checks whether server supports htpp methods (get, post etc) and origin
// *   preflight request is nothing but a making a http call using options method before making a actual http request
// *   A preflight options call is made and the server sets and send some http headers along with the request once the browser recieves it then only it will make actual call
// *   server set and send these headers -- [Accept-control-Allow-origin : *]

// TODO  star means any domain can access or outside of this domain can access to the server if server wants to restricts the particular domain server set to the domain [Accept-control-Allow-origin : github.com]

// TODO Event Bubbling, Capturing aka Trickling in Javascript

// *   Event bubbling is nothing but the events will bubble up or events will go up the hirarechy of the dom.
// *   Event bubbling is used by default if we don't pass any third argument inside event listener function

// TODO Event delegation in javascript

// *   Event delegation is a technic of handling events in our webpage in a better way it is based upon event bubbling just because event bubbling is exist event delegation also exist
// *   when we have a lot of event handlers in our webpage it causes the perfomance bottle necks so event delegation is provided how to handling a events in a better way
// *   Instead of attaching event handler each every element individually better to attach the single event handler to the root element
// *   when we click on child element it will bubble up root element event handler will execute or called
// *   Benefits -- writing less code and perfomance improves and dom manipulation
// *   Some events do not propagate up or bubbled up example : blur, resizing, focus

// TODO Call, apply, bind methods in javascript

// *   let name1 = {
// *     firstName: "Dasari",
// *     lastName: "sai",
// *     printFullName: function (homeTown) {
// *       console.log(this.firstName + this.lastName + homeTown);
// *     },
// *   };
// *   let name2 = {
// *     firstName: "Dasari1",
// *     lastName: "sai1",
// *   };
// *   name1.printFullName.call(name2, "kadapa", "state");
// *   name1.printFullName.apply(name2, ["kadapa", "state"]);
// *   let printName = name1.printFullName.bind(name2, "kadapa", "state"); // *   it returns the copy of the function later on we invoke it
// *   printName();

// *   The first argument always be the reference object
// *   Call method which is used for invoke the method by passing the reference as arguments which point to this variable in method
// *   apply is same as call but passing arguments is in array list
// *   Bind method looks exactly the same as call method but only difference is the bind method binds the method inside the object and returns the copy of that method which can be invoke later

// TODO async vs defer attributes in Javascript

// *   In normal script tag without adding async and defer attributes During html parsing as soon as script tag encountered scripts will fetch from the network there then scripts executed after that html parsing is contineous
// *   async == html parsing is goes on and scripts are fetched parallely as soon as scripts are available the scripts is executed after only html parsing is contineous
// *   defer == incase of defer html parsing goes on the scripts are fetched in parallel only scripts will execute once html parsing is complete

// *   when and which one use
// *   async attribute doesn't guarantee the order of execution of the scripts but defer does suppose if we have multiple scripts which are dependent on eachother async attribute does not guarantee the particular order in that we should probably prefer defer.
// *   Example suppose we have to load some external script eg google analytics which are independent scripts in that case we use async attribute  because defer attribute maintains order of execution of the scripts it is best of both world

// TODO Currying in Javascript

// *   Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

// *   currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.

// *   function multiply(x) {
// *     return function (y) {
// *       console.log(x * y);
// *     };
// *   }
// *   let multipleByTwo = multiply(3); // *    using closure
// *   multipleByTwo(4);

// *   function multiply(x, y) {
// *     console.log(x * y);
// *   }

// *   let multipleByTwo = multiply.bind(this, 3); // *   using bind method
// *   multipleByTwo(4);

// TODO Mutable and Immutable Objects

// *   the value can change after it is created the object is called mutable and the value cannot change the object is called immutable
// *   primitive types string , number, boolean, null, undefined these are directly store in the location that the variable access .These are immutable
// *   reference types are array and objects these are mutable

// *   let x = 20;
// *   let y = x;
// *   y = y + 1;
// *   console.log(x);
// *   console.log(y);

// *   In this case both are sharing different memory location and these are primitive type whatever operation performs in x it is only limited to only x not affect the y
// *   Mutable
// *   let a = ["value1", "value2"];
// *   let b = a; // *   As here b holds the reference.b is also points the same location where the a is pointing if we try to do some operation in b variable a is also effected
// *   b.pop();
// *   console.log(a);
// *   console.log(b);

// *   let c = {
// *     name: "jhon",
// *     city: "bglr",
// *   };

// *   let d = c;

// *   d.age = 28;

// *   console.log(c);
// *   console.log(d);

//Convert mutable to immutable
// *   let e = ["value1", "value2"];
// *   let f = e.concat();
// *   let f = [...a]; // *   using spread operator creates the new memory location to f variable now

// *   let g = {
// *     name: "jhon",
// *     city: "bglr",
// *   };

// *   let h = Object.assign({}, g);
// *   let h = { ...g };

// *   h.age = 28;

// TODO Spread Operator

// *   what is spread operator
// *   It expands the array into individual elements so it can be used to expand the array in a place where zero or more elements are expected
// *   Spread operator pulls out all the values from an  array adds them as comma separate values to a new array same in objects pulls out all key value pairs from the object add them as key value pairs to another object
// *   const users = ["user1", "user2"];
// *   console.log(users);
// *   console.log(...users);

// *   Spread operator with arrays

// *   const team1 = ["user1", "user2"];
// *   const team2 = ["user3"];
// *   const newArr = team1.concat(team2);
// *   const MynewArr = [...team1, ...team2];
// *   console.log(newArr);
// *   console.log(MynewArr);

// *   const newTeamMem = "newTeamMem";
// *   console.log(team1.concat(newTeamMem));
// *   console.log([...team1, ...newTeamMem]);

// *   Spread operator in objects

// *   const emp = {
// *     name: "jhon",
// *     job: "developer",
// *   };

// *   const emp2 = {
// *     ...emp,
// *     age: 20,
// *   };
// *   console.log(emp2);

// *   Spread operator in function calls

// *   console.log(Math.min(10, 5, 30, 3, 90));
// *   const scoreList = [100, 40, 200, 89];
// *   console.log(Math.min(...scoreList));
// *   console.log(Math.max(...scoreList));

// *   before es5 spread operator we acheive samething above with apply method
// *   console.log(Math.max.apply(null, scoreList));

// *   Immutability with spread operator

// *   const todos = [
// *     { task: "reading", completed: true },
// *     { task: "painting", completed: false },
// *   ];

// *   function addToDo(newTodDo) {
// *     return [...todos, newTodDo];
// *   }

// *   const newList = addToDo({ task: "recording", completed: false });
// *   console.log(newList);

//TODO Rest parameter

// *   Rest parameter syntax allows a function to accept indefinite number of arguments as an array instead of holding it in individual variable we will hold the all the arguments in single variable and that is array with help of rest parameter
// *   function sum(...values) {
// *     let sum = 0;
// *     values.map((e) => (sum += e));
// *     console.log(sum);
// *   }

// *   sum(10, 20);
// *   sum(10, 20, 30);
// *   sum(10, 40, 50, 60, 70);

// *   rest vs spread
// *   The rest parameter will be able to get list of argument into an array
// *   spread operator helps us to unpacked elements of an array in single indivisual element

// *   Before es6 we can use arguments object instead of rest parameter the major is the rest parameter completely a array and we cannot apply array functions like map and filter etc  but in other hand arguments is not a array its array like syntax

// *   function calculate(type, ...values) {
// *     type(...values);
// *   }

// *   calculate(sum, 10, 20, 30);

// TODO Shallow vs deep copy

// *   when we make a copy of a variable from the original source copied into another variable by using a simple assignment at that time only the reference address or memmory address of the original variable is copied into another variable not the actual value at last both variable original and source refer to the same value when we make any change in the new variable it also mutate or change my original value.

// *   javascript does a shallow copy by default for non primitve types(object,array,functions).
// *   primitive types(string,number,null,undefined,boolean) are immutable and its always create a deep copy.
// *   Deep copy : when we make a copy of a variable into another variable by using a assignment operator at that time all the values of object or array along with reference address of the original variable is copied into another variable at last both variables or copied variable refered to the different reference values when we make any change in copied variable it won't mutate the original variable

// *   let originalValue = 10;
// *   let copiedValue = originalValue;
// *   copiedValue = 20;
// *   console.log(originalValue);
// *   console.log(copiedValue);  // *   here primitive types by default deep copy if we do any change in copied variable it never reflects into the original value because they different memory locations or address

// *   let originalValue = {
// *     name: "jhon",
// *     age: 20,
// *   };

// *   let copiedValue = originalValue;
// *   console.log(originalValue);
// *   console.log(copiedValue);

// *   copiedValue.name = "peter"; // *   Here we can see that javascript does shallow copy for the object data type automatically so when we change the name key in the copied object it also affect the original obejct and mutate the original source
// *   console.log(originalValue);
// *   console.log(copiedValue);
// *   Methods to create deep copy
// *   JSON.Stringify()

// *   let originalValue = {
// *     name: "jhon",
// *     age: 20,
// *     getName: function () {
// *       return this.name;
// *     },
// *   };

// *   let copiedValue = JSON.parse(JSON.stringify(originalValue));
// *   console.log(originalValue);
// *   console.log(copiedValue);

// *   copiedValue.name = "Peter";
// *   console.log(originalValue);
// *   console.log(copiedValue); // *   Here JSON.stringify creates a deep copy but there is a disadvantage of this approach suppose if object is holding a function when you have function type in object at that time JSON.stringify will not copy the obejct accurately function key will not be available this method is not capable of function type

// *   Object.assign

// *   let originalValue = {
// *     name: "jhon",
// *     age: 20,
// *     getName: function () {
// *       return this.name;
// *     },
// *     address: {
// *       city: 'kadapa',
// *       country: 'india'
// *     }
// *   };
// *   let copiedValue = Object.assign({}, originalValue);

// *   copiedValue.name = "Peter";
// *   copiedValue.address.city = 'rajampet' // *   Here city property value will on both obejcts copied and original because of partial deep copy
// *   Here it creates partial deep copy it means suppose object has nested key if we try to mutate nested object at that time object.assign will not work
// *   console.log(originalValue);
// *   console.log(copiedValue);

// *   Spread operator approach

// *   let originalValue = {
// *     name: "jhon",
// *     age: 20,
// *     getName: function () {
// *       return this.name;
// *     },
// *     address: {
// *       city: "kadapa",
// *       country: "india",
// *     },
// *   };
// *   let copiedValue = { ...originalValue };
// *   copiedValue.name = "sai";
// *   copiedValue.address.city = 'kodur' // *   Here also samething as like Object.assign it will mutate both objects in nested level property changes (Partial deep copy)
// *   console.log(originalValue);
// *   console.log(copiedValue);

// *   if we want to acheive for nested level property as well instaed of modifying like above we can use spread operator that as well

// *   let originalValue = {
// *     name: "jhon",
// *     age: 20,
// *     getName: function () {
// *       return this.name;
// *     },
// *     address: {
// *       city: "kadapa",
// *       country: "india",
// *     },
// *   };
// *   let copiedValue = { ...originalValue };

// *   copiedValue = {
// *     ...copiedValue,
// *     name: "Alisha", // *   Here deep copy done with spread operator it won't affect the both original value
// *     address: {
// *       ...copiedValue.address,
// *       city: "Goa",
// *     },
// *   };

// *   console.log(originalValue);
// *   console.log(copiedValue);

// *   SO by default spread operator also give the partial deep copy not the complete deep copy if we want to acheive the complete deep copy for that we have few libraries are available like lodash and _.js. clonedeep method in lodash to acheive the deep copy

// TODO Optional chaining

// *   Optional chaining acts like a conditional check for example if we call a property from an obejct or property that doesn't exist we will encounter an error but with optional chaining we can skip the error message
// *   With optional chaining(?.) if the property doesn't exist it returns undefined

// *   example

// *   let person = {
// *     name: "sai",
// *     age: "27",
// *     location: {
// *       lat: 75,
// *       long: 17,
// *     },
// *   };

// *   console.log(person.location?.lat); // *   75
// *   console.log(person.locations?.lat); // *   undefined
// *   console.log(person.locations.lat); // *   cannot read properties undefined

// *   Otherways without using ?.

// *   console.log(person.location ? person.location.lat : undefined);
// *   console.log(person.location && person.location.lat);

// TODO Destructing

// *    Before es6 if we want to access any of the property of object

// *   const user = {
// *     firstName: "sai",
// *     lastName: "kumar",z
// *     address: {
// *       city: "kadapa",
// *     },
// *   };

// *   const name = user.firstName;
// *   const address = user.address.city;

// *   The destructuring syntax is a javascript expression that makes it possible to unpack values from array , or properties from objects into distinct variables

// *   if we want to access the one property from object we can use below syntax

// *   const { firstName } = user;
// *   console.log(firstName);
// *   const { firstName:fname } = user; // *   if we want to create alias use this syntax sometimes we don't want to use property name same name in object because of conflict here we can create alias like this firstName:fname

// *   if we want to access more than one property from object we can use below syntax
// *   const { firstName, lastName } = user;
// *   console.log(firstName, lastName);

// *   To assign a default value in any property of above object or property is not available we can create property and assign default value

// *   const { firstName, lastName, age = 10 } = user;
// *   console.log(age);

// *   To access the nested key

// *   const {
// *     firstName,
// *     lastName,
// *     age = 10,
// *     address: { city },
// *   } = user;
// *   console.log(city);

// *   Using the rest operator in destructuring syntax

// *   sometimes if i want to access one property but other properties i just want to access like a normal object my object might be very big don't want to access one by one like above

// *   const { firstName, ...userInfo } = user;
// *   console.log(firstName);
// *   console.log(userInfo);
// *   console.log(userInfo.address.city);

// *   Arrays
// *   const scores = [10, 20, 99, 334];
// *   console.log(scores[0]); // *   Instead of acessing like this

// *   If we want to extract the array instead of using curly braces use square brackets for array

// *   const [x] = scores; // *   Here x is points to zeroth index
// *   const [x, , y] = scores; // *   if we want to access the 2nd position instead of 1st one we can use comma separated (to skip the array keys )

// *   const [x, ...userinfo] = scores;
// *   console.log(x); // *   Same like obejcts similarly it creates the array we can other elements values using this sysntax
// *   console.log(userinfo); // *   it returns an array
