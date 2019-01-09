let counter = 1;
const dayNight = ["nightMode", "dayMode"];

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

const toggler = function() {
  counter = counter + 1;
  modes[dayNight[counter % 2]]();
};

const modes = {
  nightMode: (nightMode = function() {
    changeBackgroundColor("workspace", "black");
    changeBackgroundColor("inputPart", "rgb(44, 42, 42)");
    changeBackgroundColor("page-header", "black");
    changeFontColor("inputPart", "white");
    changeFontColor("page-header", "white");
    changeBackgroundColor("outputPart", "rgb(44,42,42)");
    getElement("nightMode").src = "images/daymode.png";
  }),
  dayMode: (dayMode = function() {
    changeBackgroundColor("workspace", "white");
    changeBackgroundColor("inputPart", " rgb(236, 234, 234)");
    changeBackgroundColor("page-header", "white");
    changeFontColor("page-header", "black");
    changeBackgroundColor("outputPart", "rgb(236, 234, 234)");
    changeFontColor("inputPart", "black");
    getElement("nightMode").src = "images/nightmode.png";
  })
};
