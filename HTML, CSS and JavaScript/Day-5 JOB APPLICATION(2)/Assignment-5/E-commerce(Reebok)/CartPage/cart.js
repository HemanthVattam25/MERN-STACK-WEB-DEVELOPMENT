let cartArr = JSON.parse(sessionStorage.getItem("cartList")) || [];

cartArr.forEach((element) => {
  let cartItems = document.createElement("div");
  cartItems.setAttribute("class", "cart-items");

  // Each Name in div
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

  let pr = document.createElement("div");
  pr.setAttribute("class", "pr");
  pr.innerText = "Item Price: ";

  let itemPrice = document.createElement("h4");
  itemPrice.setAttribute("class", "price");
  itemPrice.innerText = element.productPrice;

  pr.append(itemPrice);

  cartItems.append(cat, type, pr);
  document.querySelector("#cart-list").append(cartItems);
});
