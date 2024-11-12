# HOW JS WORKS

By default, JavaScript is synchronous, It runs code line by line and one line at a time. If any part of the code takes longer time to execute, all the next lines have to wait till it's completion. To avoid this late execution, we convert the code into Asynchronous code.

To convert JS code into Asynchronous, JS Cannot do it by itself, Here comes, the Web APIs, Web APIs are methods given by the web browser that helps the code to run in asynchronous way.

Some of them are:

1. SetTimeout
2. SetInterval
3. LocalStorage
4. Fetch

## SetTimeout()

This method is used to make any function accessible after particular period of time. SetTimeout is a method which takes two arguments:

- function
- time in milliseconds
  setTimeout(function(), 1000)

## SetInterval()

This method is similar to SetTimeout but used to use a function repetitively after every period of time.

## How JS executes the code internally

- Stack:
  JavaScript in executes the code line by line by stack order.
- WebAPI:
  Web API takes the asynchronous code and pushes to stack based on fast execution.
- Queue:
  The Asynchronous code that is pushed to Queue will now goes to
  Javascript stack and the execution happens.

  This process of execution is known as **event loop**

We can check this in javascript visualizer.

## Primitive vs Non-primitive Data Types:

### Primitive:

1. Data types:

- number
- string
- boolean
- null
- undefined

2. They can take only one value
3. They are immutable. They can be re-defined but cannot be changed/edited.
   ex: let str = "hero";
   str[0] = "z"; // not possible.
4. They are passed by value which means they are stored in the form of the defined value;

### Non-Primitive Data Types:

1. Data Types:

- Array
- Function
- Objects

2. They can multiple values of different data types
3. They are immutable.
   ex: let a = [1,2,3];
   let b =a;
   b[0] = "a"; // b and a have first element "a"

4. They are passed by reference / address not by value. that means, they are targeted to address not value;
