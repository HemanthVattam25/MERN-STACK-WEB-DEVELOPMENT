let form = document.querySelector("form");
form.addEventListener("submit", submitAction);

let productArr = JSON.parse(localStorage.getItem("products")) || [];

// Function to display all products from local Storage
function displayProducts() {
  let divTag = document.querySelector(".cards");
  divTag.innerHTML = ""; // Clear the container to avoid duplicates
  console.log(productArr);
  productArr.forEach((element, index) => {
    let cards = document.createElement("div");
    let h2 = document.createElement("h2");
    let title = document.createElement("p");
    let description = document.createElement("p");
    let price = document.createElement("p");
    h2.innerText = element.productCategory;
    title.innerText = element.productTitle;
    description.innerText = element.productDescription;
    price.innerText = element.productPrice;

    // create delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", function () {
      deleteCard(index);
    });
    // append everything to the card
    cards.append(h2, title, description, price, deleteButton);
    divTag.append(cards);
  });
}
// Function to handle deleting a product by index
function deleteCard(index) {
  productArr.splice(index, 1);

  // update local storage with the new product array after deleting
  localStorage.setItem("products", JSON.stringify(productArr));

  // Refresh the display
  displayProducts();
}

// //Initial display of products on page load
// displayProducts();

function submitAction(event) {
  event.preventDefault();
  let productsObj = {
    productCategory: form["product-category"].value,
    productTitle: form["product-title"].value,
    productDescription: form["product-description"].value,
    productPrice: form["product-price"].value,
  };
  console.log(productsObj);
  productArr.push(productsObj);
  localStorage.setItem("products", JSON.stringify(productArr));

  console.log(productArr);
  displayProducts();

  // Clear form input fields after submission
  form.reset();
}
