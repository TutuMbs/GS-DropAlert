

//Botoes para o carrousel com passagem automatica a cada 5 segundos
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

//Menu hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um item
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});


//Validador do formulario de contato
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio real

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    // Regex simples para validar email e telefone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (!telefoneRegex.test(telefone)) {
      alert("Por favor, insira um número de telefone válido (com DDD).");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
});

//Seletor de cor 
document.addEventListener('DOMContentLoaded', () => {
  const botoesTema = document.querySelectorAll('.tema-btn');

  botoesTema.forEach(btn => {
    btn.addEventListener('click', () => {
      const temaSelecionado = btn.getAttribute('data-tema');
      document.body.className = ''; // limpa qualquer tema anterior
      document.body.classList.add(`tema-${temaSelecionado}`);
    });
  });
});