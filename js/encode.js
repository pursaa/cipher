// left shifts a given letter by "shift" amount.
function encodeLetter(letter, shift) {
  if (/[^a-z]/i.test(letter)) {
    return letter;
  } else {
    var charCode = letter.charCodeAt(0);
    if (charCode < 65 + shift || (charCode > 90 && charCode < 97 + shift)) {
      charCode = charCode - shift + 26;
    } else {
      charCode = charCode - shift;
    }
    return String.fromCharCode(charCode);
  }
}

// left shifts a given message by "shift" amount.
function encode(message, shift) {
  var messageArray = message.split("");
  var result = "";
  messageArray.forEach(function(letter){
    result += encodeLetter(letter, shift);
  });
  return result;
}
