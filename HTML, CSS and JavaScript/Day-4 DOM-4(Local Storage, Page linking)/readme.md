# Storing Data from the Input, Local Storage, Page routing, dynamic page

## Storing Form inputs in a table using JavaScript

### Things done

- Created input tags in the form and styled them
- Created a table with the header
- tbody collects the data from the inputs and stores in the rows using JavaScript
- created all html, JS and CSS files separately and linked in the html

### Things not possible here

- As we reload the page, the data gets refreshed and will be empty.
- The browser stores given input data in short memory and gets deleted as refreshed.

## To store the data even after refreshing the page.

### Json format

Both keys and values will be in double quotes
{
"key": "value",
"key1": "value1"
}

## Local Storage

This storage has the data in the browser that will not be erased until we do it manually.

- We have to use the Local Storage in the browser application.

### To store data in Local storage,

- we need to convert the data into JSON format and set it to local storage
- Syntax: **localStorage.setItem("joblist",jobArr)**
- To convert value to JSON, we should use, **JSON.stringify(jobArr)**
- **localStorage.getItem** - To retrieve the storage data
- To convert JSON data back to javascript objects, we should use, **JSON.parse(localStorage.getItem("jobList"))**

## Session Storage

This storage stores the data in the browser until the webpage is opened even after many refreshes and loses it's data when the webpage is closed.
