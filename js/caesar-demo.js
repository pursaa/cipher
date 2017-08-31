var testMessage = "Hello World!"

// Fills our select function with all shift values.
function fillShiftSelect() {
  for (var i = 0; i < 26; i++) {
    $("#demo-shift").append("<option value='" + i + "'>" + i + "</option>")
  }
}

// Hightlights/darkens correct letter in each alphabet at a delay.
function highlightAlphabet(charCode) {
  $(".original-alphabet, .cipher-alphabet").children().removeClass("highlighted");
  setTimeout(function() {
    $(".original-alphabet ." + charCode).addClass("highlighted");
  }, 500);
  setTimeout(function() {
    $(".cipher-alphabet ." + charCode).addClass("highlighted");
  }, 1000);
}

// Print next letter of ciphertext, highlighted, then darken when we move on.
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

// Handles all the messy business of animating the encoding.
function highlightDisplay(cipherMessage, counter) {
  // Don't want huge delay on animation start, do want delay on other letters.
  var delay;
  if (counter === 1) {
    delay = 500
  } else {
    delay = 2000;
  }
  // Recursive setTimeout so that each letter shows one at a time.
  setTimeout(function() {
    // Highlight correct letter in message.
    $(".original-message span:nth-child("+ (counter - 1)+ ")").removeClass("highlighted");
    var charCode = $(".original-message span:nth-child("+ counter + ")").attr("class");
    $(".original-message span:nth-child("+ counter + ")").addClass("highlighted");
    // Highlight correct letter in alphabets.
    highlightAlphabet(charCode);
    // Highlight and show correct letter in ciphertext.
    displayCipher(cipherMessage, counter - 1);
    // Increment counter and check if we're at end of test message so we don't recurse forever.
    counter++;
    if (counter <= testMessage.length) {
      highlightDisplay(cipherMessage, counter);
    } else {
      // We don't want to leave random highlighted letters at end.
      setTimeout(function() {
        $(".original-message span").removeClass("highlighted");
      }, 2000);
    }
  }, delay);
}

// Sets up start of highlightDisplay's recursion.
function displayEncode(cipherMessage) {
  var counter = 1;
  highlightDisplay(cipherMessage, counter);
}

$(document).ready(function() {
  // Sets up page, saving us lots of typing.
  fillShiftSelect();
  $(".original-alphabet, .cipher-alphabet").html(fillAlphabet(caesarShift, 0, "left"));
  $(".original-message, .cipher-message").html(fillMessage(testMessage, caesarShift, 0, "left"));

  // Any time our Caesar Cipher settings change, refresh our content.
  $("#demo-shift, input[name=demo-direction]").change(function() {
    var shift = $("#demo-shift").val();
    var direction = $("[name=demo-direction]:checked").val();
    var cipherAlpha = fillAlphabet(caesarShift, shift, direction);
    var cipherMessage = fillMessage(testMessage, caesarShift, shift, direction);

    $(".cipher-alphabet").html(cipherAlpha);
    $(".cipher-message").html("");
    displayEncode(cipherMessage);
  });
});
