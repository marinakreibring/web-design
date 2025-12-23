const images = [
  { src: 'crt1.jpg', alt: 'cert1' },
  { src: 'crt2.jpg', alt: 'cert2' },
  { src: 'crt3.jpg', alt: 'cert3' },
  { src: 'crt4.jpg', alt: 'cert4' },
  { src: 'crt5.jpg', alt: 'cert5' },
  { src: 'crt6.jpg', alt: 'cert6' },
  { src: 'crt7.jpg', alt: 'cert7' },
  { src: 'crt8.jpg', alt: 'cert8' },
  { src: 'crt9.jpg', alt: 'cert9' },
  { src: 'crt10.jpg', alt: 'cert10' },
  { src: 'crt11.jpg', alt: 'cert11' },
  { src: 'crt12.jpg', alt: 'cert12' },
  { src: 'crt13.jpg', alt: 'cert13' },
  { src: 'crt14.jpg', alt: 'cert14' },
  { src: 'crt15.jpg', alt: 'cert15' },
  { src: 'crt16.jpg', alt: 'cert16' },
  { src: 'crt17.jpg', alt: 'cert17' }
];

const slides = document.getElementById('slides');
const thumbs = document.getElementById('thumbs');

images.forEach((img, i) => {
  slides.innerHTML += `
    <div class="mySlides">
      <div class="numbertext">${i + 1} / ${images.length}</div>
      <img src="images/${img.src}" alt="${img.alt}" loading="lazy" style="width:100%">
    </div>
  `;

  thumbs.innerHTML += `
    <div class="column">
      <img class="demo cursor"
           src="images/${img.src}"
           alt="${img.alt}"
           onclick="currentSlide(${i + 1})">
    </div>
  `;
});

let slideIndex = 1;
showSlides(slideIndex); 
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;      
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }   
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";  
    captionText.innerHTML = dots[slideIndex-1].alt;
}
document.querySelector('.prev')
  .addEventListener('click', () => plusSlides(-1));

document.querySelector('.next')
  .addEventListener('click', () => plusSlides(1));
