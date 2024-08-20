class Computer {
    constructor (brand, OS, type) {
        this.brand = brand;
        this.OS = OS; 
        this.type = type; 
    }

    powerOn() {
        console.log(`${this.brand} ${this.type} powers on with ${this.OS}.`);
    }

    static powerAllOn(...computers) {
        //let comp1 = computers[0];
        //let comp2 = computers[1];
        //console.log(comp1.powerOn());
        //console.log(comp2.powerOn());
        
        for(let i = 0; i < computers.length; i++) {
            console.log(computers[i].powerOn());
        }
        return "You've turned on all the computers.";
    }
}

const predator = new Computer ("Predator", "Windows", "PC"); 
const appleBook = new Computer ("AppleBook", "iOS", "Mac"); 

console.log(Computer.powerAllOn(predator, appleBook)); 
//console.log(predator.powerOn());