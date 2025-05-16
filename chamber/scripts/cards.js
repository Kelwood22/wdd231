
const cards = document.querySelector("#cards-container");

async function getCardData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    return data.members;

    displayCards(data.members);
}

getCardData();

const displayCards = (members, view) => {
    const gridContainer = document.querySelector("#cards-container");
    const listContainer = document.querySelector("#directory-list tbody");
    
    if (view === "grid") {
        gridContainer.innerHTML = "";
        members.forEach(member => {
            let card = document.createElement("section");
            card.classList.add("card");

            let name = document.createElement("h2");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let website = document.createElement("p");
            let image = document.createElement("img");


            image.setAttribute("src", member.image);
            image.setAttribute("alt", `Image of ${member.name}`);
            image.setAttribute("loading", "lazy");
            image.setAttribute("width", "200");
            image.setAttribute("height", "200");

            name.textContent = `${member.name}`;
            address.textContent = `${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}`;
            phone.textContent = `${member.phone}`;
            website.textContent = `${member.website}`;

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);

            gridContainer.appendChild(card);
        });
    } else if (view === "list") {
        listContainer.innerHTML = "";
        members.forEach((member, index) => {
            let row = document.createElement("tr");
            row.classList.add(index % 2 === 0 ? "even-row" : "odd-row");

            row.innerHTML = `
                <td>${member.name}</td>
                <td>${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}</td>
                <td>${member.phone}</td>
                <td><a href="${member.website}" target="_blank">${member.website}</a></td>
            `;
            listContainer.appendChild(row);
        });
    }
};


    

