class Animal{
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    display(){
        alert(this.toString());
    }
    toString(){
        return `Name : ${this.name} ------- Weight : ${this.weight}`;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }
}
let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
let info1 = objAnimal1.toString();
objAnimal1.display();
let objAnimal2 = new Animal();
objAnimal2.setName("Mouse");
objAnimal2.display();