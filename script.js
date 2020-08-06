// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let passwordLength = prompt("How long do you want your password?");
console.log(passwordLength)

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let userChoices = []
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbol  = ["!", "@"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
let userPassword = ""

let upperCaseAnswer = confirm ("Do you want upper case letters?")
console.log (upperCaseAnswer)
let lowerCaseAnswer = confirm ("Do you want lower case letters?")
let symbolAnswer = confirm ("Do you want smybols?")
let numberAnswer = confirm ("Do you want numbers?")

if (upperCaseAnswer) {
    console.log ("its true")
userChoices.push (upperCase)
console.log (userChoices)
}

if (lowerCaseAnswer) {
    console.log ("its true")
userChoices.push (lowerCase)
console.log (userChoices)
}

if (symbolAnswer) {
    console.log ("its true")
userChoices.push (symbol)
console.log (userChoices)
}

if (numberAnswer) {
    console.log ("its true")
userChoices.push (numbers)
console.log (userChoices)
}

let newChoices = Array.prototype.concat.apply([],userChoices)
console.log (newChoices)

for (i = 0; i <passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() *newChoices.length)
    console.log (randomNumber)
    userPassword += newChoices[randomNumber]
}

var passwordArea = document.getElementById ("password")
passwordArea.value= userPassword
