import * as builtCar from './car';

(<HTMLInputElement>document.getElementById("buildCar")).onclick = function() {buildCar()};

    function buildCar() {
        let givenDoors = (<HTMLInputElement>document.getElementById("doors")).value;
        let givenColor = (<HTMLInputElement>document.getElementById("color")).value;
        let givenCarType = (<HTMLInputElement>document.getElementById("carType")).value;
        let givenMpg = (<HTMLInputElement>document.getElementById("mpg")).value;
    
        let newCar = {newDoors:givenDoors, newColor:givenColor, newCarType:givenCarType, newMpg:givenMpg };
        
        let userCar = new builtCar.Car(newCar);
        console.log(userCar); 
    
    }





