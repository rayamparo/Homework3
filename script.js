

// Assignment Code
let generateBtn = document.querySelector("#generate");
function generatePassword() {
  let noCap = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "<", ".", "/", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  let finalArr = []
  let finalPwd = ""



  function randomCharacter(x) {
    let length = x.length
    return x[Math.floor(Math.random() * length)];
  }

  let charLength = parseInt(prompt("Enter a number between 8  and 128 for the length of the password."));

  if (charLength < 8 || charLength > 128) {
    alert("Must be in between 8 and 128 characters");
  }
  else {

  function promptFunc() {

    if (confirm("Would you like lowercase letters within your password?")) {
      finalArr = finalArr.concat(noCap);
    }

    if (confirm("Would you like uppercase letters within your password?")) {
      finalArr = finalArr.concat(cap);
    }

    if (confirm("Would you like numbers within your password?")) {
      finalArr = finalArr.concat(numero);
    }

    if (confirm("Would you like special characters within your password?")) {
      finalArr = finalArr.concat(specialChars);
    }

  }
  }

  promptFunc()
  for (i = 0; i < charLength; i++) {
    finalPwd += randomCharacter(finalArr)
  }

  return finalPwd;

}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);