let numbers = document.querySelectorAll("#keys > div");
let bag = "";

numbers.forEach((element) => {
  element.addEventListener("click", keyFunction);
  element.addEventListener("mouseenter", mouseEnter);
  element.addEventListener("mouseleave", mouseLeave);
});

function mouseEnter(event) {
  event.target.style.backgroundColor = " red";
}

function mouseLeave(event) {
  event.target.style.backgroundColor = "";
}

let scoreTag = document.querySelector("#score");
function keyFunction(event) {
  bag = bag + event.target.innerHTML;
  scoreTag.innerHTML = bag;
}

let btn = document.querySelector("#enter");
btn.addEventListener("click", clickEvent);

function clickEvent(event) {
  let score = parseInt(scoreTag.innerHTML);
  console.log(score);
  let min = parseInt(document.querySelector(".red-box > .value").innerHTML);
  let max = parseInt(document.querySelector(".green-box > .value").innerHTML);
  if (score < min) {
    document.querySelector(".red-box > .value").innerHTML = score;
  } else if (score > max) {
    document.querySelector(".green-box > .value").innerHTML = score;
  } else {
    score = score;
  }
  document.querySelector("#score").innerHTML = "#";
  bag = "";
}
