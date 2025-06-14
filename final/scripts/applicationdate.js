
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("applicationForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            const timestampElement = document.getElementById("timestamp");
            if (timestampElement) {
                timestampElement.value = new Date().toISOString();
            } else {
                console.error("Element with ID 'timestamp' not found.");
            }
        });
    } else {
        console.warn("Skipping timestamp setup: No form found on this page.");
    }
});

document.getElementById("applicationForm").addEventListener("submit", (event) => {
    const timestampElement = document.getElementById("timestamp");
    timestampElement.value = new Date().toISOString();
});
