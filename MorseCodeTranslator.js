//Author: Sarah Ann Roy
//Project Name: MorseCodeTranslator
//Project Description: A program written in JavaScript to be able to encrypt English phrases into Morse Code and decrypt Morse Code into English.
//InternationalMorseCode.png source: https://scoutlife.org/hobbies-projects/funstuff/575/morse-code-translator/
//References: https://www.tutorialspoint.com/converting-string-to-morse-code-in-javascript 

const prompt = require("prompt-sync")();
const MorseCode = {
    'A': ".-",
    'B': "-...",
    'C': "-.-.",
    'D': "-..",
    'E': ".",
    'F': "..-.",
    'G': "--.",
    'H': "....",
    'I': "..",
    'J': ".---",
    'K': "-.-",
    'L': ".-..",
    'M': "--",
    'N': "-.",
    'O': "---",
    'P': ".--.",
    'Q': "--.-",
    'R': ".-.",
    'S': "...",
    'T': "-",
    'U': "..-",
    'V': "...-",
    'W': ".--",
    'X': "-..-",
    'Y': "-.--",
    'Z': "--..",
    '1': ".----",
    '2': "..---",
    '3': "...--",
    '4': "....-",
    '5': ".....",
    '6': "-....",
    '7': "--...",
    '8': "---..",
    '9': "----.",
    '0': "-----",
    '?': "..--..", //question mark
    '!': "-.-.--", //exclaimation point
    '.': ".-.-.-", //period or full stop
    ',': "--..--", //comma
    ';': "-.-.-.", //semicolon
    ':': "---...", //colon 
    '+': ".-.-.",  //plus sign
    '-': "-....-", //minus or "dash"
    '/': "-..-.",  //division or "OR"
    '=': "-...-",  //equal to
}
const English = {
    '.-'    : "A",
    '-...'  : "B",
    '-.-.'  : "C",
    '-..'   : "D",
    '.'     : "E",
    '..-.'  : "F",
    '--.'   : "G",
    '....'  : "H",
    '..'    : "I",
    '.---'  : "J",
    '-.-'   : "K",
    '.-..'  : "L",
    '--'    : "M",
    '-.'    : "N",
    '---'   : "O",
    '.--.'  : "P",
    '--.-'  : "Q",
    '.-.'   : "R",
    '...'   : "S",
    '-'     : "T",
    '..-'   : "U",
    '...-'  : "V",
    '.--'   : "W",
    '-..-'  : "X",
    '-.--'  : "Y",
    '--..'  : "Z",
    '.----' : "1",
    '..---' : "2",
    '...--' : "3",
    '....-' : "4",
    '.....' : "5",
    '-....' : "6",
    '--...' : "7",
    '---..' : "8",
    '----.' : "9",
    '-----' : "0",
    '..--..': "?", //question mark
    '-.-.--': "!", //exclaimation point
    '.-.-.-': ".", //period or full stop
    '--..--': ",", //comma
    '-.-.-.': ";", //semicolon
    '---...': ":", //colon
    '.-.-.' : "+", //plus sign
    '-....-': "-", //minus or "dash"
    '-..-.' : "/", //division or "OR"
    '-...-' : "=", //equal sign
}
console.log("Enter 0 to encrypt English phrases into Morse Code");
console.log("Enter 1 to decrypt Morse Code into English");
var choice = parseInt(prompt("Enter you choice: "));

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

function encrypt(phrase)
{ //O(n)
   
    //converting the phrase to Upper Case and splitting the phrase into an array of strings (chars)
    var chars = phrase.toUpperCase().split("");
    var morse = ""; //morse code to be returned

    //for-loop to traverse array of string (chars)
    for(let i=0;i<chars.length;i++)
    {
        if (MorseCode[chars[i]]) //check if morse code for each char exists
        {
            morse = morse.concat(MorseCode[chars[i]]," "); //concatenate morse code 
        }
        else //morse code for char doesn't exist
        {
            morse = morse.concat(chars[i]," "); //concatenate with the char
        }
    }
    return morse; //return morse
}

function decrypt(code)
{//O(n)
    //splitting the phrase into an array of strings (chars)
    var morse = code.split(" "); 
    var str = ""; //translated phrase to be returned
    
    //for-loop to traverse array of string (chars)
    for(let j=0;j<morse.length;j++)
    {
        if (English[morse[j]]) //check if morse code for each char exists
        {
            str = str.concat(English[morse[j]]," "); //concatenate morse code 
        }
        else //English translation for char doesn't exist
        {
            str = str.concat(morse[j]," "); //concatenate with the char
        }
    }
    return str; //return str
}
