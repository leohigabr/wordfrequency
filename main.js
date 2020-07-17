const checkBtn = document.getElementById('countBtn');
const showResult = document.getElementById('result');

const getInput = () => {
     return (document.querySelector('.inputBox')
        .value
        .replace(/[^\w\s]/gi, '')
        .toLowerCase()
        .trim()
        .split(/\s/)
     )
}

const wordFreq = (input) => {
    return input
      .reduce((map, word) =>
        Object.assign(map, {
          [word]: (map[word])
            ? map[word] + 1
            : 1,
        }),
        {}
      );
}

const createP = () =>{
    const p = document.createElement('p');
    return p;
}

const insertP = (word, count) => {
    const p = createP();
    p.innerText = `${word}\ncount = ${count}`;
    showResult.appendChild(p);
}

const sortBag = (unsortedBag) => {
    for(const [key, value] of Object.entries(unsortedBag).sort((a,b)=>b[1]-a[1])){
        insertP(key, value);      
    }
}

checkBtn.addEventListener('click', () => {
    const oldBag = document.getElementById('result');
    const unsortedBag = wordFreq(getInput());
    oldBag.innerHTML = '';
    sortBag(unsortedBag);
})