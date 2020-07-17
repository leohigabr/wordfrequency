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

const sortBag = (key, values) => {
    const sorted = Object.assign(values, key);
    return sorted;
}

checkBtn.addEventListener('click', () => {
    const oldBag = document.getElementById('result');
    const bagOf = wordFreq(getInput());
    oldBag.innerHTML = '';
    Object.keys(bagOf).sort().forEach(function(word) {
        insertP(word, bagOf[word]);
    })
})