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

const openNew = function() {
  let value = getElement("code").value;
  let newWindow = window.open("");
  newWindow.document.write(value);
};
