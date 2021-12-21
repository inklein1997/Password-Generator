// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//PSEUDO CODE

//Click button to generate password

//Responses will be stored in object called userResponses

//Prompt #1 = How many characters would you like for your password to have?  Must have a minimum of 8 and a maximum of 128.
//variable = passwordLength

//Prompt #2 = Would you like for your password to have uppercase letters?
//array uppercase = [A, B, C, D, ... X, Y, Z]

//Prompt #3 = Would you like for your password to have lowercase letters?
//array lowercase = [a, b, c, d, ... x, y, z]

//Prompt #4 = Would you like for your password to have numbers?
//array numbers = [1, 2, 3, 4 ... 8, 9, 0]

//Prompt #5 = Would you like for your password to have special characters?
//array special = [!, ", #, $, %, &, ', ( ... +, -, ^]



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




