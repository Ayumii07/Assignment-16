// Inheritance allows one class to use properties of another class
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // calls parent constructor
    }
    makeSound() {
        console.log(this.name + " barks");
    }
}
// Create objects
let animal1 = new Animal("Generic Animal");
let dog1 = new Dog("Lucy");
animal1.makeSound();
dog1.makeSound();
/*
extends -> used to inherit
super -> used to call parent class constructor
*/
