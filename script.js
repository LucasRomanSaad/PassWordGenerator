const uppercaseButton = document.getElementById("uppercaseButton");
const lowercaseButton = document.getElementById("lowercaseButton");
const numbersButton = document.getElementById("numbersButton");
const symbolsButton = document.getElementById("symbolsButton");
const buttonGenerator = document.getElementById("btn");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const lengthInput = document.getElementById("user-length");

let includeUppercase = true;
let includeLowercase = true;
let includeNumbers = true;
let includeSymbols = true;

uppercaseButton.addEventListener("click", () => {
  includeUppercase = !includeUppercase;
  toggleButtonStyle(uppercaseButton, includeUppercase);
  
});

lowercaseButton.addEventListener("click", () => {
  includeLowercase = !includeLowercase;
  toggleButtonStyle(lowercaseButton, includeLowercase);
  
});

numbersButton.addEventListener("click", () => {
  includeNumbers = !includeNumbers;
  toggleButtonStyle(numbersButton, includeNumbers);
  
});

symbolsButton.addEventListener("click", () => {
  includeSymbols = !includeSymbols;
  toggleButtonStyle(symbolsButton, includeSymbols);
  
});

buttonGenerator.addEventListener("click", () => {
 generateAndDisplayPassword()
});

function toggleButtonStyle(button, isActive) {
  button.style.backgroundColor = isActive ? "#005999" : "#0074cc";
}

function generateAndDisplayPassword() {
  let selectedCharacters = "";
  includeUppercase? selectedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ":""
  includeLowercase? selectedCharacters += "abcdefghijklmnopqrstuvwxyz":""
  includeNumbers? selectedCharacters += "0123456789":""
  includeSymbols? selectedCharacters += "~`!@#$%^&*()_-+={}[]|:;<>,.?/":""

  const passwordLength = parseInt(lengthInput.value);
  let password1 = "";
  let password2 = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex1 = Math.floor(Math.random() * selectedCharacters.length);
    const randomIndex2 = Math.floor(Math.random() * selectedCharacters.length);
    password1 += selectedCharacters.charAt(randomIndex1);
    password2 += selectedCharacters.charAt(randomIndex2);
  }

  result1.innerText = password1;
  result2.innerText = password2;
}



result1.addEventListener("click", function() {
  const selection = window.getSelection();
  const range = document.createRange();
  const element = result1.childNodes[0];
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
 
});

result2.addEventListener("click", function() {
  const selection = window.getSelection();
  const range = document.createRange();
  const element = result2.childNodes[0];
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
 
});
