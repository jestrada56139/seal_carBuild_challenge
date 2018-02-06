(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./car":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(labelledObj) {
        this.doors = labelledObj.newDoors;
        this.color = labelledObj.newColor;
        this.carType = labelledObj.newCarType;
        this.mpg = labelledObj.newMpg;
    }
    return Car;
}());
exports.Car = Car;

},{}]},{},[1,2]);
