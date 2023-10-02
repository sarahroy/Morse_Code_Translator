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
function clear(d,e) //DOES NOT WORK
{
    const text = document.getElementById(d);
    const butn = document.getElementById(e);
    butn.addEventListener('click', function handleClick() {
        text.value = 'not working';
    });
}
