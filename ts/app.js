"use strict";
exports.__esModule = true;
var builtCar = require("./car");
document.getElementById("buildCar").onclick = function () { buildCar(); };
function buildCar() {
    var givenDoors = document.getElementById("doors").value;
    var givenColor = document.getElementById("color").value;
    var givenCarType = document.getElementById("carType").value;
    var givenMpg = document.getElementById("mpg").value;
    var newCar = { newDoors: givenDoors, newColor: givenColor, newCarType: givenCarType, newMpg: givenMpg };
    var userCar = new builtCar.Car(newCar);
    console.log(userCar);
}
