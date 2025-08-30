import { QuestionBank } from "./modules/QuestionBank.js";
import { Answers } from "./modules/Answers.js";
import { Quiz } from "./modules/Quiz.js";

var q = new Quiz();

var bank = new QuestionBank();

var answer = new Answers(4, bank.questions[1]);
