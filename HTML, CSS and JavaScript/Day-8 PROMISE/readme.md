# Promise

JavaScript works in synchronous. For time taking code, we use Asynchronous code which will be handled by browser.

The problem with the Asynchronous code is, Whenever we use Asynchronous code, and if any delay or failure in the code, We cannot know What is happening, Like... Is it due to delay or failure and we can see the output if the asynchronous code is success.

## Problem with Asynchronous code

There are some issues with the asynchronous code.

1. **Callback Hell**:
   When we use asynchronous code, if we use nested functions inside the first argument of asynchronous method/ Web APIs i.e, setTimeout, setTimeInterval etc... If any issue or error persists, It is very hard to figure out what is happened and which part is the issue. This creates callback hell due to multiple nested functions. It misses clarity.

2. **Code State**
   What is the state of the code, is it running or not? is it throwing error or not? Will it run or not?
   To know the state of the asynchronous code, We use Promises.

## Promises

- Promise is an Javascript object that handles the state of the asynchronous code, that tells the eventual completion or failure of the asynchronous tasks. Promises are created using constructors.
- Promises are more powerful and flexible than callback functions as they can provide better error handling and chaining of asynchronous code/ operations

### States

Promises have 3 states

1. **Pending**
2. **Resolve** ( Success/ Completion)
3. **Reject** (Failure)

### Syntax of Promise

Promise uses two arguments it it's callback function.

` new Promise(function(resolve,reject){})`

1. resolve
   When task is success, it displays output
2. reject
   when task is failed, it shows error
   When Task takes too much time to load. It is in pending state.

## Promise Handling

we use two methods that we chain to promise object to handle the state of the asynchronous tasks.

`.then().catch()`

- **.then()** : it uses callback function , it handles resolve state
- **.catch()** : it uses callback function, it handles reject state

## Event loop:

- **Stack**: stores the Javascript code ( variables, functions etc..)
- **Queue** : Stores the Asynchronous code (setTimeout, SetTimeInterval etc..)
- **Micro task queue**: stores the promises code ( resolve and reject)

- Order of execution: Stack > MicroTask Queue > Queue

## finally():

finally is the method like then() and catch() which acts as a default behavior which performs code even the asynchronous code is either resolved/rejected/pending

## Promise All

We can check multiple promises code and combine them to show the final state.

- If all promises are resolved, promise all state is resolved.
- If any of the promise is rejected, promise all state is rejected.

ex: Payment by using both cashback/wallet and card

### Syntax of promise all.

we store all individual promises in an array and we pass this array to promise all to check its state

`promise.all(promiseArr).then().catch();`
