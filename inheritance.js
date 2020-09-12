class Parent {
    constructor(){
        this.fahtherName = "Shawn";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fahtherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2.getFullName());
console.log(baby.getFullName());