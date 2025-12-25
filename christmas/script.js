let lang = 'en';

const langButtons = document.querySelectorAll('[data-lang]');
const header = document.querySelector('header');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    lang = btn.dataset.lang;
    languageScreen.classList.remove('active');
    startScreen.classList.add('active');
  });
});

const text = {
  en: {
    line1: "This year has been challenging. It has tested us.",
    line2: "There was a lot of uncertainty, doubt, and tough decisions.",
    line3: "Sometimes it felt like there was hardly any strength left.",  
    line4: "But we were there for each other. And that changed everything.",
    line5: "With you, it was easier to get through the tough moments.",
    line6: "Thanks to you, I kept moving forward.",
    line7: "This year has taught me to appreciate the present and the real.",
    line8: "Together, we were stronger than it seemed.",
    line9: "Even when the world was unstable, we had the most important thing — faith in each other.",
    line10: "I believe that something new and good lies ahead of us.",
    line11: "The new year will bring growth, light, and new opportunities.",
    line12: "Thank you for everything!",
    line13: "I am very glad to have such friends in my life.",
    line14: "Merry Christmas and a Happy New Year.",
  },
  ru: {
    line1: "Этот год был непростым. Он проверял на прочность.",
    line2: "Было много неопределённости, сомнений и сложных решений.",
    line3: "Иногда казалось, что сил почти не осталось.",
    line4: "Но мы были рядом. И это меняло всё.",
    line5: "С тобой было легче переживать трудные моменты.",
    line6: "Благодаря тебе я продолжала идти дальше.",
    line7: "Этот год научил ценить настоящее и живое.",
    line8: "Вместе мы оказались сильнее, чем казалось.",
    line9: "Даже когда мир был нестабильным, у нас оставалось главное — вера друг в друга.",
    line10: "Я верю, что впереди — новое и хорошее.",
    line11: "Новый год принесёт рост, свет и новые возможности.",
    line12: "Спасибо тебе за всё!",
    line13: "Я очень рада, что в моей жизни есть такие друзья.",
    line14: "Хорошего Рождества и счастливого Нового года.",
  },
  de: {
    line1: "Dieses Jahr war nicht einfach. Es hat uns auf die Probe gestellt.",
    line2: "Es gab viel Unsicherheit, Zweifel und schwierige Entscheidungen.",
    line3: "Manchmal schien es, als ob kaum noch Kraft übrig wäre.",  
    line4: "Aber wir waren füreinander da. Und das hat alles verändert.",
    line5: "Mit dir fiel es leichter, schwierige Momente zu überstehen.",
    line6: "Dank dir bin ich weitergegangen.",  
    line7: "Dieses Jahr hat mich gelehrt, das Hier und Jetzt zu schätzen.",
    line8: "Gemeinsam waren wir stärker, als es schien.",
    line9: "Selbst wenn die Welt instabil war, blieb uns das Wichtigste – der Glaube aneinander.",
    line10: "Ich glaube daran, dass vor uns etwas Neues und Gutes liegt.",
    line11: "Das neue Jahr wird Wachstum, Licht und neue Möglichkeiten bringen.",
    line12: "Danke dir für alles!",
    line13: "Ich bin sehr froh, solche Freunde in meinem Leben zu haben.",
    line14: "Frohe Weihnachten und ein glückliches neues Jahr.",
  }
};
const scenes = [
  { img: 'images/img1.jpg', textKey: '' },
  { img: 'images/img2.jpg', textKey: 'line1' },
  { img: 'images/img3.jpg', textKey: 'line2' },
  { img: 'images/img4.webp', textKey: 'line3' },
  { img: 'images/img5.jpg', textKey: 'line4' },
  { img: 'images/img6.jpg', textKey: 'line5' },
  { img: 'images/img7.jpg', textKey: 'line6' },
  { img: 'images/img8.webp', textKey: 'line7' },
  { img: 'images/img9.jpg', textKey: 'line8' },
  { img: 'images/img10.webp', textKey: 'line9' },
  { img: 'images/img11.jpg', textKey: 'line10' },
  { img: 'images/img12.jpg', textKey: 'line11' },
  { img: 'images/img13.jpg', textKey: 'line12' },
  { img: 'images/img14.webp', textKey: 'line13' },
  { img: 'images/img15.avif', textKey: 'line14' },
];
const sceneImg = document.getElementById('scene-image');
const sceneText = document.getElementById('scene-text');

const languageScreen = document.getElementById('language-screen');
const startScreen = document.getElementById('start-screen');
const clipScreen = document.getElementById('clip-screen');
const audio = document.getElementById('music');

function showScene(index, instant = false) {
  if (!scenes[index]) return;

  if (instant) {
    sceneImg.style.opacity = 1;
    sceneImg.src = scenes[index].img;
    sceneText.textContent = scenes[index].textKey
      ? text[lang][scenes[index].textKey]
      : '';
    return;
  }
  sceneText.classList.toggle(
    'scene-text--final',
    index === scenes.length - 1
  );
  sceneImg.style.opacity = 0;

  setTimeout(() => {
    sceneImg.src = scenes[index].img;
    sceneText.textContent = scenes[index].textKey
      ? text[lang][scenes[index].textKey]
      : '';
    sceneImg.style.opacity = 1;
  }, 500);
}


let currentScene = 0;
const sceneDuration = 10000; // 10 секунд

function startClip() {
  currentScene = 0;
  showScene(currentScene, true);
  createSnow();

  const interval = setInterval(() => {
    currentScene++;

    if (currentScene < scenes.length) {
      showScene(currentScene);
    } else {
      clearInterval(interval);

      // вернуть header в конце клипа
      setTimeout(() => {
        header.classList.remove('hidden');
      }, sceneDuration);
    }
  }, sceneDuration);
}


function createSnow() {
  const snowContainer = document.getElementById('snow');
  const snowflakeCount = 30; // очень нежно

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = 8 + Math.random() * 6 + 's';
    snowflake.style.fontSize = 10 + Math.random() * 14 + 'px';
    snowflake.style.opacity = 0.3 + Math.random() * 0.4;

    snowContainer.appendChild(snowflake);
  }
}
// показать первую картинку сразу (без анимации и текста)
document.addEventListener('DOMContentLoaded', () => {
  showScene(0, true);
});


//start button handler
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  languageScreen.classList.remove('active');
  startScreen.classList.remove('active');
  clipScreen.classList.add('active');
  audio.play();
  startClip();
});

if (currentScene === scenes.length - 1) {
  setTimeout(() => header.classList.remove('hidden'), sceneDuration);
}


// script for copyright in footer
document.querySelector("#currYear").textContent = new Date().getFullYear();
document.querySelector("#updated").textContent = document.lastModified;