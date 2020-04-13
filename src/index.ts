interface Human {
    name: string;
    age:number;
    gender: string;
}

const person = {
    name: "ori",
    age: 7,
    gender: "n"
};

const hello = (person:Human): void => {
    console.log(`hola, ${person.gender} ${person.name}, you're ${person.age}`);
};

console.log(hello(person));

export {};