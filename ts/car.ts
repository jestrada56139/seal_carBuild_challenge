export class Car {
    doors: any;
    color: string;
    carType: string;
    mpg: any;

     constructor(labelledObj: buildCar){ 
        this.doors = labelledObj.newDoors;
        this.color = labelledObj.newColor;
        this.carType = labelledObj.newCarType;
        this.mpg = labelledObj.newMpg;
                
     }
}

export interface buildCar {
    newDoors: string;
    newColor: string;
    newCarType: any;
    newMpg: any;
}


