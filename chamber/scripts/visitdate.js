const lastVisit = localStorage.getItem("lastVisit");

const currentTime = Date.now();

const oneDay = 24 * 60 * 60 * 1000;

let message;

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const daysElapsed = Math.floor((currentTime - lastVisit) / oneDay);

    if (daysElapsed < 1) {
        message = "Back so soon! Awesome!";
    } else {
        message = `You last visited ${daysElapsed} ${daysElapsed === 1 ? "day" : "days"} ago. Welcome back!`;
    }
}

localStorage.setItem("lastVisit", currentTime);

document.getElementById("visitMessage").textContent = message;
