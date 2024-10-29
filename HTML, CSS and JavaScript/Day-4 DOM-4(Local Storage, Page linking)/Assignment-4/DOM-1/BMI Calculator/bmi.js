let form = document.querySelector("form");
form.addEventListener("submit", formResult);

function formResult() {
  event.preventDefault();
  let weight = parseFloat(document.querySelector("#weight").value);

  let height = parseFloat(document.querySelector("#height").value);

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  //   let bmiValue = eval(bmi);
  let p = document.createElement("p");
  if (bmi <= 18.4) {
    p.innerText = "Your BMI is " + bmi + ", Which means You are Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    p.innerText = "Your BMI is " + bmi + ", Which means You are Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    p.innerText = "Your BMI is " + bmi + ", Which means You are Overweight";
  } else {
    p.innerText = "Your BMI is " + bmi + ", Which means You are Obese";
  }

  document.querySelector("body").append(p);
}
