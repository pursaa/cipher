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
      result += caesarLetter(letter, keyValues[counter], "right");
      counter += 1;
      if (counter >= keyValues.length) {
        counter = 0;
      }
    }
  });
  return result;
}

function decodeVigenere(key, message) {
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
      result += caesarLetter(letter, keyValues[counter], "left");
      counter += 1;
      if (counter >= keyValues.length) {
        counter = 0;
      }
    }
  });
  return result;
}
