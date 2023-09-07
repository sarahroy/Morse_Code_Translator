import { Latin } from './latin.js';
export function decode(code)
{//O(n)
    //splitting the phrase into an array of strings (chars)
    var morse = code.split(" "); 
    var str = ""; //translated phrase to be returned
    
    //for-loop to traverse array of string (chars)
    for(let j=0;j<morse.length;j++)
    {
        if (Latin[morse[j]]) //check if morse code for each char exists
        {
            str = str.concat(Latin[morse[j]],""); //concatenate morse code 
        }
        else //Latin alphabet translation for char doesn't exist
        {
            str = str.concat(morse[j]," "); //concatenate with the char
            str = str.replace("/","") //removes the slash from the string (if it exists)
        }
    }
    return str; //return str
}