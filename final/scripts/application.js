document.addEventListener("DOMContentLoaded", () => {
    const resultsElement = document.querySelector("#results");

    if (resultsElement) {
        const myInfo = new URLSearchParams(window.location.search);

        console.log("Retrieved Form Data:");
        console.log("First Name:", myInfo.get("first"));
        console.log("Last Name:", myInfo.get("last"));
        console.log("Address:", myInfo.get("address"));
        console.log("City:", myInfo.get("city"));
        console.log("State:", myInfo.get("state"));
        console.log("Postal Code:", myInfo.get("postal"));
        console.log("Country:", myInfo.get("country"));
        console.log("Timestamp:", myInfo.get("timestamp"));

        
        
        const first = myInfo.get("first") || "Not provided";
        const last = myInfo.get("last") || "Not provided";
        const address = myInfo.get("address") || "Not provided";
        const city = myInfo.get("city") || "Not provided";
        const state = myInfo.get("state") || "Not provided";
        const postal = myInfo.get("postal") || "Not provided";
        const country = myInfo.get("country") || "Not provided";
        const timestamp = myInfo.get("timestamp") || "Not recorded";

        resultsElement.innerHTML = `
            <h2>Thank you for applying to the Hogwarts School of Witchcraft and Wizardry!</h2>
            <p>Welcome ${first} ${last}</p>
            <p>Your address: ${address}, ${city}, ${state}, ${postal}, ${country}</p>
            <p>Timestamp: ${timestamp}</p>
            <p>We will be in touch soon! Expect an owl within 30 days.</p>
        `;
    } else {
        console.error("Element with ID 'results' not found.");
    }
});