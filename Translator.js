//Author: Sarah Ann Roy
//Project Name: MorseCodeTranslator
//Project Description: A program written in JavaScript to be able to encode English phrases into Morse Code and decode Morse Code into English.
//InternationalMorseCode.png source: https://scoutlife.org/hobbies-projects/funstuff/575/morse-code-translator/ 

import promptSync from 'prompt-sync'; //importing the synthetic default from prompt-sync
import { decode } from './decode.js'; //importing decode function
import { encode } from './encode.js'; //importing encode function
const prompt = promptSync();

console.log("Enter 0 to encode English phrases => Morse Code");
console.log("Enter 1 to decode Morse Code => English");
var choice = parseInt(prompt("Enter you choice: "));//take user input as int

if(choice == 0) // English -> Morse Code
{
    console.log("English -> Morse Code");
    var phrase = prompt("Enter English phrase to be encoded: "); //prompting user to input phrase
    console.log("Morse Code: "+encode(phrase)); //passing user inputted string to encode function
}
else if(choice == 1) // Morse Code -> English
{
    console.log("Morse Code -> English");
    var code = prompt("Enter Morse Code to be decoded: "); //prompting user to input morse code
    console.log("Translation: "+decode(code)); //passing user inputted string to decode function
}
else //user input was neither 0 nor 1
{
    console.log("Invalid choice");
}
