import { Answers } from "./Answers.js";
import { QuestionBank } from "./QuestionBank.js";
import { Storage } from "./Storage.js";

export class Quiz {
  #container;
  #listUserAnswer = [];
  #correctAnswers;
  #finalScore;
  #keyStorage = "QuizApp";
  #storage = new Storage(this.#keyStorage);
  constructor(container) {
    this.#container = container;
    const pastAnswer = this.#storage.getAnswers();
    if (pastAnswer.length == 0) this.#listUserAnswer = this.getRefreshAnswers();
    else this.#listUserAnswer = pastAnswer;
  }

  getRefreshAnswers() {
    return new QuestionBank()
      .getListQuestions(5)
      .map((q) => new Answers(null, q));
  }
  get listUserAnswer() {
    return this.#listUserAnswer;
  }

  get correctAnswers() {
    this.#correctAnswers = this.listUserAnswer.reduce((acc, item) => {
      if (item.result) acc += 1;
      return acc;
    }, 0);
    return this.#correctAnswers;
  }

  getFeedBack() {
    return this.finalScore > 70 ? "Pass" : "Fail";
  }

  get finalScore() {
    const totalQuestion = this.listUserAnswer.length;
    this.#finalScore = (this.correctAnswers / totalQuestion) * 100;
    return this.#finalScore;
  }

  createQuestionElement(question, orderQuestion) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.id = question.id;
    const qTextElement = document.createElement("p");
    qTextElement.textContent = orderQuestion + " - " + question.qtext;

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answers");

    question.answers.forEach((value, index) => {
      const choice = document.createElement("input");
      choice.type = "radio";
      choice.id = `q${orderQuestion}a${index}`;
      choice.name = `q${orderQuestion}`;
      choice.value = index;
      choice.dataset.userAnswer = `q${question.id}a${index}`;

      if (question.userAnswer == index) {
        choice.checked = true;
      }

      const label = document.createElement("label");
      label.setAttribute("for", `q${orderQuestion}a${index}`);
      label.textContent = value;
      label.dataset.userAnswer = `q${question.id}a${index}`;

      answerContainer.append(choice, label);
    });
    questionElement.append(qTextElement, answerContainer);

    return questionElement;
  }

  renderQuestions() {
    const quizContainer = document.getElementById(this.#container);
    const quetionElements = this.listUserAnswer.map((element, index) => {
      return this.createQuestionElement(element, index + 1);
    });

    quizContainer.append(...quetionElements);
  }

  solveQuestionWithTag(tag) {
    const questionId = tag[1];
    const userAnswer = tag[3];
    this.listUserAnswer.forEach((e) => {
      if (e.id == questionId) {
        e.userAnswer = Number(userAnswer);
      }
    });
    console.log(this.#listUserAnswer);
    //this.#storage.saveAnswers(this.#listUserAnswer);
  }

  clearData() {
    this.#listUserAnswer.forEach((e) => {
      e.userAnswer = null;
    });
    //this.#storage.saveAnswers([]);
  }
}
