const cardList = 'json/tarot.json';
let tarotList = []; // Global variable

async function getCardData() {
    try {
        const response = await fetch(cardList);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Assign the "tarot" array from the JSON to tarotList
        tarotList = data.tarot;

        console.log("Tarot list successfully loaded:", tarotList);

        if (!Array.isArray(tarotList) || tarotList.length === 0) {
            console.error("Error: 'tarot' array is empty or missing in JSON.");
        }
    } catch (error) {
        console.error("Error fetching tarot JSON:", error);
    }
}

async function displayCardResult() {
    if (!Array.isArray(tarotList) || tarotList.length === 0) {
        console.error("Error: tarotList is not populated or empty.");
        return;
    }

    function getRandomBetween(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    }

    const i = getRandomBetween(0, tarotList.length - 1);

    if (!tarotList[i] || !tarotList[i].logo) {
        console.error(`Error: tarotList[${i}] is undefined or missing required properties.`);
        return;
    }

    let cardchosen = document.querySelector("#cardchosen");
    cardchosen.setAttribute("src", `${tarotList[i].logo}`);
    cardchosen.setAttribute("alt", `Image of ${tarotList[i].name}`);
    cardchosen.setAttribute("loading", "lazy");

    document.querySelector("#name").textContent = tarotList[i].name;
    document.querySelector("#cardmeaning").textContent = tarotList[i].meaning;
    document.querySelector("#cardexplain").textContent = tarotList[i].description;

    document.getElementById("tarotresult").style.display = "block";
}

function resetDeck() {
    // Hide the tarot result section
    document.getElementById("tarotresult").style.display = "none";

    // Reset displayed card and other content
    document.querySelector("#cardchosen").setAttribute("src", "");
    document.querySelector("#cardchosen").setAttribute("alt", "");
    document.querySelector("#name").textContent = "";
    document.querySelector("#cardmeaning").textContent = "";
    document.querySelector("#cardexplain").textContent = "";

    console.log("Deck has been reset. You can shuffle and draw a new card.");
}

document.querySelector("#submit").addEventListener('click', async () => {
    if (tarotList.length === 0) {
        console.log("Fetching tarot data...");
        await getCardData();
    }

    if (tarotList.length === 0) {
        console.error("Error: Tarot data is still empty after fetch.");
        return;
    }

    displayCardResult();
});

document.querySelector("#resetbutton").addEventListener('click', resetDeck);

getCardData(); // Fetch data on page load