// Create a class called `Person` with properties `name`, `age`, and `gender`. Add a method called `introduce` that prints out a message introducing the person.

class Person{
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
   introduce(){
    console.log(`Hello my name is ${this.name}`);
   }     
    
}

let person=new Person("clarine",21,"female")
person.introduce();
console.log(person);

// . Create a class called `Rectangle` with properties `width` and `height`. Add methods to calculate the area and perimeter of the rectangle.
class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    calculateTheArea(){
      let perimeter= 2*(this.height+this.width)
      console.log(perimeter); 
    }
    

}
let rectangle=new Rectangle(23,12)
rectangle.calculateTheArea()
console.log(rectangle);

// Create a class called `Animal` with properties `name` and `species`. Add a method called `makeSound` that prints out a message indicating the sound the animal makes. Create a subclass called `Cat` that overrides the `makeSound` method to print out "Meow".
class Animal{
    constructor(name,species){
    this.name=name
    this.species=species
}
makesound(){
    console.log(a);
}
}
