import { Morse } from './morse.js';
export function encode(phrase)
{ //O(n)
   
    //converting the phrase to Upper Case and splitting the phrase into an array of strings (chars)
    var chars = phrase.toUpperCase().split("");
    var morse = ""; //morse code to be returned

    //for-loop to traverse array of string (chars)
    for(let i=0;i<chars.length;i++)
    {
        if (Morse[chars[i]]) //check if morse code for each char exists
        {
            morse = morse.concat(Morse[chars[i]]," "); //concatenate morse code 
        }
        else //morse code for char doesn't exist
        {
            morse = morse.concat(chars[i],"/ "); //concatenate with the char
        }
    }
    return morse; //return morse
}