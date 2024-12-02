const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Welcome to the DOM World!';

const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'blue';
}
const firstContainer = document.querySelector('.container');
firstContainer.style.backgroundColor = 'yellow';
