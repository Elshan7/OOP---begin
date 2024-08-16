// Person classi yaradib ona name age ve surname verin daha sonra onun doğum ilini hesablayan class icinde bir function yazin
// Meselen age 20 verdiyimizde function 2004 nəticəsini versin

class Person {
    constructor (name,age,surname) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }

    getBirthYear () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}


const person1 = new Person ('Alizada' , 20 , 'Elshan');
console.log(`Birth year of ${person1.name} ${person1.surname} is ${person1.getBirthYear()}`);

