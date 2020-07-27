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

const createHeader = () => {
  const tr = document.createElement('tr');

  const thWord = document.createElement('th');
  thWord.appendChild(document.createTextNode('Word'));
  tr.appendChild(thWord);

  const thCount = document.createElement('th');
  thCount.appendChild(document.createTextNode('Count'));
  tr.appendChild(thCount);

  showResult.appendChild(tr);
}

const createTable = (word, count) => {
    const tr = document.createElement('tr');

    const tdWord = document.createElement('td');
    tdWord.appendChild(document.createTextNode(word));
    tr.appendChild(tdWord);

    const tdCount = document.createElement('td')
    tdCount.appendChild(document.createTextNode(count));
    tr.appendChild(tdCount);
    
    showResult.appendChild(tr);  
}

const sortBag = (unsortedBag) => {
  createHeader();
    for(const [key, value] of Object.entries(unsortedBag).sort((a,b)=>b[1]-a[1])){
        createTable(key, value);     
    }
}

checkBtn.addEventListener('click', () => {
    const oldBag = document.getElementById('result');
    const unsortedBag = wordFreq(getInput());
    oldBag.innerHTML = '';
    sortBag(unsortedBag);
})