# Asynchronous Programming

In general, JavaScript executes the code line by line and one line at a time. Hence, JavaScript is single-thread language. This type of programming is known as **Synchronous Programming**

### Drawback:

When there is part/block of code which takes more time to execute the next part of the code waits until the first block is executed. This causes code to run longer time than expected. To avoid the delay or reduce the runtime of the code. We use **Asynchronous Programming**

## How JavaScript Code is executed?

JavaScript works on the principle of Execution context

## Execution context

Execution phase consists of two main phases

ex: let a = 10;
console.log(a);

### 1. Creation Phase

Creation Phase is the first step in code execution that takes place when any variable/function/classes/import is declared. The declaration value will be undefined in this phase.

let a; value will be undefined

### 2. Execution Phase

The Execution phase takes the assigned values or block of code of the particular variable/function/classes/import.

a = 10;
console.log(a);

## Hoisting:

Hoisting is a method when any variable/function/classes/import is declared at any level of the code, the interpreter appears to take the declaration part top of the parent scope/ global scope without bothering about the value given inside.

- Global Scope
- Block Scope

### Temporal Dead Zone

var by default will be hoisted in creation phase, that means, wherever it is declared, it takes its type on the top and defined to be undefined. but let and const does not works like that, it should follow order, let and cost will also be hoisted but they cannot be used as they stored in different space inside Creation Phase. That is Known as **Temporal Dead Zone**

## Web APIs

To switch from synchronous to Asynchronous, only Javascript cannot handle itself. So, it takes the help of some Web/ browser help in the form of APIs

**Some Common Web APIs Used**

- local Storage
- setTimeout
- setInterval
- fetch
