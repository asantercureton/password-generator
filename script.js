// Assignment Code
var generateBtn = document.querySelector("#generate");
var input = document.querySelector("#password");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[\]^_'{|}~";
var stored = [];
var containsLower = true;
var containsUpper = true;
var containsNumber = true;
var containsSpecial = true;

function generatePassword() {
  var length = 12;
  var password = "";
  // CODE GOES HERE

  if (containsLower) {
    var random = Math.floor(Math.random * letters.length);
    var selectedLetter = letters[random];
    stored.push(selectedLetter);
    console.log(selectedLetter);
  }

  if (containsUpper) {
    var random = Math.floor(Math.random * letters.length);
    var selectedLetter = letters[random];
    stored.push(selectedLetter);
    console.log(selectedLetter);
  }

  if (containsNumber) {
    var random = Math.floor(Math.random * numbers.length);
    var selectedLetter = numbers[random];
    stored.push(selectedLetter);
    console.log(selectedLetter);
  }

  if (containsSpecial) {
    var random = Math.floor(Math.random * special.length);
    var selectedLetter = special[random];
    stored.push(selectedLetter);
    console.log(selectedLetter);
  }


  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random * letters.length);
    password += letters[random];
  }

  console.log(password);
  return "text";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
