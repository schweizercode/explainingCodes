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

// let i = 0;

// while (i < 5) {
//     console.log('in loop:', i);
// }