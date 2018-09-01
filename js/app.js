'use strict';

let error = document.getElementById('error');
let textBox = document.getElementById('textBox');
textBox.addEventListener('change', function() {
  if (textBox.value.length < 8) {
    textBox.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    textBox.style.border = "1px solid lightgrey";
    error.style.display = "none";
  }
});

let selectBox = document.getElementById('selectBox');
let boxContent = document.getElementById('boxContent');
let triangleDiv = document.getElementById('triangleDiv');
selectBox.addEventListener('click', function() {
  if (boxContent.style.display === 'none') {
    boxContent.style.display = 'block';
    triangleDiv.classList.remove('down');
    triangleDiv.classList.add('up');
  } else {
    boxContent.style.display = 'none';
    triangleDiv.classList.remove('up');
    triangleDiv.classList.add('down');
  }
});

let checkBox = document.getElementById('checkBox');
checkBox.addEventListener('click', function() {
  if (checkBox.classList.contains('checkClick')) {
    checkBox.classList.remove('checkClick');
  } else {
    checkBox.classList.add('checkClick');
  }
});

let radioBox = document.getElementById('radioBox');
radioBox.addEventListener('click', function() {
  if (radioBox.classList.contains('radioClick')) {
    radioBox.classList.remove('radioClick');
  } else {
    radioBox.classList.add('radioClick');
  }
});

let buttonBox = document.getElementById('buttonBox');
buttonBox.addEventListener('click', function() {
  if (buttonBox.classList.contains('buttonClick')) {
    buttonBox.classList.remove('buttonClick');
  } else {
    buttonBox.classList.add('buttonClick');
  }
});
