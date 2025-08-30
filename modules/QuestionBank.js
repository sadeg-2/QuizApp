import { Question } from "./Questions.js";
export class QuestionBank {
  questions = [
    new Question("1", "What the result 1 + 1 ? ", [2, 4, 5, 6], 0),
    new Question("2", "What the result 3 + 1 ? ", [2, 4, 5, 6], 1),
    new Question("3", "What the result 5 + 1 ? ", [2, 4, 5, 6], 3),
    new Question(
      "4",
      "What is the capital of Palestine ?",
      ["AlQuds", "Jerausalem", "Gaza", "Safad"],
      1
    ),
    new Question("5", "is The Moon made From Cheese ? ", [true, false], 0),
  ];

  constructor() {}

  getListQuestions(numOfQuestion) {
    return this.questions.slice(0, numOfQuestion);
  }
}
