const slides = document.querySelectorAll('.carousel-slide');
const next = document.querySelector('.carousel-btn.next');
const prev = document.querySelector('.carousel-btn.prev');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) slide.classList.add('active');
  });
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000); // troca a cada 5 segundos

document.addEventListener("DOMContentLoaded", () => {
  showSlide(index);
});