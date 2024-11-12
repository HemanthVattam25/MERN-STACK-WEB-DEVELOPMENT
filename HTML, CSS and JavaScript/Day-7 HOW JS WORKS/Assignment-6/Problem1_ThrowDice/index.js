let btn = document.getElementById("roll");
btn.addEventListener("click", rollEvent);

// Giving Random number to div using Math.random method
function diceNumber(max) {
  return Math.ceil(Math.random() * 6);
}

//Function to roll Button
function rollEvent() {
  let m1 = document.getElementById("member-1");
  let m2 = document.getElementById("member-2");
  let m3 = document.getElementById("member-3");

  // Assigning random dice number to each member
  m1.innerText = diceNumber(6);
  m2.innerText = diceNumber(6);
  m3.innerText = diceNumber(6);

  // Checking the Maximum dice number
  let max = Math.max(m1.innerText, m2.innerText, m3.innerText);
  //Checking the Minimum dice number
  let min = Math.min(m1.innerText, m2.innerText, m3.innerText);

  // Giving Colors based on min, max and equal numbers and announcing the winner in div
  let numbers = [m1, m2, m3];
  numbers.forEach((element, index) => {
    function equalCheck() {
      let b = numbers.length;
      for (i = 0; i < b; i++) {
        for (j = i + 1; j < b; j++)
          if (numbers[i].innerText == numbers[j].innerText) {
            numbers[i].style.backgroundColor = "blue";
            numbers[j].style.backgroundColor = "blue";
          }
      }
    }
    if (max == element.innerText) {
      element.style.backgroundColor = "green";
      document.querySelector("#winner").innerText =
        "Winner is : Member " + (index + 1);
      equalCheck();
    }
    if (min == element.innerText) {
      element.style.backgroundColor = "red";
      equalCheck();
    }
    if (element.innerText != min && element.innerText != max) {
      element.style.backgroundColor = "yellow";
      equalCheck();
    }
  });
}
