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

//defined with const since these arrays should not be changed
const uppercase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = uppercase.map(name => name.toLowerCase());
const numbers = [0,1,2,3,4,5,6,7,8,9,0]
const special = ["!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".","/",";",":","<",">","=","?","@","[","]","\ ","{","}", "|","~","`"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function specifyLength() {
  let passwordLength = prompt("How many characters would you like for your password to have?"); // Prompt that asks user to input desired length of password
    if ((passwordLength >= 8) && (passwordLength <= 128)) {   //Password length must be between 8 and 128
      console.log("This is the users specified " + passwordLength + " characters."); 
    } else {
      alert("You must have at least 8 characters, but no more than 128 characters");
      specifyLength();  // Forces the user to reinput if length is not within parameters of 8 and 128
    }
    return passwordLength  // Return acceptable value for password length
  }

function generatePassword() {
  var Length = specifyLength();
  let passwordArray = [];   //included in function to ensure a new password is generated each time function is called.
  let randomPassword = "";  //included in function to ensure a new password is generated each time function is called.
  
  function choices() {
    let upper = confirm("Would you like for your password to have uppercase letters?");
        if (upper === true) {
          passwordArray = passwordArray.concat(uppercase);  //adds uppercase into passwordArray if user selects "OK" in prompt
          console.log(passwordArray);
        } else {  //does NOT add uppercase into passwordArray if user selects "Cancel" in prompt
          console.log("The user does not want uppercase letters");
        }
        
    let lower = confirm("Would you like for your password to have lowercase letters?");
        if (lower === true) {
          passwordArray = passwordArray.concat(lowercase);  //adds lowercase into passwordArray if user selects "OK" in prompt
          console.log(passwordArray);
        } else {  //does NOT add lowercase into passwordArray if user selects "Cancel" in prompt
          console.log("The user does not want lowercase letters");
        }

    let numb = confirm("Would you like for your password to have numbers?");
        if (numb === true) {
          passwordArray = passwordArray.concat(numbers);  //adds numbers into passwordArray if user selects "OK" in prompt
          console.log(passwordArray);
        } else {  //does NOT add numbers into passwordArray if user selects "Cancel" in prompt
          console.log("The user does not want numbers");
        }

    let spec = confirm("Would you like for your password to have special characters?");
        if (spec === true) {
          passwordArray = passwordArray.concat(special);  //adds special characters into passwordArray if user selects "OK" in prompt
          console.log(passwordArray);
        } else {  //does NOT add special characters into passwordArray if user selects "Cancel" in prompt
          console.log("The user does not want special characters");
        }
    
    if ((upper != true) && (lower != true) && (numb != true) && (spec != true)) {
      alert("You must choose at least one type of character")
      console.log("The user needs to choose at least one type of character");
      choices();
    } //Ensures that the user has selected at least one character type to continue.
  }

  choices();

  for(var i=0; i <= Length; i++) {  //for loop runs the same number of times as passwordLength  (indicated by user)
      let random = passwordArray[Math.floor(Math.random()*passwordArray.length)]; //randomly selects elements based on their index
      console.log("password array pull is " + random);
      randomPassword = randomPassword.concat(random); //Adds all password pulls into one string
      console.log("random password is " + randomPassword);
    }
  return randomPassword //returns password string
  }

generateBtn.addEventListener("click", writePassword); //once clicked, writePassword() will start
