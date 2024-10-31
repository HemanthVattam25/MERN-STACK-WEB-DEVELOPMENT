// Adding submit event to Form (Step 1)
document.querySelector("form").addEventListener("submit", formSubmit);

// checking the data of jobArr (Step 5)
let jobArr;
if (localStorage.getItem("jobLists") !== null) {
  jobArr = JSON.parse(localStorage.getItem("jobLists"));
} else {
  jobArr = [];
}

function formSubmit(event) {
  // To prevent emptying data on refreshing/ submitting
  event.preventDefault();
  // Storing data in jobObj (step 2)
  let jobObj = {
    personName: document.querySelector("#name").value,
    personEmail: form.email.value,
    personRole: form.role.value,
    personSalary: form.salary.value,
  };
  console.log(jobObj);
  // pushing each object into an array (Step 3)
  jobArr.push(jobObj);
  console.log(jobArr);
  // storing data of jobArr in local storage by converting into JSON string format (Step 4)
  localStorage.setItem("jobLists", JSON.stringify(jobArr));
  //emptying inputs after submitting
  form.name.value = "";
  form.email.value = "";
  form.salary.value = "";
  //Showing simple alert message
  alert("Thank you, " + jobObj.personName + ". Your data has been submitted");
  //on submit, it takes to next page that is application
  window.location.href = "../ApplicationsPage/applications.html";
}
