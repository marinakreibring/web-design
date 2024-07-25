const cardList = 'json/tarot.json';

let tarotList = []; // Переменная для хранения данных карт

async function getCardData(){
    const response = await fetch(cardList);
    const data = await response.json();
    tarotList = data; // Сохраняем данные в переменную
    setupCardClick(); // Настройка клика после загрузки данных
}

function setupCardClick() {
    let cardimg = document.getElementById("clickCard");
    cardimg.addEventListener("click", displayCardResult);
}

function displayCardResult(){
    // Функция для генерации случайного числа в заданном диапазоне
    function getRandomBetween(min, max) {
        return Math.floor(min + Math.random()*(max - min + 1));
    };

    // Выбираем случайный индекс
    const i = getRandomBetween(0, tarotList.length - 1);

    // Заполняем элементы в секции tarotresult
    let cardchosen = document.querySelector("#cardchosen");
    cardchosen.setAttribute("src", `${tarotList[i].logo}`);
    cardchosen.setAttribute("alt", `Logo of ${tarotList[i].name}`);
    cardchosen.setAttribute("loading", "lazy"); 
    document.querySelector("#tarotsay").textContent = `Tarot say:`;
    document.querySelector("#name").textContent = `${tarotList[i].name}`;
    document.querySelector("#cardmeaning").textContent = `${tarotList[i].meaning}`;
    document.querySelector("#cardexplain").textContent = `${tarotList[i].description}`;

    // Показываем div с результатами
    document.getElementById("tarotresult").style.display = "block";
}

// Запускаем функцию для получения данных карт
getCardData();