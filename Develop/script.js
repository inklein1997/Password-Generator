// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
const uppercase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  // console.log(uppercase.length)
const lowercase = uppercase.map(name => name.toLowerCase());  // console.log(lowercase)
const numbers = [0,1,2,3,4,5,6,7,8,9,0]
const special = ["!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".","/",";",":","<",">","=","?","@","[","]","\ ","{","}", "|","~","`"]
let passwordArray = [];
let randomPassword = "";
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

//PSEUDO CODE

//Click button to generate password

function generatePassword() {
  let passwordLength = prompt("How many characters would you like for your password to have?");
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
      console.log(passwordLength);
    } else { 
    let passwordLength = prompt("You must have at least 8 characters, but no more than 128 characters")
      console.log(passwordLength);
    }

  let upper = confirm("Would you like for your password to have uppercase letters?");
      if (upper === true) {
        passwordArray = passwordArray.concat(uppercase);
        console.log(passwordArray);
      }
      
  let lower = confirm("Would you like for your password to have lowercase letters?");
      if (upper === true) {
        passwordArray = passwordArray.concat(lowercase);
        console.log(passwordArray);
      }

  let numb = confirm("Would you like for your password to have numbers?");
      if (numb === true) {
        passwordArray = passwordArray.concat(numbers);
        console.log(passwordArray);
      }
  let spec = confirm("Would you like for your password to have special characters?");
      if (spec === true) {
        passwordArray = passwordArray.concat(special);
        console.log(passwordArray);
      }
  
  for(var i=0; i <= passwordLength; i++) {
      let random = passwordArray[Math.floor(Math.random()*passwordArray.length)];
      console.log(random);
      randomPassword = randomPassword.concat(random);
      console.log(randomPassword);
    }
  }

generatePassword();

//generatePassword function will begin.

//Prompts will display using prompt().  Responses will be stored in object called userResponses

//Prompt #1 = How many characters would you like for your password to have?  Must have a minimum of 8 and a maximum of 128.
//variable = passwordLength

//Prompt #2 = Would you like for your password to have uppercase letters?
//array uppercase = [A, B, C, D, ... X, Y, Z]
//if yes, concat with array password = []

//Prompt #3 = Would you like for your password to have lowercase letters?
//array lowercase = [a, b, c, d, ... x, y, z]
//if yes, concat with array password = []

//Prompt #4 = Would you like for your password to have numbers?
//array numbers = [1, 2, 3, 4 ... 8, 9, 0]
//if yes, concat with array password = []

//Prompt #5 = Would you like for your password to have special characters?
//array special = [!, ", #, $, %, &, ', ( ... +, -, ^]
//if yes, concat with array password = []

//use to loop to pull a single character from array password "i" or "passwordLength" times.
//ensure that every pull is random using math.random().












// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);