const f = (person: Person, car: Car) => {
    console.log(`${person.firstName} ${person.lastName} drives a ${car.model} with ${car.horses} horse powers`);
}

const p: Person = {
    firstName: "John",
    lastName: "Doe",
}

const c: Car = {
    horses: 40,
    model: "Volvo"
}

f(p, c);