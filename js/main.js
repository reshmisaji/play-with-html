let counter = 1;
const dayNight = ["nightMode", "dayMode"];
const modes = {
  nightMode: (nightMode = function() {
    changeBackgroundColor("workspace", "black");
    changeBackgroundColor("inputPart", "rgb(44, 42, 42)");
    changeBackgroundColor("page-header", "black");
    changeFontColor("inputPart", "white");
    changeFontColor("page-header", "white");
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
  let headElement = markup.split("<body>");
  let body = headElement[1];
  headElement = headElement[0];
  let title = getTitle(headElement);

  putHtmlCode("tabHead", title);
  putHtmlCode("codeOutput", body);
};

// const highlight = function() {
//   let val = getElementValue("code");
//   let length = val.length - 2;
//   let lastCharacter = val.slice(length);
//   if (lastCharacter == "<") {
//     getElementValue("code").slice(length).style.color = "red";
//   }
// };

const loadData = function() {
  let optionImages = images.map(getOption);
  let options = fontFamilies.map(getOption);
  putHtmlData("font", options);
  putHtmlData("image", optionImages);
};
