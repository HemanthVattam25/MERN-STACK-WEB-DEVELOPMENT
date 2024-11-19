// 1. Define Tables and Menu

const tables = [
  { id: "table1", name: "Table-1", total: 0, items: {} },
  { id: "table2", name: "Table-2", total: 0, items: {} },
  { id: "table3", name: "Table-3", total: 0, items: {} },
];

const menuItems = [
  { id: "item-1", name: "Biryani", price: 299.0, type: "main-course" },
  { id: "item-2", name: "Chicken Majestic", price: 329.0, type: "Starters" },
  { id: "item-3", name: "Kunafa", price: 229.0, type: "main-course" },
];

// Rendering the document with content

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuItems);
  renderTable(tables);
});

// Rendering Menu Items
function renderMenu(menuItems) {
  const menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.id = item.id;
    menuItem.draggable = true; // Dragging items
    // store as attributes
    menuItem.dataset.name = item.name; // converts each data into data-set to access as attributes or pass through functions
    menuItem.dataset.type = item.type;
    menuItem.dataset.price = item.price;

    menuItem.innerHTML = `
    <h4> ${item.name}</h4>
    <p>${item.price.toFixed(2)} </p>
    <p>${item.type}</p>
    `;
    menuContainer.append(menuItem);
    //Drag start
    menuItem.addEventListener("dragstart", dragStart);
  });
}

function renderTable(tables) {
  const tableContainer = document.getElementById("tables-container");
  tableContainer.innerHTML = "";

  tables.forEach((table) => {
    const tableCard = document.createElement("div");
    tableCard.className = "table-card";
    tableCard.id = table.id;
    //console.log(Object.values(tables.items))
    tableCard.innerHTML = `
    <h4> ${table.name}</h4>
    <p>Total: ${table.total.toFixed(2)} </p>
    <p>Items: ${Object.values(table.items).reduce(
      // to give total count of items
      (a, b) => a + b.quantity,
      0
    )} </p>`;

    tableCard.addEventListener("click", () => showOrderDetails(table.id));
    tableContainer.append(tableCard);
    // Drag over
    tableCard.addEventListener("dragover", dragOver);
    // Drop Items
    tableCard.addEventListener("drop", dropItem);
  });
}

function showOrderDetails() {}
// Drag Start
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id); // To store the data of selected event triggered
}

//Drag over

function dragOver(e) {
  e.preventDefault(); // allow drop
}

// Drop

function dropItem(e) {
  // console.log("dropped");
  e.preventDefault();
  const itemId = e.dataTransfer.getData("text"); // To get Data
  const itemElement = document.getElementById(itemId); //
  const itemName = itemElement.dataset.name;
  const itemPrice = parseFloat(itemElement.dataset.price);
  const tableId = e.target.id;

  if (itemName && itemPrice && tables.find((table) => table.id === tableId)) {
    addItemToTable(tableId, itemName, itemPrice);
  }
}
// Adding on dragging
function addItemToTable(tableId, itemName, itemPrice) {
  const table = tables.find((table) => table.id === tableId);
  if (!table.items[itemName]) {
    table.items[itemName] = { quantity: 0, price: itemPrice };
  }
  //console.log(tables);
  table.items[itemName].quantity++;
  table.total += itemPrice;

  // Update table card UI
  const tableCard = document.getElementById(tableId);
  tableCard.querySelector("p").textContent = `Total: ${table.total.toFixed(2)}`;
  tableCard.querySelector(
    "p:nth-of-type(2)"
  ).innerText = `Items: ${Object.values(table.items).reduce(
    (a, b) => a + b.quantity,
    0
  )}`;
}
