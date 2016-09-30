/**
 * 
 */
var labelNom = document.createElement("label");
labelNom.setAttribute("for", "nom");
labelNom.innerHTML = "Nom : ";


var inputNom = document.createElement("input");
inputNom.name = "nom";
inputNom.required = true;
inputNom.onblur = checkContent;


var labelPrenom = document.createElement("label");
labelPrenom.setAttribute("for", "prenom");
labelPrenom.innerHTML = "Prénom : ";


var inputPrenom = document.createElement("input");
inputPrenom.name = "prenom";
inputPrenom.required = true;
inputPrenom.onblur = checkContent;

var labelTel = document.createElement("label");
labelTel.setAttribute("for", "tel");
labelTel.innerHTML = "Tel : ";


var inputTel = document.createElement("input");
inputTel.name = "tel";
inputTel.required = true;
inputTel.onblur = checkTel;

document.body.appendChild(labelNom);
document.body.appendChild(inputNom);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(labelPrenom);
document.body.appendChild(inputPrenom);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(labelTel);
document.body.appendChild(inputTel);

function checkContent(){
	if(this.value === "" || this.value.toLowerCase() === "dupond")
		this.style.backgroundColor = "red";
	else
		this.style.backgroundColor = "white";
}

function checkTel(){
	var tel = this.value;
	var regex = /^[0][0-9](-([0-9]{2})){4}$/;
	if(tel.match(regex))
		this.style.backgroundColor = "green";
	else
		this.style.backgroundColor = "red";
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}