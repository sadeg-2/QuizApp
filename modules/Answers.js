import { Question } from "./Questions.js";

export class Answers extends Question {
  userAnswer;
  #result;
  constructor(userAnswer, question) {
    super(question.id, question.qtext, question.answers, question.indexAnswer);
    this.userAnswer = userAnswer;
  }

  get result() {
    this.#result = this.userAnswer == this.indexAnswer;
    // console.log("result " + this.#result);
    return this.#result;
  }

  goo() {
    this.#result = this.userAnswer == this.answers[this.indexAnswer];
    return this.#result;
  }
}
