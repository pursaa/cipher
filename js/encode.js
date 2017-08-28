// left shifts a given letter by "shift" amount.
function encodeLetter(letter, shift, direction) {
  if (direction === "right") {
    shift = -shift;
  }
  if (/[^a-z]/i.test(letter)) {
    return letter;
  } else {
    var charCode = letter.charCodeAt(0);
    var asciiShift = 65; // Capital letters
    if (/[a-z]/.test(letter)) { // lowercase letters
      asciiShift = 97
    }
    charCode = charCode - asciiShift; // nomalize charCode to 0-26
    charCode = (charCode - shift) % 26; // keep charCode in smaller than 26
    if (charCode < 0) { // keep charCode a positive value
      charCode += 26
    }
    charCode = charCode + asciiShift; // return charCode to correct ascii Value
    return String.fromCharCode(charCode);
  }
}

// left shifts a given message by "shift" amount.
function encode(message, shift, direction) {
  var messageArray = message.split("");
  var result = "";
  messageArray.forEach(function(letter){
    result += encodeLetter(letter, shift, direction);
  });
  return result;
}

function encodeVigenere(key, message) {
  return message;
}
