//Author: Sarah Ann Roy
//Project Name: MorseCodeTranslator
//Project Description: A program written in JavaScript to be able to encrypt English phrases into Morse Code and decrypt Morse Code into English.
//InternationalMorseCode.png source: https://scoutlife.org/hobbies-projects/funstuff/575/morse-code-translator/ 

import promptSync from 'prompt-sync'; //importing the synthetic default from prompt-sync
import { decrypt } from './decrypt.js'; //importing decrypt function
import { encrypt } from './encrypt.js'; //importing encrypt function
const prompt = promptSync();

console.log("Enter 0 to encrypt English phrases => Morse Code");
console.log("Enter 1 to decrypt Morse Code => English");
var choice = parseInt(prompt("Enter you choice: "));//take user input as int

if(choice == 0) // English -> Morse Code
{
    console.log("English -> Morse Code");
    var phrase = prompt("Enter English phrase to be encrypted: "); //prompting user to input phrase
    console.log("Morse Code: "+encrypt(phrase)); //passing user inputted string to encrypt function
}
else if(choice == 1) // Morse Code -> English
{
    console.log("Morse Code -> English");
    var code = prompt("Enter Morse Code to be decrypted: "); //prompting user to input morse code
    console.log("Translated Message: "+decrypt(code)); //passing user inputted string to decrypt function
}
else //user input was neither 0 nor 1
{
    console.log("Invalid choice");
}
