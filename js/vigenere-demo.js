var testMessage = "Hello, World!";

function fillVigenereSquare() {
  var result = "<p> &nbsp;&nbsp;" + fillAlphabet(encode, 0, "left") + "</p>";
  for (var i = 97; i < 123; i++) {
    var line = "<p>" + String.fromCharCode(i) + " " + fillAlphabet(encode, i - 97, "right") + "</p>";
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
