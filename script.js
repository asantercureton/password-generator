// Assignment Code
var generateBtn = document.querySelector("#generate");
var input = document.querySelector("#password");
var letters = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[\]^_'{|}~" ;
var stored = [];
var containsLower = true;
var containsUpper = true;
var containsNumber = true;
var containsSpecial = true;

function generatePassword() {
  var length = 18;
  var password = "";
  // CODE GOES HERE

  if (containsLower) {
    // Randomly select from letters (rounded down)
    // Grab a random letter
    // Log the selected letters output
    var random = Math.floor(Math.random() * letters.length);
    var selectedLetter = letters[random];
  
    stored.push(selectedLetter);
    console.log(selectedLetter);
  }


  if (containsUpper) {
    // Randomly select from letters (rounded down)
    // Grab a random letter
    // Log the output
    var random = Math.floor(Math.random() * upper.length);
    var selectedUpper = upper[random];

    stored.push(selectedUpper);
    console.log(selectedUpper);
  }


  if (containsNumber) {
    var random = Math.floor(Math.random() * numbers.length);
    var selectedNumber = numbers[random];
    stored.push(selectedNumber);
    console.log(selectedNumber);
  }


  if (containsSpecial) {
    var random = Math.floor(Math.random() * special.length);
    var selectedSpecial = special[random];
    stored.push(selectedSpecial);
    console.log(selectedSpecial);
  }


  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * letters.length);
    password += letters[random];
  }

  console.log(password);
  return password;
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
