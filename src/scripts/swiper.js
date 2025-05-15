const slides = document.querySelectorAll(".slide");
let current = 0;

document.getElementById("left-arrow").addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
});

document.getElementById("right-arrow").addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
});
