window.onload = function () {
const counterDiv = document.querySelector('.counter');
const button = document.querySelector('button');
let counter = 0;

button.addEventListener('click',() => {
  counter++;
  counterDiv.innerHTML = `${counter} cliques!`;
})
}