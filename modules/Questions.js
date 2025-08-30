export class Question {
  id;
  qtext;
  answers;
  indexAnswer;

  constructor(id, qtext, answers, indexAnswer) {
    this.id = id;
    this.answers = answers;
    this.qtext = qtext;
    this.indexAnswer = indexAnswer;
  }
  
}
