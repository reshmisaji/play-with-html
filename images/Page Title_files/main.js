let counter = 1;
const dayNight = ['nightMode', 'dayMode'];
const modes = {
	'nightMode': nightMode = function () {
		changeBackgroundColor('workspace', 'black');
		changeBackgroundColor('inputPart', 'rgb(44, 42, 42)');
		changeBackgroundColor('page-header', 'black');
		changeFontColor('inputPart', 'white');
		changeFontColor('page-header', 'white');
		document.getElementById('nightMode').src = 'images/daymode.png';
	},
	'dayMode': dayMode = function () {
		changeBackgroundColor('workspace', 'white');
		changeBackgroundColor('inputPart', ' rgb(236, 234, 234)');
		changeBackgroundColor('page-header', 'white');
		changeFontColor('page-header', 'black');
		changeFontColor('inputPart', 'black');
		document.getElementById('nightMode').src = 'images/nightmode.png';
	}
}
const images = ['images/bg.jpg', 'images/background.jpg', 'images/blueandred.jpg'];
const fontFamilies = ["Arial", "monospace", "Times New Roman", "Times", "serif", "Georgia", "Palatino Linotype",
	"Book Antiqua", "Palatino",
	"Helvetica", "sans-serif", "Arial Black", "Gadget", "Comic Sans MS", "cursive", "Impact", "Charcoal",
	"Lucida Sans Unicode",
	"Lucida Grande", "Tahoma", "Geneva", "Trebuchet MS", "Verdana", "Courier New", "Courier", "Lucida Console",
	"Monaco"
];

const getValue = function () {
	let bgImage = "url('" + document.getElementById('image').value + "')";
	let backgroundColour = document.getElementById('bgcolor').value;
	let fontType = document.getElementById('font').value;
	let fontColor = document.getElementById('color').value;
	let letterSize = document.getElementById('size').value + 'px';
	let data = [];
	data.push(document.getElementById('name').value);

	document.getElementById('outputPart').style.backgroundImage = bgImage;
	changeBackgroundColor('output', backgroundColour);
	document.getElementById('output').style.fontFamily = fontType;
	changeFontColor('output', fontColor);
	document.getElementById('output').style.fontSize = letterSize;
	putHtmlData('output', data);
};

const getCode = function () {
	document.getElementById('codeOutput').innerHTML = document.getElementById('code').value;
}

const changeBackgroundColor = function (block, anyColor) {
	document.getElementById(block).style.backgroundColor = anyColor;
}

const changeFontColor = function (block, anyColor) {
	document.getElementById(block).style.color = anyColor;
}

const putHtmlData = function (block, data) {
	document.getElementById(block).innerHTML = data.join("");
}

const refresh = function () {
	location.reload();
}

const getOption = function (value) {
	return "<option value='" + value + "'>" + value + "</option>";
}

const toggler = function () {
	counter = counter + 1;
	modes[dayNight[counter % 2]]();
}

const loadData = function () {
	let options = fontFamilies.map(getOption);
	document.getElementById('font').innerHTML = options.join("");

	let optionImages = images.map(getOption);
	document.getElementById('image').innerHTML = optionImages.join("");
}