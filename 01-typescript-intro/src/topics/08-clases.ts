



export class Person {
    
    // public name: string;
    // private address: string;


    constructor(
            public firstName: string, 
            public lastName: string, 
            private address: string = 'No Address'
        ) {}
    
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'MedaYork')
//     }
// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName)
    }
}


// const ironMan = new Person('Ironman','MedaYork');
const tony = new Person('Tony','Stark', 'New York');
const ironMan = new Hero('Ironman', 45 , 'Tony Stark', tony);



console.log(ironMan)


