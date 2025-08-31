import { Answers } from "./Answers.js";
import { Question } from "./Questions.js";

export class Storage {
  #key;

  constructor(key) {
    this.#key = key;
  }

  saveAnswers(listOfAnswers) {
    const stringifyList = JSON.stringify(listOfAnswers);
    localStorage.setItem(this.#key, stringifyList);
  }

  getAnswers() {
    const storedList = localStorage.getItem(this.#key);
    let parsedList = JSON.parse(storedList) || [];

    if (parsedList.length > 0) {
      parsedList = parsedList.map((item) => {
        return new Answers(
          item.userAnswer,
          new Question(item.id, item.qtext, item.answers, item.indexAnswer)
        );
      });
    }
    return parsedList;
  }
}
