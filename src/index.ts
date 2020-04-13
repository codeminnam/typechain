class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

const csy = new Human("csy", 25, "m");

const hello = (person:Human): void => {
    console.log(`hola, ${person.gender} ${person.name}, you're ${person.age}`);
};

console.log(hello(csy));

export {};