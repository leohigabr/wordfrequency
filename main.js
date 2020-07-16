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

const insertP = (word, freq) => {
    const p = createP();
    p.innerText = `${word}\ncount = ${freq}`;
    showResult.appendChild(p);
}

checkBtn.addEventListener('click', () => {
    const bagOf = wordFreq(getInput());
    Object.keys(bagOf).sort().forEach(function(word) {
        insertP(word, bagOf[word]);
    })
})