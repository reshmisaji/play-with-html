let questionNumber = 0;
let score = 0;
const quiz = [
  {
    question: "What does HTML stand for ?",
    options: [
      "1.Home Tool Markup Language\n",
      "2.Hyper Text Markup Language\n",
      "3.Hyperlinks and Text Markup Language\n"
    ],
    answer: "2"
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["1.<heading>\n", "2.<h6>\n", "3.<h1>\n"],
    answer: "3"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["1.<br>\n", "2.<break>\n", "3.<lb>\n"],
    answer: "1"
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      '1.<body style="background-color:yellow;">\n',
      "2.<background>yellow</background>\n",
      '3.<body bg="yellow">\n'
    ],
    answer: "1"
  },
  {
    question: "Choose the correct HTML element to define important text",
    options: ["1.<important>\n", "2.<strong>\n", "3.<b>\n"],
    answer: "2"
  }
];

const makeDecision = function(answer, expectedAnswer) {
  if (answer == expectedAnswer) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
  displayNext();
};

const displayScore = function(score) {
  putHtmlCode("tabHead", "SCORE : " + score);
};

const getNextQuizStatus = function({ answer, expectedAnswer }) {
  makeDecision(answer, expectedAnswer);
  questionNumber++;
  displayScore(score);
};

const checkAnswer = function() {
  let answer = getElementValue("qAnswer");
  let expectedAnswer = quiz[questionNumber].answer;
  getNextQuizStatus({ answer, expectedAnswer });
};

const createNextButton = function() {
  getElement("next").innerHTML =
    "<button id='nextButton' type='button' onclick='loadQuestion()'>NEXT>></button>";
  setPropertiesForNext();
};

const setPropertiesForNext = function() {
  changeBackgroundColor("nextButton", "black");
  changeFontColor("nextButton", "white");
  getElement("nextButton").style.fontSize = "20px";
};

const displayNext = function() {
  createNextButton();
  getElement("qAnswer").value = "";
};

const styleQuestionPart = function() {
  getElement("question").style.textAlign = "center";
  getElement("question").style.paddingTop = "155px";
  getElement("question").style.borderRadius = "5%";
};

const setGameOverColorPreferences = function() {
  changeBackgroundColor("codeOutput", "black");
  changeBackgroundColor("question", "gray");
};

const isAllCorrect = function(quiz, score) {
  return quiz.length * 10 == score;
};

const printScore = function(quiz, score) {
  if (isAllCorrect(quiz, score)) {
    putHtmlCode("question", "<h1>You got all the correct answers</h1>");
    return;
  }
  putHtmlCode("question", "<h1>YOUR SCORE : " + score + "</h1>");
};

const displayThankyouNote = function() {
  getElement("tabHead").style.fontSize = "20px";
  putHtmlCode("tabHead", "Thanks for participating, visit again !");
};

const gameOver = function() {
  setGameOverColorPreferences();
  putHtmlCode("message", "GAME OVER !");
  styleQuestionPart();
  getElement("answer").innerHTML = "";
  displayThankyouNote();
  printScore(quiz, score);
};

const setOutputBackground = function(color) {
  changeBackgroundColor("codeOutput", color);
};

const customiseMessage = function() {
  changeFontColor("message", "white");
  getElement("message").style.textAlign = "center";
};

const incrementScore = function() {
  return (score += 10);
};

const setMessagePreferences = function(color) {
  setOutputBackground(color);
  customiseMessage();
};

const rightAnswer = function() {
  setMessagePreferences("green");
  putHtmlCode("message", "WOW ! \n You Are Right");
  incrementScore();
};

const wrongAnswer = function() {
  setMessagePreferences("red");
  putHtmlCode("message", "OOPS ! You Are Wrong");
};

const printQuestion = function(data) {
  getElement("qn").innerText = data.question;
  getElement("option").innerText = data.options.map(x => x).join("");
};

const displayQuestion = function(data) {
  printQuestion(data);
  getElement("message").innerHTML = "";
};

const isQuestionsOver = function(questionNumber, quiz) {
  return questionNumber == quiz.length;
};

const loadQuestion = function() {
  let data = quiz[questionNumber];
  if (isQuestionsOver(questionNumber, quiz)) {
    gameOver();
  }
  displayQuestion(data);
  changeBackgroundColor("codeOutput", "rgb(236, 234, 234");
};

window.onload = loadQuestion;
