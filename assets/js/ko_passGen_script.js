// declare and initialize the arrays
var numBersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var uppCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var lowCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var specCharArr = ['!', '#', '$', '%', '&', '*', '@', '[', '^', '{', '}', '~'];

function generatePassword() {
  // declare the object. it will be populated by a push from if statements below where
  // the if statements concatenate the 4 arrays together.
  // Looked this up and found they are essentially nested arrays
  var pwData = {
    comboArray: [],
  };

  // verify that the password length is correct -------------------
  while (userInputPwLength < 8 || userInputPwLength > 128 || isNaN(userInputPwLength)) {
    if (userInputPwLength < 8) {
      alert("Sorry the Password Length is too Short.")
    };
    if (userInputPwLength > 128) {
      alert("Sorry the Password is too Long.")
    };
    var userInputPwLength = parseInt(prompt("Pick a password length of 8 to 128 characters"));
  };

  // alert("Your password will be " + userInputPwLength + " characters");  // for debugging

  // prompt for which character sets are used
  // and validate that art least one character set is actaully selected
  var userInputNumb = false, userInputUpper = false, userInputLower = false, userInputSpec = false;

  while ((userInputNumb === false) && (userInputUpper === false) && (userInputLower === false) && (
      userInputSpec === false)) {
    alert("Please pick at least 1 of these sets: \n  Numbers \n  Upper Case Letters \n  Lower Case Letters \n  Special Characters");
    userInputNumb = confirm('Want "Numbers" in your passwword?');
    userInputUpper = confirm('Want "UPPERCASE LETTERS" in your password ?');
    userInputLower = confirm('Want "lower case letters" in your password ?');
    userInputSpec = confirm('Want "Special characters" in your password ?');
  };

  // push a new key.value pair of combined character sets to pwData.comboArray -------------
  if (userInputNumb == true) {
    pwData.comboArray.push(numBersArr);
  };

  if (userInputUpper == true) {
    pwData.comboArray.push(uppCaseArr);
  };

  if (userInputLower == true) {
    pwData.comboArray.push(lowCaseArr);
  };

  if (userInputSpec == true) {
    pwData.comboArray.push(specCharArr);
  };

  // begin loop to concatenate string__
  let x = 0;

  var passwordString = "";

  while (x < userInputPwLength) {
    // 1st Math.Random returns a random number from the number of Character sets requested by user
    // which is found by looking at how many arrays are pushed(nested) to comboArray
    var indexA = Math.floor(Math.random() * (pwData.comboArray.length));
    // 2nd Math.Random returns a random number index of the nested array found from the first random number
    var indexB = Math.floor(Math.random() * (pwData.comboArray[indexA].length - 1));
    var passwordString = passwordString + pwData.comboArray[indexA][indexB];
    //console.log("------------------------") // for debugging
    //console.log(pwData.comboArray[indexA][indexB]); // for debugging
    x++
  };
  //console.log("------------------------"); // for debugging
  //console.log(passwordString);  // for debugging
  // alert("Your password is " + passwordString); // for debugging
  return passwordString;
};

// ____________Provided code below__________________________

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  scrollToTop();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// add function to scroll app to top for mobile phones
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

