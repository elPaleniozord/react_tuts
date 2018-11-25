

class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
    getGretting(){
        return `Hi, I am ${this.name}`;
    }
}



class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.homeLocation){
            description += ` He lives in ${this.homeLocation}`
        }
        return description;
    }
}

const me = new Traveler('Jacek Walasik', 29, 'Wrocław');
console.log(me.getDescription())

const dude = new Traveler('Jeff Lebowski', 43);
console.log(dude.getDescription())