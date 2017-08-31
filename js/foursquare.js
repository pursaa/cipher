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

FourSquare.prototype.getCoordinates = function(character, keysquare) {
  var coordinates = [];
  for (var i = 0; i < 5; i++) {
    var index = keysquare[i].indexOf(character);
    if (index > -1) {
      coordinates = [i, index];
    }
  }
  return coordinates;
}

FourSquare.prototype.encode = function(message) {
  message = message.toLowerCase().replace(/[^a-pr-z]/g, "");
  if (message.length % 2 !== 0) {
    message = message + "x";
  }
  var messageArray = message.split("");
  var result = "";
  for (var i = 0; i < messageArray.length; i += 2) {
    var coordinate1 = this.getCoordinates(messageArray[i], this.alphabet);
    var coordinate2 = this.getCoordinates(messageArray[i+1], this.alphabet);
    var code1 = this.key1[coordinate2[0]][coordinate1[1]];
    var code2 = this.key2[coordinate1[0]][coordinate2[1]];
    result += code1 + code2;
  }
  return result;
}

FourSquare.prototype.decode = function(message) {
  message = message.toLowerCase();
  if (message.match(/[^a-pr-z]/) || message.length % 2 !== 0) {
    return "Invalid Ciphertext";
  } else {
    var messageArray = message.split("");
    var result = "";
    for (var i = 0; i < message.length; i += 2) {
      var coordinate1 = this.getCoordinates(messageArray[i], this.key1);
      var coordinate2 = this.getCoordinates(messageArray[i+1], this.key2);
      var letter1 = this.alphabet[coordinate2[0]][coordinate1[1]];
      var letter2 = this.alphabet[coordinate1[0]][coordinate2[1]];
      result += letter1 + letter2;
    }
    return result;
  }
}

function encodeFourSquare(key1, key2, message) {
  var cipher = new FourSquare(key1, key2);
  var result = cipher.encode(message);
  return result;
}

function decodeFourSquare(key1, key2, message) {
  var cipher = new FourSquare(key1, key2);
  var result = cipher.decode(message);
  return result;
}
