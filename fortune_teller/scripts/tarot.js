//the code must display the prediction after user clicks on the card deck image, the data comes from json file
const cardList = 'json/tarot.json';

getCardData();

async function getCardData(){
   const response = await fetch(cardList);
   const data = await response.json();
   getCards (data);    
}

async function displayCardResult(){


    //function to generate random number in given range
    function getRandomBetween(min, max) {
        return Math.floor(min + Math.random()*(max - min + 1))
    };
    //choose random index 
    const i = getRandomBetween(0, tarotList.length-1);

    //fill spans for elements in the spotlight section

    let cardchosen = document.querySelector("#cardchosen");
    cardchosen.setAttribute("src", `${tarotList[i].logo}`);
    logo.setAttribute("alt", `Logo of ${tarotList[i].name}`);
    logo.setAttribute("loading", "lazy"); 
    document.querySelector("#tarotsay").textContent = `Tarot say:`;
    document.querySelector("#name").textContent = `${tarotList[i].name}`;
    document.querySelector("#cardmeaning").textContent = `${tarotList[i].meaning}`;
    document.querySelector("#cardexplain").textContent = `${tarotList[i].description}`;
    // Показываем div с результатами
    document.getElementById("tarotresult").style.display = "block";
}
//activate function by clicking card image
document.querySelector("#deckbutton").addEventListener('click', displayCardResult);



