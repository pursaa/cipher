var testMessage = "Hello, World!";

function fillVigenereSquare() {
  var result = "<p class='line-0'> &nbsp;&nbsp;" + fillAlphabet(encode, 0, "left") + "</p>";
  for (var i = 97; i < 123; i++) {
    var line = "<p class='line-" + i + "'><span class='first'>"
    + String.fromCharCode(i) + " </span>" +
    fillAlphabet(encode, i - 97, "right") + "</p>";
    result += line;
  }
  return result;
}

$(document).ready(function() {
  $(".original-message, .cipher-message").html(fillMessage(encode, 0, "left"));
  $(".vigenere-square").html(fillVigenereSquare());

  $("#vigenere-demo").submit(function(event) {
    event.preventDefault();
  });
});
