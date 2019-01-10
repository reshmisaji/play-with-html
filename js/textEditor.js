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

const setBackgroundPreferences = function() {
  setBackgroundImage("outputPart", "image");
  changeBackgroundColor("output", getElementValue("bgcolor"));
};

const setTextPreferences = function() {
  setFontFamily("output", "font");
  setFontSize("output", "size");
  changeFontColor("output", getElementValue("color"));
};

const getValue = function() {
  setBackgroundPreferences();
  setTextPreferences();
  putHtmlCode("output", getElementValue("text"));
};

const getOption = function(value) {
  return "<option value='" + value + "'>" + value + "</option>";
};

const loadBackgroundImages = function(images) {
  let optionImages = images.map(getOption);
  putHtmlData("image", optionImages);
};

const loadFontFamilies = function(fontFamilies) {
  let options = fontFamilies.map(getOption);
  putHtmlData("font", options);
};

const loadData = function() {
  loadBackgroundImages(images);
  loadFontFamilies(fontFamilies);
};

window.onload = loadData;
