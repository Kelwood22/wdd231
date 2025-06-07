

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;

//document.getElementById("timestamp").value = new Date().toISOString();
