const lastVisit = localStorage.getItem("lastVisit");

const currentTime = Date.now();

const oneDay = 24 * 60 * 60 * 1000;

let message;

if (!lastVisit) {
    message = "Welcome to Hogwarts! The magic begins now!";
} else {
    const daysElapsed = Math.floor((currentTime - lastVisit) / oneDay);

    if (daysElapsed < 1) {
        message = "Back so soon! The enchanted halls whisper of your return. What new magic awaits you?";
    } else {
        message = `Ah, a familiar face! You last roamed these corridors ${daysElapsed} ${daysElapsed === 1 ? "day" : "days"} ago. The Sorting Hat would be proud of your dedication!`;
    }
}

localStorage.setItem("lastVisit", currentTime);

document.getElementById("visitMessage").textContent = message;
