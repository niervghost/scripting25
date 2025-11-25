//console log just to test that your JS is linked properly
console.log("Hello me, is this thing working correctly?");

//create a variable for the number of buildings in the city and start it at zero
let buildings = 0;

//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById("city").innerHTML = "You have " + buildings + " buildings in your city!";

//Functions --
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
//-- Print a message to the console
//--Add one to the variable that is tracking the number of buildings
//---Print a message with the number of buildings
//---Place an image graphic into the other div
function storageBuild() {
    console.log("Storage Unit is working!");
    //add one to building variable
    buildings++;
    document.getElementById("city").innerHTML = "You have " + buildings + " buildings in your city!";
    document.getElementById("cityGraphic").innerHTML += "<img src='images/BuildingBlock1.png' alt='Storage Unit'>";
}

//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building
function apartBuild() {
    console.log("Apartment is working");
    buildings++;
    document.getElementById("city").innerHTML = "You have " + buildings + " buildings in your city!";
    document.getElementById("cityGraphic").innerHTML += "<img src='images/BuildingBlock2.png' alt='Apartment Building'>";
}

//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building
function houseBuild() {
    console.log("House is working");
    buildings++;
    document.getElementById("city").innerHTML = "You have " + buildings + " buildings in your city!";
    document.getElementById("cityGraphic").innerHTML += "<img src='images/BuildingBlock3.png' alt='House'>";
}

//Challenge: Create a fourth button that will add a different building to the city. Use one of the buildings in the resources folder!
function towerBuild() {
    console.log("Tower is working");
    buildings++;
    document.getElementById("city").innerHTML = "You have " + buildings + " buildings in your city!";
    document.getElementById("cityGraphic").innerHTML += "<img src= 'images/BuildingBlock4.png' alt=Tower'>";
}