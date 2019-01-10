const getTitle = function(headElement) {
  let title = headElement.split("</title>")[0];
  return title.split("<title>")[1];
};

const splitByBody = function(code) {
  return code.split("body");
};

const joinWithDiv = function(code) {
  return code.join("div");
};

const replaceBody = function(markup) {
  let code = markup;
  code = splitByBody(code);
  return joinWithDiv(code);
};

const separateHeadAndBody = function(markup) {
  return markup.split("</head>");
};

const getBodyPart = function(segregatedCode) {
  return segregatedCode[1];
};

const getHeadPart = function(segregatedCode) {
  return segregatedCode[0];
};

const segregateHeadPart = function(segregatedCode) {
  let headElement = getHeadPart(segregatedCode);
  return getTitle(headElement);
};

const applyMarkups = function(title, body) {
  putHtmlCode("tabHead", title);
  putHtmlCode("codeOutput", body);
};

const getMarkups = function(segregatedCode) {
  let body = getBodyPart(segregatedCode);
  let title = segregateHeadPart(segregatedCode);
  return { title, body };
};

const getCode = function() {
  let markup = getElementValue("code");
  markup = replaceBody(markup);
  return markup;
};

const processCode = function() {
  let markup = getCode();
  let segregatedCode = separateHeadAndBody(markup);
  let { title, body } = getMarkups(segregatedCode);
  applyMarkups(title, body);
};

const openNew = function() {
  let value = getElement("code").value;
  let newWindow = window.open("");
  newWindow.document.write(value);
};
