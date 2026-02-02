let person = {
    name: "Ayumi",
    age: 20,
    city: "Kathmandu",

    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
// Access using dot notation
console.log(person.name);
// Access using bracket notation
console.log(person["age"]);
// Update existing property
person.age = 23;
// Add new property dynamically
person.country = "Nepal";
// Call method
person.greet();
console.log(person);
// An object is a collection of properties and methods
// Objects are useful in real-world applications because they group related data and functions 
// together, making programs organized, reusable, and easy to manage