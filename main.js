import { Quiz } from "./modules/Quiz.js";

const form = document.getElementById("quiz-form");
const progressBar = document.getElementById("progress-bar");
const clear = document.getElementById("reset");
const result = document.getElementById("result");

// fill result
const totalQuestionsEl = document.getElementById("total-questions");
const correctAnswersEl = document.getElementById("correct-answers");
const finalScoreEl = document.getElementById("finalScore");
const feedbackEl = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  result.style.display = "block";
  totalQuestionsEl.textContent = quiz.listUserAnswer.length;
  correctAnswersEl.textContent = quiz.correctAnswers;
  finalScoreEl.textContent = quiz.finalScore + "%";
  feedbackEl.textContent = quiz.getFeedBack();
  quiz.clearData();
});

const containerKey = "question-container";
const quiz = new Quiz(containerKey);
quiz.renderQuestions();

// any change of answers will handle here
form.addEventListener("change", () => {
  const questions = document.querySelectorAll(".question");
  let answered = 0;
  questions.forEach((q) => {
    if (q.querySelector('input[type="radio"]:checked')) answered++;
  });
  const progress = (answered / questions.length) * 100;
  progressBar.style.width = progress + "%";
});

form.addEventListener("click", function (event) {
  if (event.target.type == "radio") {
    const userAnswer = event.target.dataset["userAnswer"];
    quiz.solveQuestionWithTag(userAnswer);
  }
});
clear.addEventListener("click", (e) => {
  progressBar.style.width = 0 + "%";
  quiz.clearData();
});
// this logic just for testing purpose
// const tog = document.getElementById("tog");
// let flip = false;
// tog.addEventListener("click", (e) => {
//   if (flip) {
//     form.style.display = "none";
//     result.style.display = "block";
//     flip = false;
//   } else {
//     result.style.display = "none";
//     form.style.display = "block";
//     flip = true;
//   }
// });
