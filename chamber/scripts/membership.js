
const membership = [
    {
        title: "Non-Profit Membership Level",
        description: "This membership level is for non-profit organizations. It provides access to basic resources and networking opportunities.",
        benefits: [
            "Access to basic resources",
            "Networking opportunities",
            "Monthly newsletters"
        ],
        price: 50,
        duration: "1 year",

    },
    {
        title: "Bronze Membership Level",
        description: "This membership level is for small businesses. It includes all non-profit benefits plus additional resources and discounts.",
        benefits: [
            "All non-profit benefits",
            "Access to exclusive webinars",
            "Discounts on events and workshops"
        ],
        price: 100,
        duration: "1 year",
    },
    {
        title: "Silver Membership Level",
        description: "This membership level is for medium-sized businesses. It includes all bronze benefits plus additional resources and priority support.",
        benefits: [
            "All bronze benefits",
            "Priority support",
            "Access to premium resources"
        ],
        price: 200,
        duration: "1 year",
    },
    {
        title: "Gold Membership Level",
        description: "This membership level is for large businesses. It includes all silver benefits plus additional resources and personalized support.",
        benefits: [
            "All silver benefits",
            "Personalized support",
            "Exclusive access to events"
        ],
        price: 500,
        duration: "1 year",
    }
]

const membershipCards = document.getElementById('membershipCards');

function displayMemberships() {
    membershipCards.innerHTML = '';

    membership.forEach(level => {
        const membershipCard = document.createElement('div');
        membershipCard.classList.add('membershipCard');

        const title = document.createElement('h3');
        title.textContent = level.title;
        membershipCard.appendChild(title);

        const learnMoreButton = document.createElement('button');
        learnMoreButton.textContent = 'Learn More';
        learnMoreButton.classList.add('learnMoreButton');
        learnMoreButton.addEventListener('click', () => {
            displayMembershipDetails(level);
        });
        membershipCard.appendChild(learnMoreButton);

        membershipCard.addEventListener('click', () => {
            displayMembershipDetails(level);
        });

        membershipCards.appendChild(membershipCard);
    });
}

displayMemberships();

function displayMembershipDetails(level) {
    const membershipDetails = document.getElementById('membershipDetails');
    membershipDetails.innerHTML = `
        <button id="closeModal">X</button>
        <h2> ${ level.title }</h2>
        <p>${level.description}</p>
        <h3>Benefits:</h3>
        <ul>
            ${level.benefits.map(benefit => `<li>${benefit}</li>`).join('')}    
        <p>Price: $${level.price}</p>
        <p>Duration: ${level.duration}</p>
    `;

    membershipDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        membershipDetails.close();
    });  
}


