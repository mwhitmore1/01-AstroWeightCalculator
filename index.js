var planets = {
	Sun: 27.9,
	Mercury: 0.377,
	Venus: 0.9032,
	Earth: 1,
	Moon: 0.1655,
	Mars: 0.3895,
	Jupiter: 2.640,
	Saturn: 1.139,
	Uranus: 0.917,
	Neptune: 1.148,
	Pluto: 0.06
};

function calculateWeight(){
	var planet = document.getElementById("drop-down").value;
	var weight = document.getElementById("my_weight").value;
	
	// check if the wight entered is a number and alert if not.
	var notNum = isNaN(weight);
	if (notNum){
		return alert("The weight entered is not a number");
	}

	var multiplier = planets[planet];

	var output = weight * multiplier;

	return output;
}


function displayWeight(){
	var output = calculateWeight();
	var label = document.getElementById("output");
	var dropBox = document.getElementById("drop-down");
	var planet = dropBox.value
	label.innerHTML = "Your weight on " + planet + " is " + output + " pounds."
}


function addToPlanetList(planet, multi){
	//check that the multiplier is a number and alert if not.
	var notNum = isNaN(multi);
	if (notNum){
		alert('The multiplier is not a number');
		return false; 
	}

	planets[planet] = multi;

	return true;
}


addNewPlanet = function(){
	var planet = document.getElementById("new-item").value;
	var multi = document.getElementById("new_multi").value;

	// a new planet can only be added to the planet list if a valid multiplier 
	// has been specified. if this is the case, the planet will be added to the 
	// drop box. 
	var addIt = addToPlanetList(planet, multi);

	if (addIt){
		addItem(planet)
	}
}


function addItem(itemName){
	var newOption = document.createElement("option");
	var optionText = document.createTextNode(itemName);

	// append the text to the new option element
	newOption.appendChild(optionText);

	// get the drop down box id
	selectId = document.getElementById("drop-down");

	// add new option to drop down
	selectId.appendChild(newOption);

	return selectId;
}


function addFromTextBox(){
	var newName = document.getElementById('new-item').value;
	addItem(newName);
}


var createPlanetDrop = function(){
	planetNames = Object.keys(planets);
	for (planetName in planetNames){
		addItem(planetNames[planetName]);
	}
}


window.onload = createPlanetDrop;