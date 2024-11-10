let btnCart = document.querySelectorAll(".btn-cart");
btnCart.forEach((btn) => {
  btn.addEventListener("click", cartEvent);
});

let cartArr = JSON.parse(sessionStorage.getItem("cartList")) || [];

// Select the dropdown for filtering
let filterDropdown = document.querySelector("#filterDropdown"); // Adjust the selector as needed
if (filterDropdown) {
  filterDropdown.addEventListener("change", handleFilter);
}

function cartEvent() {
  let allItems = document.querySelectorAll(".item");

  allItems.forEach((item) => {
    if (!item.querySelector(".go-cart")) {
      let goCart = document.createElement("button");
      goCart.classList.add("go-cart");
      goCart.innerText = "Go to Cart";
      item.append(goCart);
      goCart.addEventListener("click", () => {
        window.location.href = "../CartPage/cart.html";
      });
    }
  });

  let category = this.parentElement.querySelector(".Category")?.innerText || "";
  let itemName = this.parentElement.querySelector(".itemName")?.innerText || "";
  let itemPrice = this.parentElement.querySelector(".price")?.innerText || "";
  let itemImg = this.parentElement.querySelector(".pic")?.src || "";

  let cartObj = {
    productCategory: category,
    productName: itemName,
    productPrice: itemPrice,
    productImg: itemImg,
  };

  cartArr.push(cartObj);
  sessionStorage.setItem("cartList", JSON.stringify(cartArr));
}

// Filter function
function handleFilter() {
  let selectedCategory = filterDropdown.value; // Get selected category
  let allItems = document.querySelectorAll(".item"); // Get all items

  allItems.forEach((item) => {
    let itemCategory = item.querySelector(".Category")?.innerText || ""; // Check if the category is present
    if (selectedCategory === "select" || itemCategory === selectedCategory) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
