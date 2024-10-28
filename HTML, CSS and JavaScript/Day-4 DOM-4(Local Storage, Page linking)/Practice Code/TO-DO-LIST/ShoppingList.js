let store = document.querySelector("form");

store.addEventListener("submit", submitResponse);

function submitResponse() {
  event.preventDefault();

  let item = document.querySelector("#itemName").value;
  let qty = document.querySelector("#quantity").value;
  let price = document.querySelector("#price").value;

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = item;
  let td2 = document.createElement("td");
  td2.innerText = qty;
  let td3 = document.createElement("td");
  td3.innerText = price;

  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
  // Reset the input data
  document.querySelector("#itemName").value = "";
  document.querySelector("#quantity").value = "";
  document.querySelector("#price").value = "";
}
