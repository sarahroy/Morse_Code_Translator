//Author: Sarah Ann Roy
//Project Name: MorseCodeTranslator
//Project Description: A program written in JavaScript to be able to encrypt English phrases into Morse Code and decrypt Morse Code into English.
//InternationalMorseCode.png source: https://scoutlife.org/hobbies-projects/funstuff/575/morse-code-translator/
//References: https://www.tutorialspoint.com/converting-string-to-morse-code-in-javascript 

import promptSync from 'prompt-sync';
import { decrypt } from './decrypt.js';
import { encrypt } from './encrypt.js';
const prompt = promptSync();

console.log("Enter 0 to encrypt English phrases into Morse Code");
console.log("Enter 1 to decrypt Morse Code into English");
var choice = parseInt(prompt("Enter you choice: "));//take user input as int

if(choice == 0) // English -> Morse Code
{
    console.log("English -> Morse Code");
    var phrase = prompt("Enter English phrase to be encrypted: ");
    console.log(encrypt(phrase));
}
else if(choice == 1) // Morse Code -> English
{
    console.log("Morse Code -> English");
    var code = prompt("Enter Morse Code to be decrypted: ");
    console.log(decrypt(code));
}
else //user input was neither 0 nor 1
{
    console.log("Invalid choice");
}

/*
Compressing encrypt and decrypt functions into a single line of code (pseudocode not exact)
console.log(phrase.toUpperCase().split("").map(element => {return MorseCode[element] ? MorseCode[element] : element;}).join(" "));
*/