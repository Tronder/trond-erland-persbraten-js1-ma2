// Question 1

const backgroundButton = document.querySelector('button');

const body = document.querySelector('body');

backgroundButton.onclick = function () {
  body.style.backgroundColor = 'green';
};

// Question 2

const toggy = document.querySelector('.toggler');
const toggContainer = document.querySelector('.togglee');

toggy.onclick = function () {
  if (toggContainer.classList.length < 2) {
    toggContainer.classList.add('extra');
  } else {
    toggContainer.classList.remove('extra');
  }
};

// Alternative solution:
const toggy = document.querySelector('.toggler');
const toggContainer = document.querySelector('.togglee');

toggy.onclick = function () {
  toggContainer.classList.toggle('extra');
};

// Question 3

const dropdown = document.querySelector('select');
const paraDiv = document.querySelector('.paragraphs-container');

dropdown.onchange = function () {
  paraDiv.innerHTML = '';
  const selectedValue = this.value;
  console.log(selectedValue);

  for (let i = 1; i <= selectedValue; i++) {
    paraDiv.innerHTML += `<p class="content"></p>`;
  }
};

// Question 4

const text = document.querySelector('input');
const counter = document.querySelector('.char-count b');

text.onkeyup = function () {
  const len = event.target.value.length;

  counter.innerHTML = len;
};

// Question 5

const main = document.querySelector('body');

function scrolling() {
  const scrolledY = window.scrollY;

  if (scrolledY > 30) {
    main.classList.add('highlight');
  } else {
    main.classList.remove('highlight');
  }
}

window.onscroll = scrolling;
