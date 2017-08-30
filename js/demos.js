// Returns specified alphabet with each letter in labeled span.
function fillAlphabet(cipherFunction, shift, direction) {
  var result = "";
  for (var i = 97; i < 123; i++) {
    var code = cipherFunction(String.fromCharCode(i), shift, direction);
    result += "<span class='letter-" + i + "'>" + code + " </span>";
  }
  return result;
}

// Returns specified ciphertext which each letter in labeled span.
function fillMessage(message, cipherFunction, shift, direction) {
  var codeMessage = cipherFunction(testMessage, shift, direction);
  var result = codeMessage.split("").map(function(character) {
    var charCode = character.toLowerCase().charCodeAt(0);
    return "<span class=letter-"+ charCode + ">" + character + "</span>";
  });
  return result.join("");
}
