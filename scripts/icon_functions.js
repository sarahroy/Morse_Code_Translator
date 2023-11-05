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
function copy(a) //works!
{
    const text = document.getElementById(a);// Get the text field
    navigator.clipboard.writeText(text.value);// Copy the text inside the text field
}
function paste(b,c) //works!
{
    const pasteButton = document.getElementById(c);
    pasteButton.addEventListener('click', async () => {
        try 
        {
            const text = await navigator.clipboard.readText()
            document.getElementById(b).value = text;
            console.log('Text pasted.');
        } 
        catch (error) 
        {
            console.log('Failed to read clipboard. Using execCommand instead.');
            document.getElementById(b).focus();
            const result = document.execCommand('paste')
            console.log('document.execCommand result: ', result);
        }
    });
}
function clear(i) //DOES NOT WORK
{
    /*const textarea = document.getElementById(d);
    const butn = document.getElementById(e);
    butn.addEventListener('click', function handleClick() {
        text.value = 'not working';
    });*/
    //document.getElementById(i).value = "";
    document.getElementById(i).value = "b";
}
