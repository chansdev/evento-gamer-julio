// scroll suave
const linksInternos = document.querySelectorAll('a[href^="#"');

function scrollSuave(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const sectionTop = section.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
}

linksInternos.forEach((e) => {
  e.addEventListener("click", scrollSuave);
});

// menu hamburger
const menubt = document.querySelector("#menuCheck");

menubt.addEventListener("click", (e) => {
  document.querySelector("#menu").classList.toggle("ativo");
});
