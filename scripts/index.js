/**
* * Project Name: MorseCodeTranslator
* * Description: A program written in JavaScript to be able to encode Latin alphabet into 
* *              Morse Code and decode Morse Code into its Latin alphabet equivalent.
* References: https://scoutlife.org/hobbies-projects/funstuff/575/morse-code-translator/ 
            : https://alexanderell.is/posts/writing-morse-code-games/ 
* * Author: Sarah Ann Roy
* TODO: Clear text button
* TODO: Glossary and history
* TODO: Make web app prettier
**/
function main(choice){
    var eng = document.getElementById("english-text").value;
    var morse = document.getElementById("morse-text").value;
    switch(choice){
        case 0: //english -> morse
        document.getElementById("morse-text").value = Encode(eng);
        break;

        case 1: //morse -> english
        document.getElementById("english-text").value = Decode(morse);
        break;

        default:
            console.log("Wrong choice!");
            break;
    }
}
function Encode(phrase){ //english -> morse
    //O(n)
    //converting the phrase to Upper Case and splitting the phrase into an array of strings (chars)
    var chars = phrase.toString().toUpperCase().split("");
    var morse = ""; //morse code to be returned

    //for-loop to traverse array of string (chars)
    for(let i=0;i<chars.length;i++)
    {
        if (Morse_Code_Map[chars[i]]) //check if morse code for each character exists
        {
            morse = morse.concat(Morse_Code_Map[chars[i]]," "); //concatenate morse code 
        }
        else //morse code for char doesn't exist
        {
            morse = morse.concat(chars[i],"/ "); //concatenate with the char
        }
    }
    return morse; //return morse code
}
function Decode(code){
    //O(n)
    //splitting the phrase into an array of strings (chars)
    var m = code.toString().split(" "); 
    var translation = ""; //translated phrase to be returned
    
    //for-loop to traverse array of string (chars)
    for(let j=0;j<m.length;j++)
    {
        if (Latin_Alph_Num[m[j]]) //check if morse code for each char exists
        {
            translation = translation.concat(Latin_Alph_Num[m[j]],""); //concatenate morse code 
        }
        else //Latin alphabet translation for char doesn't exist
        {
            translation = translation.concat(m[j]," "); //concatenate with the char
            translation = translation.replace("/","") //removes the slash from the string (if it exists)
        }
    }
    return translation; //return str
}
const Morse_Code_Map = {
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
const Latin_Alph_Num = {
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