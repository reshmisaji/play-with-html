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

const setPageBackground = function(color) {
  changeBackgroundColor("workspace", color);
  changeBackgroundColor("page-header", color);
};

const setIOBackground = function(color) {
  changeBackgroundColor("outputPart", color);
  changeBackgroundColor("inputPart", color);
};

const setFontPreferences = function(color) {
  changeFontColor("page-header", color);
  changeFontColor("inputPart", color);
};

const setNightmodeColors = function() {
  setPageBackground("black");
  setIOBackground("rgb(44, 42, 42)");
  setFontPreferences("white");
};

const setDayModeColors = function() {
  setPageBackground("white");
  setIOBackground("rgb(236, 234, 234)");
  setFontPreferences("black");
};

const setModeImage = function(imageAddress) {
  getElement("nightMode").src = imageAddress;
};

const modes = {
  nightMode: (nightMode = function() {
    setNightmodeColors();
    setModeImage("images/daymode.png");
  }),
  dayMode: (dayMode = function() {
    setDayModeColors();
    setModeImage("images/nightmode.png");
  })
};
