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

let age = 30;

if (true) {
    let age = 40;
    // you can't excess name outside of this roadblock!
    let name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if (true) {
        console.log('inside 2nd code block:', age)
    }
}

console.log('outside code block: ', age, name);

// you are allowed to redefine the variable in the roadblock!