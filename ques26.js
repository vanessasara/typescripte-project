var car = 'subaru';
// predict 1
console.log("Is car == 'subaru'? I think True.");
console.log(car == 'subaru');
// predict 2
console.log("Is car == 'honda'? I think False.");
console.log(car == 'honda');
// predict 3
console.log("Is car != 'toyota'? I think True.");
console.log(car != 'toyota');
// predict 4
console.log("Is car === 'Subaru'? I think False.");
console.log(car === 'Subaru');
// predict 5
console.log("Is car !== 'subaru'? I thinkFalse.");
console.log(car !== 'subaru');
// predict 6
var isPakistaniCar = false;
console.log("Is car a oakistani car? I think False.");
console.log(isPakistaniCar || (car == 'honda' || car == 'toyota'));
//  predict 7
var isJapaneseCar = true;
console.log("Is car a Japanese car? I think True.");
console.log(isJapaneseCar && (car == 'audi' || car == 'bmw'));
//  predict 8
var isRed = false;
console.log("Is the color of the car red? I think False.");
console.log(isRed && car == 'red');
//  predict 9
var hasFourDoors = true;
console.log("Does the car have four doors? I think True.");
console.log(hasFourDoors || car == 'sedan');
//  predict 10
var isConvertible = false;
console.log("Is the car a convertible? I think False.");
console.log(!isConvertible && (car == 'convertible' || car == 'cabriolet'));
