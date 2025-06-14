document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("data/courses.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Full JSON data:", data);

        if (!data.courses) {
            throw new Error("No courses found in JSON data.");
        }

        displayCourses(data.courses);
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
});

function displayCourses(courses) {
    console.log("Displaying courses...");

    let courseCardsContainer = document.getElementById("courseCards");
    if (!courseCardsContainer) {
        console.error("Element with ID 'courseCards' not found.");
        return;
    }

    courseCardsContainer.innerHTML = "";


    courses.forEach(course => {
        console.log("Creating course card for: ", course.name);

        const courseCard = document.createElement('div');
        courseCard.classList.add('courses');

        const image = document.createElement('img');
        image.src = course.image;
        image.alt = course.name;
        image.classList.add('courseImage');
        courseCard.appendChild(image);

        const name = document.createElement('h3');
        name.textContent = course.name;
        courseCard.appendChild(name);

        const learnMoreButton = document.createElement('button');
        learnMoreButton.textContent = 'Learn More';
        learnMoreButton.classList.add('learnMoreButton');
        learnMoreButton.addEventListener('click', () => {
            displayCourseDetails(course);
        });
        courseCard.appendChild(learnMoreButton);

        courseCard.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        courseCardsContainer.appendChild(courseCard);
    });
}

function displayCourseDetails(course) {
    const courseDetails = document.getElementById('courseDetails');

    if (!courseDetails) {
        console.error("Element with ID 'courseDetails' not found.");
        return;
    }

    courseDetails.innerHTML = `
        <button id="closeModal">X</button>
        <h2> ${course.name}</h2>
        <p>Instructor: ${course.instructor}</p>
        <p>${course.description}</p> 
        <p>Credits: ${course.credits}</p>
        <p>Prerequisites: ${course.prerequisites}</p>
    `;

    courseDetails.showModal();

    console.log("Close button found:", document.getElementById("closeModal"));

    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("courseDetails").close();
    });
}


