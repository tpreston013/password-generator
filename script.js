// Assignment Code
var generateBtn = document.querySelector("#generate");


//declare variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specials = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");


//validate that I chose at least 1 character type
  //if not at least 1 start over
  //handling recursion might get wonky  -- may not be able to just call generate again
  //maybe just alert you didn't choose anything 


var passwordLength = (window.prompt ("Choose password length. (Select number between 8-128)"));
if (passwordLength < 8  && passwordLength > 128) {
  passwordValid = false; 
} while (passwordValid === false) {
  passwordLength = window.prompt ("Not valid. Select number between 8-128.")
} if (passwordLength >= 8 && passwordLength <=128) {
  passwordValid = true;
}   if (passwordLength < 8 && passwordLength > 128) {
  passwordValid = false
}

//declare generatePassword function

function generatePassword () {
  var 

}

//declare options array 

//prompt for length
  //8<length<128
  //check that length fullfills 8-128 requirement

//prompt for criteria
//var confirmUppercase = confirm uppercase (makes value true)
//confirm lowercase
//comfirm numbers
//confirm specials

//handle validation last
//add chosen character types to options array
//(conditional) if confirm {characterType} ===true then concatenate the {characterType array } onto the options array
  //conditional for each {characterType}

//declare passwordArray 

//generate password from chosen characters
  //for loop as many times as the user selected for password length
    //generate a random index
    //use random index to select a character from options array
    //push random character into passwordArray

//declare passwordString = passwordArray .join

//return passwordString






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






