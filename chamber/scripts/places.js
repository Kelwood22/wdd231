
const placesContainer = document.querySelector("#places");

async function getCardData() {
    const response = await fetch("data/places.json");
    const data = await response.json();
    displayItems(data.places);
}

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement("div");

        const thephoto = document.createElement("img");
        thephoto.src = `images/${x.photo}`;
        thephoto.alt = `Image of ${x.name}`;
        thephoto.loading = "lazy";
        thephoto.width = 300;
        thephoto.height = 200;
        thecard.appendChild(thephoto);

        const thetitle = document.createElement("h2");
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        const theaddress = document.createElement("address");
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);

        const thedesc = document.createElement("p");
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        const learnMoreBtn = document.createElement("button");
        learnMoreBtn.innerText = "Learn More";
        learnMoreBtn.classList.add("learn-more-btn");
        learnMoreBtn.addEventListener("click", () => {
            alert(`More information about ${x.name} will be available soon!`);
        });

        thecard.appendChild(learnMoreBtn);
        placesContainer.appendChild(thecard);

    });
}

getCardData();