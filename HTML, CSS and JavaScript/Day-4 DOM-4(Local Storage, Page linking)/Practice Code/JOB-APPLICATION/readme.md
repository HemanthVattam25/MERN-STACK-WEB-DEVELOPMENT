# Creating JOB application

## To-do

1. create a form to take inputs to submit the application

2. After submit, collect the inputted data in local storage and retrieve it in the application page that redirects automatically on submit

3. Here, we can see sent applications and a bookmark option. When bookmark is clicked. it shows the selected list in other bookmarks page

### Step by Step process

1. Creating form Page (Home Page): Storing the data and using it

- create navbar with links Home, Applications, Bookmarks

#### HTML

- create a simple form with inputs to collect data like name, email, role, salary

#### JS

- add eventListener to the form
<!-- Store in Object -->
- store the inputted in an object with the keys and values, where keys are relevant names and values are taken from the form values
<!-- Add to empty array -->
- add this object to an empty array to store all the objects
<!-- convert this array to JSON and add it to local storage -->
- **localstorage.setItem("jobList", <u>JSON.stringify</u>("jobArr))**
<!-- Using JobArr based on the data -->
- if local storage empty, jobArr = [];
<!-- Get JSON data from Local storage and convert it back to Array form to get understand by JavaScript-->
- else jobArr = **<u>JSON.parse</u>(localStorage.getItem("jobArr"))**
<!-- Redirect it to Application Page -->

- **window.location.href = "applications.html"**

2. Create an Application page and display the retrieved data there.

#### HTML

- create a Table with name, email, role, salary. leave tbody empty where the data comes from JS file

#### JS

- retrieve the data from local storage: **jobArr = JSON.parse(localStorage.getItem("Joblist"))**
<!-- Add this data to Table -->
- By, forEach element in JobArray i.e, object i.e, application details, get details and add it to inner text of tbody

3. Create a Bookmark page and display the selected bookmarks

#### Connection to application.js

- Add event to bookmark text
- Pass elements i.e, objects to bookmark function to use and store it in array.
- push that element in a bookmarkArr
- store that bookmarkArr in local Storage.
- Add condition that if bookmarkArr is empty otherwise, get existing data from local storage

- **Now we have the selected bookmark applications and stored in Local storage.**

Remaining part: collect the data from local storage and display it in bookmarks tab
