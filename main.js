const checkBtn = document.getElementById('countBtn');

const getInput = () => {
     return (document.querySelector('.inputBox')
        .value
        .replace(/[^\w\s]/gi, '')
        .toLowerCase()
        .trim()
        .split(' ')
     )
}

checkBtn.addEventListener('click', () => {
    const words = getInput();
    console.log(words);
    console.log("length:", words.length);

    /* I will continue this code below, after
       discovering a way of cleaning (properly) and
       removing line breaks from the input.

    let count = [];
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words.length;j++){
            if(words[i] == words[j]){
                count++;
            }
        }
    }
    */
})