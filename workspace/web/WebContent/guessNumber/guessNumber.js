/**
 * 
 */
var randomNb = Math.trunc(Math.random()*100);

function guess(){
	var essais = document.getElementsByName("tries")[0].value;
	essais = parseInt(essais);
	if(essais > 0){
		var guessNb = document.getElementsByName("guess")[0].value;
		guessNb = parseInt(guessNb);
		if(guessNb > randomNb)
			document.getElementById("reponse").innerHTML = "Trop grand";
		else if(guessNb < randomNb)
			document.getElementById("reponse").innerHTML = "Trop petit";
		else
			document.getElementById("reponse").innerHTML = "Gagné";
		essais--;
		document.getElementsByName("tries")[0].value = essais;
	} else {
		document.getElementById("reponse").innerHTML = "Perdu, c'éait "+randomNb;
	}
};