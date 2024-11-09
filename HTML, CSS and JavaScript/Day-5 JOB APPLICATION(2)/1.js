let cartArr = JSON.parse(sessionStorage.getItem("cartList")) || [];

// Function to calculate and display total quantity
function calculateTotalQuantity() {
  let totalQuantity = cartArr.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  document.querySelector("#bill").innerText = "Total Items: " + totalQuantity;
}

// function to delete an item from the cart
function deleteItem(index) {
  cartArr.splice(index, 1);
  sessionStorage.setItem("cartList", JSON.stringify(cartArr));
  window.location.reload();
}
// iterate over each item in the cart array
cartArr.forEach((element, index) => {
  let cartItems = document.createElement("div");
  cartItems.setAttribute("class", "cart-items");

  // Create category and item name elements
  let cat = document.createElement("div");
  cat.setAttribute("class", "cat");
  cat.innerText = "Item Type: ";

  let itemCategory = document.createElement("h4");
  itemCategory.setAttribute("class", "category");
  itemCategory.innerText = element.productCategory;
  cat.append(itemCategory);

  let type = document.createElement("div");
  type.setAttribute("class", "type");
  type.innerText = "Item Category: ";

  let itemName = document.createElement("h4");
  itemName.setAttribute("class", "itemName");
  itemName.innerText = element.productName;
  type.append(itemName);

  // Price display
  let pr = document.createElement("div");
  pr.setAttribute("class", "pr");
  pr.innerText = "Item Price: ";

  let itemPrice = document.createElement("h4");
  itemPrice.setAttribute("class", "price");
  itemPrice.innerText = element.productPrice;
  pr.append(itemPrice);

  // Quantity controls
  let itemOps = document.createElement("div");
  itemOps.classList.add("item-opt");

  let qty = document.createElement("div");
  qty.innerText = " Quantity: ";
  qty.classList.add("qty");

  let dec = document.createElement("button");
  dec.innerText = "-";
  let count = document.createElement("p");
  count.innerText = "1"; // Initial quantity is set to 1

  let inc = document.createElement("button");
  inc.innerText = "+";

  // Base price for calculations
  let basePrice = parseInt(element.productPrice.replace("₹", ""));

  // Initialize quantity on load if not present
  element.quantity = element.quantity || 1;

  // Function to update displayed price and recalculate total quantity
  function updateQuantity(newCount) {
    element.quantity = newCount;
    count.innerText = newCount;
    itemPrice.innerText = "₹" + newCount * basePrice;
    calculateTotalQuantity(); // Update the total each time quantity changes
  }

  // function to decrement quantity and update price
  function decrementQuantity() {
    let currentCount = element.quantity;
    if (currentCount > 1) updateQuantity(currentCount - 1);
    itemPrice.innerText = "₹" + currentCount * basePrice;
  }
  // function to increment quantity and update price

  function incrementQuantity() {
    let currentCount = element.quantity;
    updateQuantity(currentCount + 1);
  }

  // Event Listeners for increment and decrement
  dec.addEventListener("click", decrementQuantity);
  inc.addEventListener("click", incrementQuantity);

  qty.append(dec, count, inc);
  itemOps.append(qty);

  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete Item";
  btnDelete.classList.add("btn-delete");
  btnDelete.addEventListener("click", function () {
    deleteItem(index);
  });

  itemOps.append(btnDelete);
  cartItems.append(cat, type, pr);
  document.querySelector("#cart-list").append(cartItems, itemOps);

  calculateTotalQuantity();
});
