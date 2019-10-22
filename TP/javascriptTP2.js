
// TP convertisseur semaine 2 javascript

var devises = { /* dans ce tableau l'une des clés est euro*/
				"dollar" : "1.11",
				"bitcoin" : "0.00011",
				"livreSterling" : "0.91",
				"yen" : "117.82",
				"dinar" : "3.18",
				"yuan" : "7.85"
				};
				
var euro = document.getElementById("saisiEuro");
var choixDev = document.getElementById("choixDev");
var bouton = document.getElementById("boutonGo");

var tabRecup = document.getElementById("tabRecup");
var resInstant = document.getElementById("resInstant");

var dollar = document.getElementById("dollar");


document.addEventListener("keydown", logkey);



bouton.onclick = function()
{
	var result = parseFloat(devises[choixDev.value] * euro.value);
	result = (choixDev.value == "bitcoin") ? result.toFixed(6) : result.toFixed(2);
	
	
	if (!isNaN(euro.value) && euro.value >=0)
	{
		resInstant.innerText = result + " " + "euros";
		tabRecup.innerHTML += "le resultat de la conversion en " +choixDev.value + " est " + result + " euros" + "<br>";
	}
	else
	{
		alert("Veuillez insérer un chiffre valide SVP !");
	}
};

function logkey(touche)
{
	var keycode_value = touche.keyCode;
	
	console.log(keycode_value);
	if (keycode_value == 68)
	{
		choixDev.value = "dollar";
		bouton.click();
	}
	if (keycode_value = 89)
	{
		choixDev.value = "yen";
		bouton.click();
	}
	if (keycode_value = 66)
	{
		choixDev.value = "bitcoin";
		bouton.click();
	}
		if (keycode_value = 76)
	{
		choixDev.value = "livreSterling";
		bouton.click();
	}
	if (keycode_value = 84)
	{
		choixDev.value = "dinar";
		bouton.click();
	}
	if (keycode_value = 67)
	{
		choixDev.value = "yuan";
		bouton.click();
	}
};

