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

const getValue = function() {
  setBackgroundImage("outputPart", "image");
  changeBackgroundColor("output", getElementValue("bgcolor"));
  setFontFamily("output", "font");
  setFontSize("output", "size");
  changeFontColor("output", getElementValue("color"));
  putHtmlCode("output", getElementValue("text"));
};

const getOption = function(value) {
  return "<option value='" + value + "'>" + value + "</option>";
};

const loadData = function() {
  let optionImages = images.map(getOption);
  let options = fontFamilies.map(getOption);
  putHtmlData("font", options);
  putHtmlData("image", optionImages);
};

window.onload = loadData;
