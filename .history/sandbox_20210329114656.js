// // tempalte string

// const title = 'Best reads of 2019 ';
// const author = ' Mario ';
// const likes = 30;


// // let result = ' The blog called ' + title + 'By' + author + ' has ' + likes + ' likes ';
// // console.log(result)

// // template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // -> very important! I didn't know about this!!!
// // -> You have to use those {` `} Backticks tags, those are different than these {' '}

// // creating html templates
// let html = ` 
// <h2> ${title}</h2>
// <p> By ${author} </p>
// <span> This blog has ${likes} likes </span>
// `;
// console.log(html);

// booleans & comparisons 
// console.log(true, false, "true", "false");


// // methods can reuturn booleans
// let email = 'luigi@theninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// let results = email.includes('!');
// let results = names.includes('bowser');

// console.log(results);


// //type conversion 
// let score = '100';

// // score = Number(score);
// // console.log(score + 1);
// // console.log(typeof score);

// // let result = Number('hello');
// // let result = String(50);
// // let result = Boolean(0)
// let result = Boolean('');

// console.log(result, typeof result);


// for loops 

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }
// console.log('loop finished')


// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     let html = `<div>${names[i]} </div>`;
//     console.log(html)
// }


// while Loop 

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while (i < 5) {
//     console.log('in loop:', i);
//     i++;
// }

// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }


// do while loops

// let i = 2;

// do {
//     console.log('val of i is:', i);
//     i++;
// } while (i < 5);


//if statements 
// const age = 25;

// if (age > 20) {
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shuan', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 4) {
//     console.log("that's a lot of ninjas")
// }

// logical operators - OR || and AND &&

// const password = 'p@ss12';

// if (password.length >= 12 && password.includes('@')) {
//     console.log(' that password is mighty strong!');

// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('that password is strong enough!');

// } else {
//     console.log('password is not long enough');
// }


//logical NOT (!)

// let user = false;

// if (!user) {
//     console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);


// break and continue 

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//     if (scores[i] === 0) {
//         continue;
//     }

//     console.log('your score:', scores[i]);

//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }

// }


//switch statemnts 

// const grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
// }


//usingn if statements 
// if (grade === 'A') {
// } else if (gradce === 'B') {

// } else if (gradce === 'C') {

// } else if (gradce === 'D') {

// } else if (gradce === 'E') {

// } else {

// }

// const goals = [60, 763, 762, 81, 14, 8, 37,];

// for (let i = 0; i < goals.length; i++) {
//     console.log("that's your score:", goals[i])
// }

// variables & block scope 

// const age = 30;

// if (true) {
//     const age = 40;
//     // you can't excess name outside of this roadblock!
//     const name = 'shaun';
//     console.log('inside 1st code block: ', age, name);

//     if (true) {
//         const age = 50;
//         console.log('inside 2nd code block:', age);
//         var test = 'hello';
//     }
// }

// console.log('outside code block: ', age, name);

// you are allowed to redefine the variable in the roadblock!


// FUNCTION declaration

// function greet() {
//     console.log('hello there');
// }

// // function expression 
// const speak = function () {
//     console.log('good day!');
// };

// // greet();
// // greet();
// // greet();


// speak();
// speak();

// // function declaration 
// function greet() {
//     console.log('hello there');
// }


//arguments & parameters

// const speak = function (name = 'luigi', time = 'night') {
//     console.log(`good ${time} ${name}`);
// };

// regular function
// const calcArea = function (radius) {
//     return 3.14 * radius ** 2;
// };

// arrow function
// const calcArea = radius => 3.14 * radius ** 2;;

// const area = calcArea(5);
// console.log('area is:', area);

// -> praxtice arrow functions

// const greet = function () {
//     return 'hello, world';
// }

// const greet = () => 'hello world';

// const result = greet();
// console.log(result)

// const bill = function (products, tax) {
//     let total = 0
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// const name = 'shaun';

// //functions 

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne)

// //methods 

// let resultTwo = name.toUpperCase();
// console.log(resultTwo)


// callbacks & foreach

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// };

// people.forEach(logPerson);

// get a refernece to the 'ul'

// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// let html = ``;

// people.forEach(person => {
//     //create html template
//     html += `<li style="color: purple"> ${person}</li>`
// });

// console.log(html);
// ul.innerHTML = html;


//object literals 

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite']
};
