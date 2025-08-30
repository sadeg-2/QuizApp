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
    const parsedList = JSON.parse(storedList) || [];
    return parsedList;
  }
}
