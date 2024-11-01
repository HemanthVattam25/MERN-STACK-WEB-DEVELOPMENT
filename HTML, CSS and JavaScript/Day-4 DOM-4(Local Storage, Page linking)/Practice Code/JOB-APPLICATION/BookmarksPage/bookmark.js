let bookmarkArr = JSON.parse(localStorage.getItem("bookmarks"));

bookmarkArr.forEach((element, index) => {
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
  td5.innerText = "Delete";
  td5.style.color = "red";
  td5.style.fontSize = "18px";
  td5.style.cursor = "pointer";
  // delete event
  td5.addEventListener("click", function () {
    deleteFun(element, index);
  });
  tr.append(td1, td2, td3, td4, td5);

  document.querySelector("tbody").append(tr);
});
// delete function
function deleteFun(element, index) {
  bookmarkArr.splice(index, 1); // deleting the selected index element
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkArr));

  window.location.reload();
}
