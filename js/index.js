// Iteration 1: Names and Input

let hacker1 = 'John';
let hacker2 = 'Sam'

console.log(`The drivers name is ${hacker1}`)
console.log(`The navigators name is ${hacker2}`)


// Iteration 2: Conditionals

// function names(){
//     if (hacker1.length > hacker2.length){
//         console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
//     }else if(hacker1.length < hacker2.length){
//         console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
//     } else {
//        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
//     }   
// }
// names()


// Iteration 3: Loops




// console.log(hacker1.split('').join(' ').toUpperCase())

// console.log(hacker1.split("").reverse().join(''))

let a = [hacker1, hacker2]

function order(){
    let first = hacker1[0];
    let sec = hacker2[0];

    if(first.charCodeAt(0) > sec.charCodeAt(0)){
        console.log(`The driver's name goes first.`)
    } else if(first.charCodeAt(0) < sec.charCodeAt(0)){
    }else{
        console.log(`Yo, the navigator goes first definitely.` )
    }
}