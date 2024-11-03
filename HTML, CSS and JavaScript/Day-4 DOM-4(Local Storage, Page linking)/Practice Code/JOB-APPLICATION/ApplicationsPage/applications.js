let jobArr = JSON.parse(localStorage.getItem("jobLists"));
let bookmarkArr = JSON.parse(localStorage.getItem("bookmarks")) || [];

function displayData(data) {
  document.querySelector("tbody").innerHTML = "";

  data.forEach((element) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = element.personName;

    let td2 = document.createElement("td");
    td2.innerText = element.personEmail;

    let td3 = document.createElement("td");
    td3.innerText = element.personRole;

    let td4 = document.createElement("td");
    td4.innerText = element.personSalary;

    let td5 = document.createElement("td");
    td5.innerText = "Bookmark this";
    td5.style.color = "teal";
    td5.style.fontSize = "18px";
    td5.style.cursor = "pointer";

    tr.append(td1, td2, td3, td4, td5);

    document.querySelector("tbody").append(tr);

    // Re-directing to bookmark page when bookmark is clicked
    td5.addEventListener("click", () => {
      bookmarkList(element);
    });
  });
}

displayData(jobArr);
//Bookmark Function
function bookmarkList(element) {
  bookmarkArr.push(element);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkArr));
  window.location.href = "../BookmarksPage/bookmark.html";
}
//filter by category
function handleFilter() {
  let selectedValue = document.getElementById("filter").value;
  let filteredArray = jobArr.filter(function (element) {
    return element.personRole === selectedValue;
  });

  displayData(filteredArray);
}
//sort by Salary
function handleSalarySort() {
  let selectedValue = document.querySelector("#sortSalary").value;

  if (selectedValue === "HTL") {
    jobArr.sort(function (a, b) {
      return b.personSalary - a.personSalary;
    });
    displayData(jobArr);
  }
  if (selectedValue === "LTH") {
    jobArr.sort(function (a, b) {
      return a.personSalary - b.personSalary;
    });
  }
  // Clear the existing table rows to prevent duplication
  displayData(jobArr);
}
//Sort by Name
function handleNameSort() {
  let selectedValue = document.getElementById("sortName").value;
  //sort name ztoa
  if (selectedValue === "ztoa") {
    jobArr.sort(function (a, b) {
      const nameA = a.personName.toUpperCase();
      const nameB = b.personName.toUpperCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameB < nameA) {
        return -1;
      }
    });
    displayData(jobArr);
  }
  //sort name atoz
  if (selectedValue === "atoz") {
    jobArr.sort(function (a, b) {
      const nameA = a.personName.toUpperCase();
      const nameB = b.personName.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameB < nameA) {
        return 1;
      }
    });

    displayData(jobArr);
  }
}
