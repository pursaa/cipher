var testMessage = "The quick brown fox jumps over the lazy dog.";

function fillShiftSelect() {
  for (var i = 0; i < 26; i++) {
    $("#demo-shift").append("<option value='" + i + "'>" + i + "</option>")
  }
}

function fillAlphabet(cipherFunction, shift, direction) {
  var result = "";
  for (var i = 97; i < 123; i++) {
    var code = cipherFunction(String.fromCharCode(i), shift, direction);
    result += "<span class='letter-" + i + "'>" + code + " </span>";
  }
  return result;
}

function fillMessage(cipherFunction, shift, direction) {
  var codeMessage = cipherFunction(testMessage, shift, direction);
  var result = codeMessage.split("").map(function(character) {
    var charCode = character.toLowerCase().charCodeAt(0);
    return "<span class=letter-"+ charCode + ">" + character + "</span>";
  });
  return result.join("");
}

function highlightStep(counter) {
  setTimeout(function() {
    $(".original-message span:nth-child("+ counter + ")").addClass("highlighted");
    counter++;
    if (counter <= testMessage.length) {
      highlightStep(counter);
    }
  }, 300);
}

function displayEncode() {
  var counter = 1;
  alert("got here");
  highlightStep(counter);
}



$(document).ready(function() {
  fillShiftSelect();
  $(".original-alphabet, .cipher-alphabet").html(fillAlphabet(encode, 0, "left"));
  $(".original-message, .cipher-message").html(fillMessage(encode, 0, "left"));

  $("#demo-shift, input[name=demo-direction]").change(function() {
    var shift = $("#demo-shift").val();
    var direction = $("[name=demo-direction]:checked").val();
    var cipherAlpha = fillAlphabet(encode, shift, direction);
    var cipherMessage = fillMessage(encode, shift, direction);
    $(".cipher-alphabet").html(cipherAlpha);
    $(".cipher-message").html(cipherMessage);
    displayEncode();
  });
});
