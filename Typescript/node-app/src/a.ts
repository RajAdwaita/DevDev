// const a: number = 1;
// let b = "Adwaita";
// console.log(a);


// function greet(name: string) {
//     // return
//     console.log(`Hello ${name}`);
// }

// // type  inference
// function sum(a: number, b: number) {
//     console.log(a + b);

// }

// function checkAge(age: number): boolean {
//     return age >= 18;
// }
// // const name: string = greet("Adwaita")
// greet("Adwaita")
// sum(2, 43)

// console.log(checkAge(20));



// function codeExecute(fn: () => void, time: number) {
//     setTimeout(() => {
//         fn();
//     }, time)
// }

// function displayCount() {
//     const a: number = 20;
//     console.log(a);


// }

// codeExecute(displayCount, 3000);



// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string,
//     greet(phrase: string): void;
// };


// class Student implements User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;


//     constructor(fN: string, lN: string, a: number, e?: string) {
//         this.firstName = fN;
//         this.lastName = lN;
//         this.age = a;
//         this.email = e;

//     }

//     greet(phrase: string) {
//         console.log(`Welcome  ${phrase}`);

//     }


// }

// const newEntry = new Student("ADWAITA", "MODAK", 22);
// console.log(newEntry.age);
// newEntry.greet("ADWAITA");



// function isLegal(user: User) {
//     return user.age >= 18;
// }


// function greet(user: User) {
//     console.log("Hi" + user.lastName);

// }

// isLegal({
//     firstName: "Adwaita",
//     lastName: "Modak",
//     age: 20
// })
// greet({
//     firstName: "Adwaita",
//     lastName: "Modak",
//     age: 20
// })




// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string,
//     greet(phrase: string): void;
// };
// type UserX = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string,
//     greet(phrase: string): void;
// };


// type stringOrNumber = number | string;
// function greeet(id: stringOrNumber) {
//     console.log(id);
// }

// greeet(123213);
// greeet("123213")


// type Employee = {
//     name: string;
//     startDate: Date;
// };
// type Manager = {
//     name: string;
//     dept: string;
// }

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//     name: "Adwaita",
//     startDate: new Date(),
//     dept: "IT"

// }

// function getMax(arr: number[]) {
//     let maxValue: number = 0;
//     arr.forEach((a) => {
//         if (a > maxValue) {
//             maxValue = a;
//         }
//     });

//     return maxValue;
// }


// const ans: number = getMax([12, 32, 54, 1, 23, 67])

// console.log(ans);
// type keyInput = "Left" | "Right" | "Up" | "Down"

// enum Direction {
//     Up, Left, Right, Down
// }


// function doSomething(keyPressed: Direction) {
//     const x = Direction[keyPressed]
//     console.log(x);

// }
// // doSomething("Left")
// doSomething(Direction.Right)

type Input = number | string;

function getData<T>(input: T) {
    console.log(input);

}
getData<string[]>(["adawita", "asdasda"].map(s => s.toUpperCase()))
// getData(1235435)