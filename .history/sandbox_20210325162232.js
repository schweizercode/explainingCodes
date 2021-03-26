

// tempalte string

const title = 'Best reads of 2019 ';
const author = ' Mario ';
const likes = 30;


// let result = ' The blog called ' + title + 'By' + author + ' has ' + likes + ' likes ';
// console.log(result)

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// -> very important! I didn't know about this!!!
// -> You have to use those {` `} Backticks tags, those are different than these {' '}

// creating html templates
let html = ` 
<h2> ${title}</h2>
<p> By ${author} </p>
<span> This blog has ${likes} likes </span>
`;
