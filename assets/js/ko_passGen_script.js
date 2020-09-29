var numBers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var speChars = ['!', '#', '$', '%', '&', '*', '?', '@', '[', '^', '{', '}', '~'];
var uppCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lowCase = [, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// var userInputPwLength = parseInt(prompt("Pick a password length of 8 to 128 characters"));

while (userInputPwLength < 8 || userInputPwLength > 128 || isNaN(userInputPwLength)) {
  var userInputPwLength = parseInt(prompt("Pick a password length of 8 to 128 characters"));
};

alert(userInputPwLength);

var userInputNumb = confirm('Want "Numbers" in your passwword?');
var userInputUpper = confirm('Want "UPPERCASE LETTERS" in your password ?');
var userInputLower = confirm('Want "lower case letters" in your password ?');
var userInputSpec = confirm('Want "Special characters" in your password ?');

if (userInputNumb === true) {

  alert("Yes I would like numbers");
} else {
  "No I would not like numbers"
};

alert(userInputNumb);
alert(userInputUpper);
alert(userInputLower);
alert(userInputSpec);


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);