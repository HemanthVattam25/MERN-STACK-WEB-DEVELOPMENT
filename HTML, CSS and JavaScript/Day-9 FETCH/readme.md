# Fetch

## Recap of History before knowing about Fetch

1. **JavaScript** runs in `synchronous`.
   **Problem:**
   - To get output, We need to wait till every line execution. If they are any delays in between, the rest of the code should wait till it's completion.
2. **Asynchronous programming** rescues javascript to run faster by handling the delayed code/task. This execution is taken care by Browser.
   ex: setTimeout, setInterval.
   **Problem:**
   - We cannot know what's happening with the response. like.. When will the asynchronous code gets executed from the server/database, What is the state of the execution.
   - Callback hell: Chaining of functions reduces readability and error finding probability.

callback hell

user --->request---> database ---->database---->database

function (){

    function (){

        function(){

            function(){
                function(){

                }
            }
        }
    }

} 3. **Promises**: Promises are JavaScript Objects which takes care of Asynchronous code and returns the state of the response (pending/rejected/resolved).It will be handled by browser. They are stored in MicroTask Queue.
In general/ before updates: Promises are written in this format
`new Promise((resolve, reject)=>{resolve(); reject(); })`
To know the result that promise returns, we use `.then()` and `.catch()` methods. `.finally() ` gives result irrespective of resolve and reject
**Problem:**

- When we return the result value of one promise and use it in other promise. We should use **Promises chaining** with multiple `.then()` methods.
- Longer code

4. **async/await**: To reduce the code and use promises in simpler way, async and await keywords are introduced.

- async: defines a function that the function contains a promise which is handling asynchronous code.
  `async function f(){}`
- await: await tell the javascript to wait till that promise returns a result value.

Whenever async is mentioned before any function. It should contain try {} and catch{} blocks to avoid the usage of then() where, try denotes the resolved value of the promise and catch defines the error/ reject value

async function(){

    try{
            fetch(); --> promise

            await fetch();

            here the resolved data will be accessible.
    }
    catch(error){
            // here the rejected data will be accessible.
    }

}

5. **Fetch**: It is a new way to define a promise that returns the data.
   Fetch uses the URL to fetch the data.
   old: new Promise()
   new: fetch("URL")

## Static Methods in promise:

There are 6 static methods in promise

1. **Promise.all()**:

- It checks all the promises to settle and returns result as fulfilled if all promises are resolved. else returns rejected.
- It returns the result of promises as an array.

2. **Promise.allSettled():**

- It is same as `Promise.all()` but returns the results as array of an objects.
  [ {
  Status: "fulfilled",
  value : data
  }]

3. **Promise.any()**:

- It Returns the first fulfilled(resolved) promise. If all promises are reject. It will return an error.

4. **Promise.race()**:

- It returns the value of first promise either its resolved or rejected.

5. **Promise.resolve()**:
   It returns resolved state/ value
6. **Promise.reject()**
   It returns the rejected value
