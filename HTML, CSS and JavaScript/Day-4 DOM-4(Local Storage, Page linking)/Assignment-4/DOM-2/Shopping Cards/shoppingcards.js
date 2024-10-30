var data = [
  {
    imgUrl:
      "https://th.bing.com/th/id/OIP.ibkjV35ebsIcLl0Hb8dTGQHaIa?rs=1&pid=ImgDetMain",
    name: "LATEST LADY’S HANDBAG",
    price: "$25.00",
    strikedOffPrice: "$95.00",
  },
  {
    imgUrl:
      "https://st.depositphotos.com/1706719/1267/i/450/depositphotos_12674494-stock-photo-blue-jeans-isolated-on-white.jpg",
    name: "LATEST MEN’S JEANS ",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/OIP.2d6tc6uG5uYH2BdeJPfYfgAAAA?rs=1&pid=ImgDetMain",
    name: "LATEST MEN’S WATCH",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/OIP.Svb8g3GECYLp5fCTeZBA_wHaHa?rs=1&pid=ImgDetMain",
    name: "LATEST MEN’S SNEAKER",
    price: "$35.00",
    strikedOffPrice: "$100.00",
  },
];
let container = document.createElement("div");
container.setAttribute("class", "container");
data.map((Element) => {
  let card = document.createElement("div");
  card.setAttribute("id", "card");
  let image = document.createElement("img");
  image.src = Element.imgUrl;
  let name = document.createElement("p");
  name.innerText = Element.name;
  let pDiv = document.createElement("div");
  pDiv.setAttribute("id", "price");
  let price = document.createElement("h4");
  price.innerText = Element.price;
  let lastPrice = document.createElement("p");
  lastPrice.innerText = Element.strikedOffPrice;
  lastPrice.style.textDecoration = "line-through";
  pDiv.append(price, lastPrice);

  card.append(image, name, pDiv);
  container.append(card);
  document.querySelector("body").append(container);
});
