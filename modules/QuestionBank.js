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
    new Question("6", "is The Sun made From fire ? ", [true, false], 1),
    new Question("7", "is The Earth flat ? ", [true, false], 0),
    new Question(
      "8",
      "is Mohammed Saad BackEnd Developer ? ",
      [true, false],
      1
    ),
    new Question("9", "Do you love me ? ", [true, false], 0),
    new Question(
      "a",
      "What is the capital of Palestine ?",
      ["AlQuds", "Jerausalem", "Gaza", "Safad"],
      1
    ),
  ];

  constructor() {}

  getListQuestions(numOfQuestion) {
    return this.questions.slice(0, numOfQuestion);
  }
}
