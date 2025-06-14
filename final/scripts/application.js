document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#applicationForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevents the default form submission

            const formData = new FormData(form);
            const queryString = new URLSearchParams(formData).toString();

            window.location.href = `thankyou.html?${queryString}`; // Redirects with form data
        });
    }
});