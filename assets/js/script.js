//PSEUDO CODE

  //generatePassword function will begin after clicking button.
  // Prompts will display using prompt().  Responses will be stored in object called userResponses
  // Prompt #1 = How many characters would you like for your password to have?  Must have a minimum of 8 and a maximum of 128.
  // Prompt #2 = Would you like for your password to have uppercase letters? / if yes, concat with array password = []
  // Prompt #3 = Would you like for your password to have lowercase letters? / if yes, concat with array password = []
  // Prompt #4 = Would you like for your password to have numbers / if yes, concat with array password = []
  // Prompt #5 = Would you like for your password to have special characters? / if yes, concat with array password = []
  // use loop to pull a single character from array password "i" or "passwordLength" times. / ensure that every pull is random using math.random().
  // Add event listener to generate button

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
const uppercase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  // console.log(uppercase.length)
const lowercase = uppercase.map(name => name.toLowerCase());  // console.log(lowercase)
const numbers = [0,1,2,3,4,5,6,7,8,9,0]
const special = ["!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".","/",";",":","<",">","=","?","@","[","]","\ ","{","}", "|","~","`"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// Prompt that defines the length of the password string based off 
function specifyLength() {
  let passwordLength = prompt("How many characters would you like for your password to have?");
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
      console.log("This is the users specified " + passwordLength + " characters.");
    } else {
      alert("You must have at least 8 characters, but no more than 128 characters");
      specifyLength();
    }
    return passwordLength
  }

function generatePassword() {
  var Length = specifyLength();
  let passwordArray = [];
  let randomPassword = "";
  
  function choices() {
    let upper = confirm("Would you like for your password to have uppercase letters?");
        if (upper === true) {
          passwordArray = passwordArray.concat(uppercase);
          console.log(passwordArray);
        } else {
          console.log("The user does not want uppercase letters");
        }
        
    let lower = confirm("Would you like for your password to have lowercase letters?");
        if (lower === true) {
          passwordArray = passwordArray.concat(lowercase);
          console.log(passwordArray);
        } else {
          console.log("The user does not want lowercase letters");
        }

    let numb = confirm("Would you like for your password to have numbers?");
        if (numb === true) {
          passwordArray = passwordArray.concat(numbers);
          console.log(passwordArray);
        } else {
          console.log("The user does not want numbers");
        }

    let spec = confirm("Would you like for your password to have special characters?");
        if (spec === true) {
          passwordArray = passwordArray.concat(special);
          console.log(passwordArray);
        } else {
          console.log("The user does not want special characters");
        }
    
    if ((upper != true) && (lower != true) && (numb != true) && (spec != true)) {
      alert("You must choose at least one type of character")
      console.log("The user needs to choose at least one type of character");
      choices();
    }
  }

  choices();

  for(var i=0; i <= Length; i++) {
      let random = passwordArray[Math.floor(Math.random()*passwordArray.length)];
      console.log("password array pull is " + random);
      randomPassword = randomPassword.concat(random);
      console.log("random password is " + randomPassword);
    }
  return randomPassword
  }

generateBtn.addEventListener("click", writePassword);
