function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getDetails = function () {
        console.log(this.brand + " " + this.model + " (" + this.year + ")");
    };
}
// Creating instances
let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Honda", "Civic", 2022);
// Print details
car1.getDetails();
car2.getDetails();
//Constructor function is used to create multiple objects of same type
// "new" keyword creates a new object and links it to the constructor