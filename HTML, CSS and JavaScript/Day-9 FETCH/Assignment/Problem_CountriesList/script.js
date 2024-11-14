// Initializing and fetching countries list  with countries async()
let countryList;
async function countries() {
  try {
    let data = await fetch("https://restcountries.com/v3.1/all");
    countryList = await data.json();
    displayCountries(countryList);
  } catch (error) {
    console.log(error);
  }
}
// Displaying countries with displayCountries()
function displayCountries(list) {
  document.querySelector("#block").innerHTML = "";

  list.map((element) => {
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    let countryName = document.createElement("h3");
    countryName.innerText = element.name.common;
    let flagImg = document.createElement("img");
    flagImg.src = element.flags.png;
    let population = document.createElement("p");
    population.innerHTML =
      " <strong> Population: </strong>" + element.population;
    let region = document.createElement("p");
    region.innerHTML = "<strong> Region: </strong>" + element.region;
    let capital = document.createElement("p");
    capital.innerHTML = "<strong> Capital: </strong>" + element.capital;
    container.append(flagImg, countryName, population, region, capital);
    document.querySelector("#block").append(container);
  });
}

function sortByPopulation() {
  let selectedValue = document.querySelector("#sort").value;
  if (selectedValue === "lth") {
    countryList.sort((a, b) => {
      return a.population - b.population;
    });
  }
  if (selectedValue == "htl") {
    countryList.sort((a, b) => {
      return b.population - a.population;
    });
  }
  displayCountries(countryList);
}

function filterByRegion() {
  let filteredValue = document.querySelector("#filter").value;
  let filteredArray = countryList.filter((elem) => {
    return elem.region === filteredValue;
  });
  displayCountries(filteredArray);
}
countries();
