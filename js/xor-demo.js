var testMessage = "0100100001100101011011000110110001101111";
var testKey = "0101011101101111011100100110110001100100";

function fillBinary(string) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    result += "<span class='" + string.charAt(i) + "'>" + string.charAt(i) + "</span>"
  }
  return result;
}

function highlightXOR(counter) {
  setTimeout(function() {

  });
}

function displayXOR() {
  var counter = 1;
  highlightXOR(counter);
}

$(document).ready(function() {
  $(".binary-message").html(fillBinary(testMessage));
  $(".binary-key").html(fillBinary(testKey));

  $("#xor-encode").click(function() {
    displayXOR();
  });
});
