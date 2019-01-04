const images = ['images/bg.jpg', 'images/background.jpg', 'images/blueandred.jpg'];
const colours = ["Red", "AntiqueWhite", "Aqua ", "Aquamarine", "Azure ", "Beige ", "Bisque ", "Black ",
	"BlanchedAlmond ", "Blue ", "BlueViolet ", "Brown", "BurlyWood ", "CadetBlue ", "Chartreuse ", "Chocolate", "Coral",
	"CornflowerBlue", "Cornsilk ", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey",
	"DarkGreen", "DarkKhaki", "DarkMagenta ", "DarkOliveGreen ", "DarkOrange", "DarkOrchid ", "DarkRed", "DarkSalmon",
	"DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray ", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink",
	"DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
	"Gainsboro ",
	"GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew ", "HotPink", "IndianRed ",
	"Indigo ", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon ", "LightBlue", "LightCoral",
	"LightCyan ", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
	"LightSeaGreen",
	"LightSkyBlue ", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen ",
	"Linen", "Magenta", "Maroon ", "MediumAquaMarine ", "MediumBlue", "MediumOrchid ", "MediumPurple", "MediumSeaGreen",
	"MediumSlateBlue ", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
	"MistyRose", "Moccasin", "NavajoWhite ", "Navy", "OldLace ", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid",
	"PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip ", "PeachPuff ", "Peru ", "Pink",
	"Plum", "PowderBlue", "Purple ", "RebeccaPurple", "AliceBlue", "RosyBrown ", "RoyalBlue", "SaddleBrown", "Salmon",
	"SandyBrown", "SeaGreen", "SeaShell", "Sienna ", "Silver ", "SkyBlue", "SlateBlue", "SlateGray ", "SlateGrey ",
	"Snow ", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White",
	"WhiteSmoke", "Yellow ", "YellowGreen "
];
const fontFamilies = ["Arial", "monospace", "Times New Roman", "Times", "serif", "Georgia", "Palatino Linotype",
	"Book Antiqua", "Palatino",
	"Helvetica", "sans-serif", "Arial Black", "Gadget", "Comic Sans MS", "cursive", "Impact", "Charcoal",
	"Lucida Sans Unicode",
	"Lucida Grande", "Tahoma", "Geneva", "Trebuchet MS", "Verdana", "Courier New", "Courier", "Lucida Console",
	"Monaco"
];

const getValue = function () {
	document.getElementById('outPutPart').style.backgroundImage = "url('" + document.getElementById('image').value +
		"')";
	document.getElementById('outPut').style.backgroundColor = document.getElementById('bgcolor').value;
	document.getElementById('outPutPart').style.fontFamily = document.getElementById('font').value;
	document.getElementById('outPut').style.color = document.getElementById('color').value;
	document.getElementById('outPut').style.fontSize = document.getElementById('size').value;
	document.getElementById("outPut").innerHTML = document.getElementById('name').value;
};

const nightMode = function () {
	document.getElementById('workspace').style.backgroundColor = 'black';
	document.getElementById('inputPart').style.backgroundColor = 'rgb(44, 42, 42)';
	document.getElementById('inputPart').style.color = 'white';
	document.getElementById('heading').style.backgroundColor = 'black';
	document.getElementById('heading').style.color = 'white';
}

const dayMode = function () {
	document.getElementById('workspace').style.backgroundColor = 'white';
	document.getElementById('inputPart').style.backgroundColor = ' rgb(236, 234, 234)';
	document.getElementById('inputPart').style.color = 'black';
	document.getElementById('heading').style.backgroundColor = 'white';
	document.getElementById('heading').style.color = 'black';
}

const getOption = function (value) {
	return "<option value='" + value + "'>" + value + "</option>";
}

const loadData = function () {
	let options = fontFamilies.map(getOption);
	document.getElementById('font').innerHTML = options.join("");

	let colors = colours.map(getOption);
	document.getElementById('color').innerHTML = colors.join("");
	document.getElementById('bgcolor').innerHTML = colors.join("");

	let optionImages = images.map(getOption);
	document.getElementById('image').innerHTML = optionImages.join("");
}