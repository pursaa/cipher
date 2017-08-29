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

function getKeyValue(letter) {
  if(/[^a-z]/i.test(letter)) {
    return "Error";
  } else {
    return letter.charCodeAt(0) - 97;
  }
}

function encodeVigenere(key, message) {
  var keyArray = key.toLowerCase().split("");
  var keyValues = keyArray.map(function(letter) {
    var value = getKeyValue(letter);
    return value
  });
  if (keyValues.includes("Error")) {
    return "Error";
  }
  var messageArray = message.split("");
  var result = ""
  var counter = 0;
  messageArray.forEach(function(letter) {
    if (/[a-z]/i.test(letter)) {
      result += encodeLetter(letter, keyValues[counter], "right");
      counter += 1;
      if (counter >= keyValues.length) {
        counter = 0;
      }
    }
  });
  return result;
}

function FourSquare(key1, key2) {
  this.key1 = this.makeKey(key1);
  this.key2 = this.makeKey(key2);
  this.alphabet = this.makeKey("");
}

FourSquare.prototype.makeKey = function(key) {
  var result = "";
  var keyArray = key.toLowerCase().split("");
  keyArray.forEach(function(letter) {
    if (/[a-pr-z]/.test(letter)) {
      if (!result.includes(letter)) {
        result += letter;
      }
    }
  });
  for (var i = 97; i < 123; i++) {
    var letter = String.fromCharCode(i);
    if (!result.includes(letter) && letter !== "q") {
      result += letter;
    }
  }
  keySquare = this.makeSquare(result);
  return keySquare;
}

FourSquare.prototype.makeSquare = function(string) {
  var square = [[], [], [], [], []];
  var counter = 0;
  for (var i = 0; i < 25; i++) {
    square[counter].push(string.charAt(i));
    counter += 1;
    if (counter >= 5) {
      counter = 0;
    }
  }
  return square;
}

function encodeFourSquare(key1, key2, message) {
  var cipher = new FourSquare(key1, key2);
  console.log(cipher);
  return message;
}
