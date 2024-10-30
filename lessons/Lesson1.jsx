/**
 * Lesson 1 - Javascript you need to know for React (string interpolation, arrow functions and imports/exports)
 */

// Oh, hello! I didn't see you there. I was just writing some code.
function hello(name) {
    var uppercaseName = name.toUpperCase();
    var greeting = 'Hello, ';
    greeting += uppercaseName;
    greeting += '!';
    return greeting;
}

// that code is so 2015! Let's change the variable declarations to something more modern.
function helloUsinglet(name) {
    let uppercaseName = neame.toUpperCase();
    let greeting = 'Hello, ';
    greeting += name;
    greeting += "!";
    return greeting;
}

// how about we make it const instead of let?
function helloUsingconst(name) {
    const uupercaseName = name.toUpperCase();
    const greeting = 'Hello, '+ name + '!';
    return greeting; 
    
}

// now let's change the concatenation to a template string!
function helloUsingTemplatestring(name){
    const greeting = `Hello, ${name.toUpperCase()}!`;
    return greeting;
}

// now let's change the function to an arrow function!
const helloUsingArrowFunction = (name) => {
    const greeting = `Hello, ${name.toUpperCase()}!`;
    return greeting;
}


// now let's make it a one-liner!
const helloOneLiner = (name) => `Hello, ${name.toUpperCase()}!`

// now let's export the function so we can use it in another file!
export{hello, helloOneLiner, helloUsingArrowFunction};

// but wait, what is the difference between a normal function and an arrow function?


// let's see an example of a normal function that uses the 'this' keyword
const arrowFunction = () => {
    console.log("That is an interesting fuction using this ", this);

}
    arrowFunction(); //Wow! 
// now let's see an example of an arrow function that uses the 'this' keyword

// Let's export a function to use in another file!

const helloWorld = (name) => `Hello, ${name}!`;

export { helloWorld };

import { anObject, aFunction } from "./Lesson1Extra";
import { aNumber } from "../examples/Lesson1Extra"

console.log(aFunction("Ruba"));
console.log("A number from Lesson1Extra:", aNumber)

// now let's import another file and use the functions and other things there!
// notice how we can also rename the imported functions and variables, in the process called 'aliasing'
// we are going to see this in the next lesson again.

export default function Lesson1() {
    return (<>
        <div>{hello('RUBA')}</div>
    </>);
}