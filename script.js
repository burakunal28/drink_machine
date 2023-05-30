let balance = 0;
let question = "";
let answer = 0;
let themeIndex = 0;
const themes = ['theme-light', 'theme-dark', 'theme-red', 'theme-blue'];

const textField = mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
const select = mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));

function generateQuestion() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let operatorIndex = Math.floor(Math.random() * 2);
  let operators = ['+', '*'];
  let operator = operators[operatorIndex];
  
  switch (operator) {
    case '+':
      question = `${a} + ${b}`;
      answer = a + b;
      break;
    case '*':
      question = `${a} * ${b}`;
      answer = a * b;
      break;
  }
  
  document.getElementById('mathQuestion').innerText = `What is ${question}?`;
}

function checkAnswer() {
  let userAnswer = textField.value;
  if (parseInt(userAnswer) === answer) {
    balance += 5;
    document.getElementById('balance').innerText = `Balance: ${balance} TL`;
    generateQuestion();
  } else {
    alert("Wrong answer. Try again!");
  }
  textField.value = "";
}

function makeOrder() {
  let order = select.value;
  let cost = {coffee: 5, tea: 3, cupcake: 7}[order];
  if (balance >= cost) {
    balance -= cost;
    document.getElementById('balance').innerText = `Balance: ${balance} TL`;
    document.getElementById('message').innerText = "Your order is on the way!";
  } else {
    document.getElementById('message').innerText = "You do not have enough money.";
  }
}

function changeTheme() {
  const body = document.querySelector('body');
  body.classList.remove(themes[themeIndex]);
  themeIndex = (themeIndex + 1) % themes.length;
  body.classList.add(themes[themeIndex]);
}

window.onload = generateQuestion;
