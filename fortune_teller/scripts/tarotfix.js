// Global variable to store tarot data
let tarotList = [];

// Fetch card data and store it in the tarotList variable
async function getCardData(){
   try {
       const response = await fetch(cardList);
       const data = await response.json();
       tarotList = data; // Store the data in the global variable
   } catch (error) {
       console.error("Failed to load tarot data:", error);
   }
}

// Display card result after clicking the deck button
function displayCardResult() {
    if (tarotList.length === 0) {
        console.error("No tarot data available.");
        return;
    }

    // Function to generate a random number within a given range
    function getRandomBetween(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    }

    // Choose a random index from the tarot list
    const i = getRandomBetween(0, tarotList.length - 1);

    // Update the card result display
    document.querySelector("#cardchosen").setAttribute("src", tarotList[i].logo);
    document.querySelector("#cardchosen").setAttribute("alt", tarotList[i].name);
    document.querySelector("#tarotsay").textContent = `Tarot says:`;
    document.querySelector("#name").textContent = tarotList[i].name;
    document.querySelector("#cardmeaning").textContent = tarotList[i].meaning;
    document.querySelector("#cardexplain").textContent = tarotList[i].description;

    // Show the div with the results
    document.getElementById("tarotresult").style.display = "block";
}

// Activate the card display function by clicking the card deck image
//document.querySelector("#deckbutton").addEventListener('click', displayCardResult);

document.querySelector("#deckbutton").addEventListener('click', function() {
    console.log("Button clicked!");
    displayCardResult();
});


// Fetch the tarot data when the page loads
getCardData();