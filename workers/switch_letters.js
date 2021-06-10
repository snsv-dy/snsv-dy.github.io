
function flipCase(str) {
	var newstr = "";

	for(var index = 0; index < str.length; index++){
		var letter = str[index];
		if(/[a-z]/.test(letter)){
			newstr += letter.toUpperCase();
		} else {
			newstr += letter.toLowerCase();
		}
	}

	return newstr;
}

onmessage = function(e) {
	var name = e.data[0];
	var surname = e.data[1];

	postMessage([flipCase(name), flipCase(surname)]);
}