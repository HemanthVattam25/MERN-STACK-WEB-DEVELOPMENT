// let cartArr = JSON.parse(sessionStorage.getItem("cartList")) || [];

// Function to calculate and display total quantity and total price
function updateBill() {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartArr.forEach((item) => {
    const itemQuantity = item.quantity || 1;
    const itemPrice = parseInt(item.productPrice.replace("₹", ""));

    totalQuantity += itemQuantity;
    totalPrice += itemQuantity * itemPrice;
  });

  document.querySelector(
    "#total-quantity"
  ).innerText = `Total Items: ${totalQuantity}`;
  document.querySelector(
    "#total-price"
  ).innerText = `Total Price: ₹${totalPrice}`;
}

// // Function to delete an item from the cart
// function deleteItem(index) {
//   cartArr.splice(index, 1);
//   sessionStorage.setItem("cartList", JSON.stringify(cartArr));
//   window.location.reload();
// }

// // Initialize cart items
// cartArr.forEach((element, index) => {
//   let cartItems = document.createElement("div");
//   cartItems.setAttribute("class", "cart-items");

  // Other elements setup as in your previous code
  // ...

  // Base price for calculations
  let basePrice = parseInt(element.productPrice.replace("₹", ""));

  // Initialize quantity on load if not present
  element.quantity = element.quantity || 1;

  // Function to update displayed price and recalculate total quantity and price
  function updateQuantity(newCount) {
    element.quantity = newCount;
    count.innerText = newCount;
    itemPrice.innerText = "₹" + newCount * basePrice;
    updateBill(); // Update the bill each time quantity changes
  }

  // Increment and decrement functions
  function decrementQuantity() {
    let currentCount = element.quantity;
    if (currentCount > 1) updateQuantity(currentCount - 1);
  }

  function incrementQuantity() {
    let currentCount = element.quantity;
    updateQuantity(currentCount + 1);
  }

  // Event listeners for increment and decrement
  dec.addEventListener("click", decrementQuantity);
  inc.addEventListener("click", incrementQuantity);

  // Append cart item details to cartItems container
  document.querySelector("#cart-list").append(cartItems, itemOps);
});

// Call updateBill initially to set the total at page load
updateBill();
