async function getMembers() {
    const response = await fetch("data/members.json");
    if (response.ok) {
        const data = await response.json();
        return data.members;
    } else {
        console.error("Failed to fetch members data");
        return [];
    }   
}

async function getSpotlightMembers() {
    const members = await getMembers();
    return members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");

}

function getRandomSpotlights(members, count = 3) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

async function displaySpotlights() {
    const members = await getSpotlightMembers();
    const spotlights = getRandomSpotlights(members, 3);

    const spotlightContainer = document.getElementById("spotlight-container");
    spotlightContainer.innerHTML = "";

    spotlights.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        spotlightContainer.appendChild(card);
    });
}

displaySpotlights();