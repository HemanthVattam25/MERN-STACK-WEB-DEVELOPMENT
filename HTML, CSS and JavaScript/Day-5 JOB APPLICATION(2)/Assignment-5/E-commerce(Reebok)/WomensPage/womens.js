let btnCart = document.querySelectorAll(".btn-cart");
btnCart.forEach((btn) => {
  btn.addEventListener("click", cartEvent);
});

let cartArr = JSON.parse(sessionStorage.getItem("cartList")) || [];

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

  //   goCart.addEventListener;

  let category = this.parentElement.querySelector(".Category").innerText;
  let itemName = this.parentElement.querySelector(".itemName").innerText;
  let itemPrice = this.parentElement.querySelector(".price").innerText;
  let itemImg = this.parentElement.querySelector(".pic").src;

  let cartObj = {
    productCategory: category,
    productName: itemName,
    productPrice: itemPrice,
    productImg: itemImg,
  };

  console.log(cartObj);
  cartArr.push(cartObj);
  console.log(cartArr);

  sessionStorage.setItem("cartList", JSON.stringify(cartArr));
}
