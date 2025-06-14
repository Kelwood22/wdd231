document.addEventListener("DOMContentLoaded", () => {
    const resultsElement = document.querySelector("#results");

    if (!resultsElement) {
        console.error("Element with ID 'results' not found.");
        return;
    }

    const myInfo = new URLSearchParams(window.location.search);

    const first = myInfo.get("first") || "Not provided";
    const last = myInfo.get("last") || "Not provided";
    const address = myInfo.get("address") || "Not provided";
    const city = myInfo.get("city") || "Not provided";
    const state = myInfo.get("state") || "Not provided";
    const postal = myInfo.get("postal") || "Not provided";
    const country = myInfo.get("country") || "Not provided";
    const timestamp = myInfo.get("timestamp") || "Not recorded";

    resultsElement.innerHTML = `
        <h2>Thank you for applying to Hogwarts!</h2>
        <p>Welcome ${first} ${last}</p>
        <p>Your address: ${address}, ${city}, ${state}, ${postal}, ${country}</p>
        <p>Timestamp: ${timestamp}</p>
        <p>We will be in touch soon! Expect an owl within 30 days.</p>
    `;
});