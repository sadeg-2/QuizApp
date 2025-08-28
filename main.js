const form = document.getElementById("quiz-form");
const progressBar = document.getElementById("progress-bar");
const questions = document.querySelectorAll(".question");

form.addEventListener("change", () => {
  let answered = 0;
  questions.forEach((q) => {
    if (q.querySelector('input[type="radio"]:checked')) answered++;
  });
  const progress = (answered / questions.length) * 100;
  progressBar.style.width = progress + "%";
});

const tog = document.getElementById("tog");
const result = document.getElementById("result");
let flip = true;
tog.addEventListener("click", (e) => {
  if (flip) {
    form.style.display = "none";
    result.style.display = "block";
    flip = false;
  } else {
    result.style.display = "none";
    form.style.display = "block";
    flip = true;
  }
});
