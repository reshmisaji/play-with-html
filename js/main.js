let counter = 1;
let questionNumber = 0;
let score = 0;
const dayNight = ["nightMode", "dayMode"];
const modes = {
  nightMode: (nightMode = function() {
    changeBackgroundColor("workspace", "black");
    changeBackgroundColor("inputPart", "rgb(44, 42, 42)");
    changeBackgroundColor("page-header", "black");
    changeFontColor("inputPart", "white");
    changeFontColor("page-header", "white");
    changeBackgroundColor("resultPart", "rgb(44,42,42");
    getElement("nightMode").src = "images/daymode.png";
  }),
  dayMode: (dayMode = function() {
    changeBackgroundColor("workspace", "white");
    changeBackgroundColor("inputPart", " rgb(236, 234, 234)");
    changeBackgroundColor("page-header", "white");
    changeFontColor("page-header", "black");
    changeFontColor("inputPart", "black");
    getElement("nightMode").src = "images/nightmode.png";
  })
};
const images = [
  "images/bg.jpg",
  "images/background.jpg",
  "images/blueandred.jpg"
];
const fontFamilies = [
  "Arial",
  "monospace",
  "Times New Roman",
  "Times",
  "serif",
  "Georgia",
  "Palatino Linotype",
  "Book Antiqua",
  "Palatino",
  "Helvetica",
  "sans-serif",
  "Arial Black",
  "Gadget",
  "Comic Sans MS",
  "cursive",
  "Impact",
  "Charcoal",
  "Lucida Sans Unicode",
  "Lucida Grande",
  "Tahoma",
  "Geneva",
  "Trebuchet MS",
  "Verdana",
  "Courier New",
  "Courier",
  "Lucida Console",
  "Monaco"
];

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

const getElement = function(id) {
  return document.getElementById(id);
};

const getElementValue = function(elementId) {
  return getElement(elementId).value;
};

const getImageAddress = function(elementId) {
  return "url('" + getElementValue(elementId) + "')";
};

const setBackgroundImage = function(blockId, elementId) {
  return (getElement(blockId).style.backgroundImage = getImageAddress(
    elementId
  ));
};

const setFontFamily = function(blockId, elementId) {
  return (getElement(blockId).style.fontFamily = getElementValue(elementId));
};

const setFontSize = function(blockId, elementId) {
  return (getElement(blockId).style.fontSize =
    getElementValue(elementId) + "px");
};

const getValue = function() {
  setBackgroundImage("outputPart", "image");
  changeBackgroundColor("output", getElementValue("bgcolor"));
  setFontFamily("output", "font");
  setFontSize("output", "size");
  changeFontColor("output", getElementValue("color"));
  putHtmlCode("output", getElementValue("text"));
};

const changeBackgroundColor = function(block, anyColor) {
  getElement(block).style.backgroundColor = anyColor;
};

const changeFontColor = function(block, givenColor) {
  getElement(block).style.color = givenColor;
};

const putHtmlCode = function(block, code) {
  getElement(block).innerHTML = code;
};

const putHtmlData = function(block, data) {
  getElement(block).innerHTML = data.join("");
};

const refresh = function() {
  location.reload();
};

const getOption = function(value) {
  return "<option value='" + value + "'>" + value + "</option>";
};

const toggler = function() {
  counter = counter + 1;
  modes[dayNight[counter % 2]]();
};

const getTitle = function(headElement) {
  let title = headElement.split("</title>")[0];
  title = title.split("<title>")[1];
  return title;
};

const getCode = function() {
  let markup = getElementValue("code");
  markup = markup.split("body");
  markup = markup.join("div");
  let headElement = markup.split("</head>");
  let body = headElement[1];
  headElement = headElement[0];
  let title = getTitle(headElement);

  putHtmlCode("tabHead", title);
  putHtmlCode("codeOutput", body);
};

const rightAnswer = function() {
  changeBackgroundColor("codeOutput", "green");
  changeFontColor("message", "white");
  getElement("message").style.textAlign = "center";
  putHtmlCode("message", "WOW ! \n You Are Right");
  score += 10;
};

const wrongAnswer = function() {
  changeBackgroundColor("codeOutput", "red");
  changeFontColor("message", "white");
  getElement("message").style.textAlign = "center";
  putHtmlCode("message", "OOPS ! You Are Wrong");
};

const gameOver = function() {
  changeFontColor("message", "white");
  changeBackgroundColor("codeOutput", "black");
  getElement("message").style.textAlign = "center";
  putHtmlCode("message", "GAME OVER !");
  changeBackgroundColor("question", "gray");
  getElement("question").style.textAlign = "center";
  getElement("question").style.paddingTop = "155px";
  getElement("question").style.borderRadius = "5%";
  getElement("answer").innerHTML = "";
  getElement("tabHead").style.fontSize = "20px";
  putHtmlCode("tabHead", "Thanks for participating, visit again !");
  if (quiz.length * 10 == score) {
    putHtmlCode("question", "<h1>You got all the correct answers</h1>");
  } else {
    putHtmlCode("question", "<h1>YOUR SCORE : " + score + "</h1>");
  }
};

const displayNext = function() {
  getElement("next").innerHTML =
    "<button id='nextButton' type='button' onclick='loadQuestion()'>NEXT>></button>";
  changeBackgroundColor("nextButton", "black");
  changeFontColor("nextButton", "white");
  getElement("nextButton").style.fontSize = "20px";
  getElement("qAnswer").value = "";
};

const checkAnswer = function() {
  let answer = getElementValue("qAnswer");
  let expectedAnswer = quiz[questionNumber].answer;
  if (answer == expectedAnswer) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
  displayNext();
  questionNumber++;
  putHtmlCode("tabHead", "SCORE : " + score);
};

const loadData = function() {
  let optionImages = images.map(getOption);
  let options = fontFamilies.map(getOption);
  putHtmlData("font", options);
  putHtmlData("image", optionImages);
};

const loadQuestion = function() {
  if (questionNumber == quiz.length) {
    gameOver();
  }
  let data = quiz[questionNumber];
  getElement("qn").innerText = data.question;
  getElement("option").innerText = data.options.map(x => x).join("");
  getElement("message").innerHTML = "";
  changeBackgroundColor("codeOutput", "rgb(236, 234, 234");
};
