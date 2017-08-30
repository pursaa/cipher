var testMessage = "Hello world!";

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

function highlightAlphabet(charCode) {
  $(".original-alphabet, .cipher-alphabet").children().removeClass("highlighted");
  setTimeout(function() {
    $(".original-alphabet ." + charCode).addClass("highlighted");
  }, 500);
  setTimeout(function() {
    $(".cipher-alphabet ." + charCode).addClass("highlighted");
  }, 1000);

}

function displayCipher(cipherMessage, index) {
  var cipherArray = cipherMessage.split("</span>");
  setTimeout(function() {
    $(".cipher-message").append(cipherArray[index] + "</span>");
    $(".cipher-message span").last().addClass("highlighted");
    setTimeout(function() {
      $(".cipher-message span").last().removeClass("highlighted");
    }, 500);
  }, 1500);
}

function highlightDisplay(cipherMessage, counter) {
  var delay;
  if (counter === 1) {
    delay = 500
  } else {
    delay = 2000;
  }
  setTimeout(function() {
    $(".original-message span:nth-child("+ (counter - 1)+ ")").removeClass("highlighted");
    var charCode = $(".original-message span:nth-child("+ counter + ")").attr("class");
    $(".original-message span:nth-child("+ counter + ")").addClass("highlighted");
    highlightAlphabet(charCode);
    displayCipher(cipherMessage, counter - 1);
    counter++;
    if (counter <= testMessage.length) {
      highlightDisplay(cipherMessage, counter);
    } else {
      setTimeout(function() {
        $(".original-message span").removeClass("highlighted");
      }, 2000);
    }
  }, delay);
}

function displayEncode(cipherMessage) {
  var counter = 1;
  highlightDisplay(cipherMessage, counter);
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
    $(".cipher-message").html("");
    displayEncode(cipherMessage);
  });
});
