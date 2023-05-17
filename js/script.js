const output = document.getElementById('output');
const btnCopy = document.getElementById('btnCopy');

// btn click to copy password

btnCopy.addEventListener('click', async ()=>{
    const pass = outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert("copied");
    }else{
        alert("There is no password to copy");
    }
});

