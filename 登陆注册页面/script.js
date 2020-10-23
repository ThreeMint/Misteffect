const content = document.querySelector(".content");
const next = document.querySelectorAll(".next");
const pre = document.querySelectorAll(".pre");
const submit = document.querySelector(".submit");
let steps = document.querySelectorAll(".step ul li");

let movesize = 0;
let current = 0;
next.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    movesize -= 303;
    content.style.left = movesize + 'px';

    current = current <= 0 ? 0 : current;
    steps[current].classList.add("check");
    steps[current + 1].classList.add("check-l");
    current += 2;
  })
});
pre.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    movesize += 303;
    content.style.left = movesize + 'px';

    current = current > 2 ? 2 : 0;
    steps[current].classList.remove("check");
    steps[current + 1].classList.remove("check-l");
    current -= 2;
  })
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  steps[current].classList.add("check");
  setTimeout(() => {
    window.location.reload();
  }, 1000)
});