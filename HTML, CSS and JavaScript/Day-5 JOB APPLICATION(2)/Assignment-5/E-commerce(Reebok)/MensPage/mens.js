let btnCart = document.querySelectorAll(".btn-cart");
btnCart.forEach((btn) => {
  btn.addEventListener("click", cartEvent);
});

function cartEvent() {
  console.log("clicked");
  window.location.href = "../CartPage/cart.html";
}
