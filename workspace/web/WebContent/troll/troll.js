/**
 * 
 */
var a = 1;
var b=50;
var c=80;
var d=160;
var e=20;
function troll(){
	var troll1 = document.getElementById("troll1");
	troll1.textContent = "Trolled";
	document.getElementsByTagName("button")[0].style.display = "";

	window.onclick = troll2;
};

function troll2(){
	var body = document.getElementsByTagName("body")[0];
	body.style.transform = "rotate("+e+"deg)"
	e+=e;
	if(a===1){
		body.style.backgroundColor = "blue";
		a = 0;
	}
	else{
		body.style.backgroundColor = "red";
		a = 1;
	}
};

function troll3(){
	document.getElementsByTagName("button")[0].style.transform = "translate3d("+b+"px,"+c+"px,"+ d + "px)";
	document.getElementsByTagName("button")[0].onmouseover = troll4;
};

function troll4(){
	document.getElementsByTagName("button")[0].style.transform = "";
	document.getElementsByTagName("button")[0].onmouseover = troll3;
};
