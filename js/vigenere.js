function getKeyValue(letter) {
  if(/[^a-z]/i.test(letter)) {
    return "Error";
  } else {
    return letter.charCodeAt(0) - 97;
  }
}

function vigenereCipher(key, message, action) {
  var direction;
  if (action === "encode") {
    direction = "right";
  } else { // Decode
    direction = "left";
  }
  var keyArray = key.toLowerCase().split("");
  var keyValues = keyArray.map(function(letter) {
    var value = getKeyValue(letter);
    return value
  });
  if (keyValues.includes("Error")) {
    return "Error: Invalid Key";
  }
  var messageArray = message.split("");
  var result = ""
  var counter = 0;
  messageArray.forEach(function(letter) {
    if (/[a-z]/i.test(letter)) {
      result += caesarLetter(letter, keyValues[counter], direction);
      counter += 1;
      if (counter >= keyValues.length) {
        counter = 0;
      }
    }
  });
  return result;
}

function encodeVigenere(key, message) {
  return vigenereCipher(key, message, "encode");
}

function decodeVigenere(key, message) {
  return vigenereCipher(key, message, "decode");
}
