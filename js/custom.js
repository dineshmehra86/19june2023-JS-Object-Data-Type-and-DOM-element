let car1 = {
    // 1. P:V (Many)
    brand: "TATA",
    year:2023,
    model:"Safari",
    color: "white",
    engine:"EV/Petrol/Diesel",
    price:600000,

    // 2. Method (Many)
    getFullDetail(){
    // Every function return something
    return this.brand +' '+ this.year;
    }
}
var car2 = {
    // 1. P:V (Many)
    brand: "Maruti",
    year:1998,
    model:"wagon R",
    color: "red",
    engine:"Petrol",
    price:400000
    // 2. Method (Many)
}
const car3 = {
    // 1. P:V (Many)
    brand: "Ford",
    year:1998,
    model:"Eco Sport",
    color: "sliver",
    engine:"Petrol",
    price:800000
    // 2. Method (Many)
}
// console.log(car1.getFullDetail());

// There are 3 ways to access the object properties member

// 1. objectName.propertyName
console.log(car1.brand)

// 2. objectName['propertyName']
console.log(car2['brand'])

// 3. objectName[Expression]
let x = "brand";
console.log(car3[x]); // x is an Expression