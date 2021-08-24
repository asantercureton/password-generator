// Assignment Code
var generateBtn = document.querySelector("#generate");
var input = document.querySelector("#password");
var letters = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[\]^_'{|}~";
var stored = [];
var containsLower = true;
var containsUpper = true;
var containsNumber = true;
var containsSpecial = true;

function generatePassword() {
  var result = prompt("Choose a length of at least 8 characters and no more than 128 characters.");
  var length = parseInt(result);
  var password = "";
  var possible = "";

  // CODE GOES HERE
  if (!isNaN(length) && length >= 8 && length <= 128) {

    containsLower = confirm('Do you want lowercase letters in your generated password?');
    containsUpper = confirm('Do you want uppercase letters in your generated password?');
    containsNumber = confirm('Do you want numbers in your generated password?');
    containsSpecial = confirm('Do you want special characters in your generated password?');
    
    if (!containsLower && !containsUpper && !containsNumber && !containsSpecial) {
      alert("Please select a parameter for lowercase, uppercase, number and/or special characters.");
      return generatePassword();
    }

    if (containsLower) {
      // Randomly select from letters (rounded down)
      // Grab a random letter
      // Log the selected letters output
      var random = Math.floor(Math.random() * letters.length);
      var collected = letters[random];
      // Possibilty of letters
      possible = possible.concat(letters);
      // Storing info within collected
      stored.push(collected);
    }


    if (containsUpper) {
      // Randomly select from letters (rounded down)
      // Grab a random letter
      // Log the output
      var random = Math.floor(Math.random() * upper.length);
      var collected = upper[random];
      // Possibilty of letters
      possible = possible.concat(upper);
      // Storing info within selectedLetter
      stored.push(collected);

    }

    // Repeated steps from above
    if (containsNumber) {
      var random = Math.floor(Math.random() * numbers.length);
      var collected = numbers[random];
      possible = possible.concat(numbers);
      stored.push(collected);

    }

    // Repeated steps from above  
    if (containsSpecial) {
      var random = Math.floor(Math.random() * special.length);
      var collected = special[random];
      possible = possible.concat(special);
      stored.push(collected);
    }
  } else {
    alert("Please enter a valid value.");
    // Gives a result if one or reruns function
    return generatePassword();
  }
  console.log(stored);
  // Loop
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * possible.length);
    password += possible[random];
  }

  // Logs the possible and password strings
  console.log('POSSIBLE', possible);
  console.log('PASSWORD', password);
  // Storing before clear out
  console.log('STORED', stored);
  stored = [];
  // Returns the password
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
