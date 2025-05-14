
const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
    //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");
        let protrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        protrait.setAttribute("src", prophet.imageurl);
        protrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
        protrait.setAttribute("loading", "lazy");
        protrait.setAttribute("width", "340");
        protrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthdate)
        card.appendChild(birthplace);
        card.appendChild(protrait);

        cards.appendChild(card);
    });
}
