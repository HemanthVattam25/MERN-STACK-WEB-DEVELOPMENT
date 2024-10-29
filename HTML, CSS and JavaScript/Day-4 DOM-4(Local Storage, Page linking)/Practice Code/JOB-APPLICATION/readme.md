# Creating JOB application

## To-do

1. create a form to take inputs to submit the application

2. After submit, collect the inputted data in local storage and retrieve it in the application page that redirects automatically on submit

3. Here, we can see sent applications and a bookmark option. When bookmark is clicked. it shows the selected list in other bookmarks page

### Step by Step process

1. Creating form Page (Home Page): Storing the data and using it

- create navbar with links Home, Applications, Bookmarks
  **HTML**
- create a simple form with inputs to collect data like name, email, role, salary
  **JS**
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
