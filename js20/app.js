console.log("labas");


const obj = {
  name: "Mario",
  age: 32,
  job: "plumber",
};

console.log(obj);

class PlayCharacter {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const obj1 = new PlayCharacter('Mario', 32, 'plumber');
const obj2 = new PlayCharacter('Luigi', 30, 'plumber');

console.log(obj1);
console.log(obj2);

console.log(obj1.age, obj2.age);

class TV {
 
    constructor() {
        this.brand = 'Samsung';
        this.model = 'UE55NU7172UXXH';
        this.year = 2018;
        this.price = 500;
    }
 
}

 