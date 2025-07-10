const businessDir = 'json/data.json';

getSpotlightData();

async function getSpotlightData() {
    try {
        const response = await fetch(businessDir);
        const data = await response.json();
        const allBusinesses = data.business;

        // 1. Фильтруем только "gold"
        const goldMembers = allBusinesses.filter(biz => biz.level === "gold");

        // 2. Перемешиваем и берём 3 случайных
        const shuffled = goldMembers.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        // 3. Заполняем карточки spotlight1, 2, 3
        selected.forEach((biz, index) => {
            const num = index + 1;

            const logo = document.querySelector(`#logo${num}`);
            const motto = document.querySelector(`#motto${num}`);
            const phone = document.querySelector(`#tel${num}`);
            const web = document.querySelector(`#web${num}`);

            if (logo) {
                logo.setAttribute("src", biz.logo);
                logo.setAttribute("alt", `Logo of ${biz.name}`);
                logo.setAttribute("loading", "lazy");
            }

            if (motto) motto.textContent = biz.motto || "";
            if (phone) phone.textContent = biz.phone;

            if (web) {
                web.innerHTML = biz.web;
                web.setAttribute("href", biz.web);
            }
        });
    } catch (error) {
        console.error("Ошибка при загрузке или обработке JSON:", error);
    }
}

