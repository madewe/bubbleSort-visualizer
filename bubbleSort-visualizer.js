const generateElement = () => {
  return Math.floor(Math.random() * 100) +1;
}

const generateArray = (numberElements) => {
  const arr = [];
  for(let i = 0; i < numberElements; i++){
    arr.push(generateElement());
  }
  return arr;
}

const generateContainer = () => {
  return document.createElement('div');
}

const fillArrContainer = (htmlElement, intArr) => {
  htmlElement.innerHTML = '';
  intArr.forEach(element => {
    htmlElement.innerHTML += `<span>${element}</span>`
  })
}

const isOrdered = (int1, int2) => int1 <= int2;

const swapElements = (intArr, index) => {
  let noSwap = true;
  if(!isOrdered(intArr[index], intArr[index+1])){
    noSwap = false;
    let zwischenParken = intArr[index];
    intArr[index] = intArr[index+1];
    intArr[index+1] = zwischenParken;
  }
  return noSwap;
}

const highlightCurrentEls = (htmlElement, index) => {
  const children = htmlElement.children;
  children[index].style.border = '2px dashed red';
  children[index+1].style.border = '2px dashed red';
}

const generateArrayBtn = document.getElementById('generate-btn');
const sortArrayBtn = document.getElementById('sort-btn');
let startingArrayContainer = document.getElementById('starting-array');
const arrayContainer = document.getElementById('array-container');



generateArrayBtn.addEventListener("click", () => {  
  arrayContainer.innerHTML = `<div id="starting-array"></div>`;
  startingArrayContainer = document.getElementById('starting-array');      
  fillArrContainer(startingArrayContainer, generateArray(5));  
})

const sortArray = () => { 
  const numbers = Array.from(startingArrayContainer.children).map(element => parseInt(element.textContent));

  for(let i = 0; i < numbers.length-1; i++){
    let noSwap = true;
    for(let j = 0; j < numbers.length-1; j++){
      highlightCurrentEls(arrayContainer.lastElementChild, j);
      if(swapElements(numbers, j) === false){
        noSwap = false;
      };
      arrayContainer.appendChild(generateContainer());
    fillArrContainer(arrayContainer.lastElementChild, numbers);
    }
    if(noSwap) break;
  }
  arrayContainer.lastElementChild.style.border = '5px solid lightgreen';
}

sortArrayBtn.addEventListener("click", sortArray);



