/**
* * Author: Sarah Ann Roy
* * Project Name: MorseCodeTranslator
* * Description: A program written in JavaScript to be able to encode Latin alphabet into 
* *              Morse Code and decode Morse Code into its Latin alphabet equivalent.
* References: https://scoutlife.org/hobbies-projects/funstuff/575/morse-code-translator/ 
* TODO: Implement code into web app using HTML, CSS, & JS.
**/
import promptSync from 'prompt-sync'; //importing the synthetic default from prompt-sync
import { decode } from './decode.js'; //importing decode function
import { encode } from './encode.js'; //importing encode function
const prompt = promptSync();

console.log("Enter 0 to encode Latin phrases => Morse Code");
console.log("Enter 1 to decode Morse Code => Latin phrases");
var choice = parseInt(prompt("Enter you choice: "));//take user input as int

if(choice == 0) // Latin alphabet -> Morse Code
{
    var phrase = prompt("Enter phrase to be encoded: "); //prompting user to input phrase
    console.log(encode(phrase)); //passing user inputted string to encode function
}
else if(choice == 1) // Morse Code -> Latin alphabet
{
    var code = prompt("Enter Morse Code to be decoded: "); //prompting user to input morse code
    console.log(decode(code)); //passing user inputted string to decode function
}
else //user input was neither 0 nor 1
{
    console.log("Invalid input");
}
