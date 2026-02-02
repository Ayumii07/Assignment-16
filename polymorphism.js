class Shape {
    calculateArea() {
        console.log("Area not defined");
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        console.log("Rectangle Area:", this.length * this.width);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        console.log("Circle Area:", 3.14 * this.radius * this.radius);
    }
}
// Using polymorphism
let shapes = [
    new Rectangle(15, 10),
    new Circle(7)
];
shapes.forEach(shape => shape.calculateArea());
/*
Polymorphism allows the same method to perform different actions based on the object.
Method overriding occurs when a child class defines a method with the same name as the parent class method.
*/
