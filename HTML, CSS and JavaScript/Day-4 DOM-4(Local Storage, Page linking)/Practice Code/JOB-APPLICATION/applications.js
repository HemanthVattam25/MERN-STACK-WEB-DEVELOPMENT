let jobArr = JSON.parse(localStorage.getItem("jobLists"));
let bookmarkArr = JSON.parse(localStorage.getItem("bookmarks")) || [];

jobArr.forEach((element) => {
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
  //   let rdButton = document.createElement("input");
  //   rdButton.setAttribute("type", "checkbox");
  //   td5.append(rdButton);

  tr.append(td1, td2, td3, td4, td5);

  document.querySelector("tbody").append(tr);

  // Re-directing to bookmark page when bookmark is clicked
  td5.addEventListener("click", () => {
    bookmarkList(element);
  });

  function bookmarkList(element) {
    bookmarkArr.push(element);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkArr));
    window.location.href = "bookmark.html";
  }
});
