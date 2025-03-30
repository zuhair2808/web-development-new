class Animal{
    constructor(name,species,age) {
        this.name=name;
        this.species=species;
        this.age=age;
    }

    getInfo(){
        return "Name:" + this.name + "<br>Species: " + this.
        species + "<br>Age: " + this.age;

    }
   static compareAge(animal1,animal2) {
        if (animal1.age>animal2.age) {
            return animal1;
        } else {
            return animal2;
        }
    }
}
class Cat extends Animal{
    constructor(name,age,breed) {
        super(name,"Cat",age);
        this.breed=breed;
    }
    getCatInfo(){
        const info = this.getInfo();
        return info + "<br>Breed: " + this.breed;
    }
}
let cat1 = new Cat("Buddy",3, "Persian");
document.getElementById("animal1_info").innerHTML = cat1.getCatInfo();
let cat2 = new Cat("Max",2,"Bengal");
document.getElementById("animal2_info").innerHTML = cat2.getCatInfo();

const olderCat = Animal.compareAge(cat1,cat2);
document.writeln("<br>Older Cat info:<br>")
document.writeln(olderCat.getCatInfo());