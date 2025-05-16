
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards-container");

async function toggleView(view) {
    const gridContainer = document.querySelector("#cards-container");
    const listContainer = document.querySelector("#directory-list");  

    if (view === "grid") {
        gridContainer.style.display = "grid";
        listContainer.style.display = "none";
    } else {
        gridContainer.style.display = "none";
        listContainer.style.display = "table";
    }
    
    const members = await getCardData();
    displayCards(members, view);
}

gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

async function initializeView() {
    const members = await getCardData();
    displayCards(members, "grid");
}

initializeView();