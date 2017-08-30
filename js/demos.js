var testMessage = "The quick brown fox jumps over the lazy dog.";

function fillShiftSelect() {
  for (var i = 0; i < 26; i++) {
    $("#demo-shift").append("<option value='" + i + "'>" + i + "</option>")
  }
}

function fillAlphabet(cipherFunction, shift, direction) {
  var result = "";
  for (var i = 97; i < 123; i++) {
    result += cipherFunction(String.fromCharCode(i), shift, direction) + " ";
  }
  return result;
}

$(document).ready(function() {
  fillShiftSelect();
  $(".original-alphabet, .cipher-alphabet").text(fillAlphabet(encode, 0, "left"));
  $(".cipher-message").text(encode(testMessage, 0, "left"));

  $("#demo-shift, input[name=demo-direction]").change(function() {
    var shift = $("#demo-shift").val();
    var direction = $("[name=demo-direction]:checked").val();
    var cipherAlpha = fillAlphabet(encode, shift, direction);
    var cipherMessage = encode(testMessage, shift, direction);
    $(".cipher-alphabet").text(cipherAlpha);
    $(".cipher-message").text(cipherMessage);
  });
});
