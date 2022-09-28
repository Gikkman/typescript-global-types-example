"use strict";
var f = function (person, car) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " drives a ").concat(car.model, " with ").concat(car.horses, " horse powers"));
};
var p = {
    firstName: "John",
    lastName: "Doe"
};
var c = {
    horses: 40,
    model: "Volvo"
};
f(p, c);
