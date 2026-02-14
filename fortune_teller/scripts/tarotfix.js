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
    if (!tarotList.length) return;

    const i = Math.floor(Math.random() * tarotList.length);
    const card = tarotList[i];

    const tarotImg = document.querySelector("#tarotcard");
    const wrapper = document.querySelector(".card-wrapper");

    // запускаем переворот
    wrapper.classList.add("flip");

    // меняем картинку в середине анимации
    setTimeout(() => {
        tarotImg.src = card.logo;
        tarotImg.alt = `Image of ${card.name}`;
    }, 400); // половина от 0.8s

    document.querySelector("#name").textContent = card.name;
    document.querySelector("#cardmeaning").textContent = card.meaning;
    document.querySelector("#cardexplain").textContent = card.description;

    document.querySelector("#tarotresult").hidden = false;
}

function resetDeck() {
    const tarotImg = document.querySelector("#tarotcard");
    const wrapper = document.querySelector(".card-wrapper");

    wrapper.classList.remove("flip");

    setTimeout(() => {
        tarotImg.src = "images/tarotpic/back.jpg";
        tarotImg.alt = "tarot card back";
    }, 400);

    document.querySelector("#tarotresult").hidden = true;
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