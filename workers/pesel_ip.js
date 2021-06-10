

onmessage = function(e) {
	// var ip_exp = /d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;
	var ip_exp = /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/;
	var ip_correct = ip_exp.test(e.data[1]);

	var pesel_exp = /^\d{11}$/;
	var pesel_correct = pesel_exp.test(e.data[0]);

	var res = "";
	if(!ip_correct) {
		res += "Adres ip jest niepoprawny.";
	}

	if(!pesel_correct) {
		res += "Numer pesel jest niepoprawny.";
	}

	if(ip_correct && pesel_correct){
		res = "Ip i pesel ok.";
	}

	postMessage(res);
}