var testMessage = "Helloworld";

function fillVigenereSquare() {
  var result = "<p class='line-0'> &nbsp;&nbsp;" + fillAlphabet(encode, 0, "left") + "</p>";
  for (var i = 97; i < 123; i++) {
    var line = "<p class='letter-" + i + "'><span class='first'>"
    + String.fromCharCode(i) + " </span>" +
    fillAlphabet(encode, i - 97, "right") + "</p>";
    result += line;
  }
  return result;
}

function makeVigenereKey(key) {
  var result = "";
  for (var i = 0; i < key.length; i++) {
    var char = key.charAt(i);
    result += "<span class='key-" + i + "'>" + char + "</span>";
  }
  return result;
}

function rowHighlight(charCode) {
  setTimeout(function() {
    $("p." + charCode + " span.first").addClass("highlighted");
  }, 400);
}

function highlightLetter(charCode, counter) {
  $(".message-letter").addClass("highlighted");
  $(".original-message span:nth-child("+ counter + ")").addClass("highlighted");
  rowHighlight(charCode);
}

function columnHighlight(keyCounter, key) {
  var keyCode = key.charCodeAt(keyCounter);
  setTimeout(function() {
    $(".line-0 .letter-" + keyCode).addClass("highlighted");
  }, 400);
}

function highlightKey(keyCounter, key) {
  $(".message-letter").removeClass("highlighted");
  $(".key-letter").addClass("highlighted");
  $(".vigenere-key span.key-" + keyCounter).addClass("highlighted");
  columnHighlight(keyCounter, key);
}

function highlightSquare(charCode, keyCounter, key) {
  $(".key-letter").removeClass("highlighted");
  $("p." + charCode + " span:nth-child(" + (key.charCodeAt(keyCounter) - 95) + ")").addClass("highlighted");
}

function displayCipher(code, counter) {
  var letter = code.charAt(counter);
  $(".cipher-message").append("<span class='highlighted'>" + letter + "</span>");
}

function highlightVigenere(counter, keyCounter, code, key) {
  // Don't want huge delay on animation start, do want delay on other letters.
  var delay;
  if (counter === 1) {
    delay = 400
  } else {
    delay = 2400;
  }
  // Recursive setTimeout so that each letter shows one at a time.
  setTimeout(function() {
    $(".highlighted").removeClass("highlighted");
    // highlight our letter from our message/
    var charCode = $(".original-message span:nth-child("+ counter + ")").attr("class");
    highlightLetter(charCode, counter);
    // Highlight our key letter
    var tempKey = keyCounter;
    setTimeout(function() {
      highlightKey(tempKey, key);
    }, 800);
    // Show our cipher letter in the square
    setTimeout(function() {
      highlightSquare(charCode, tempKey, key);
    }, 1600);
    // Show our cipher letter in message.
    var tempCount = counter;
    setTimeout(function() {
      displayCipher(code, tempCount - 1);
    }, 2000);
    // Increment counter and check if we're at end of test message so we don't recurse forever.
    counter++;
    keyCounter++;
    if (keyCounter >= key.length) {
      keyCounter = 0;
    }
    if (counter <= testMessage.length) {
      highlightVigenere(counter, keyCounter, code, key);
    } else {
      // We don't want to leave random highlighted letters at end.
      setTimeout(function() {
        $(".highlighted").removeClass("highlighted");
      }, 2000);
    }
  }, delay);
}

function displayVigenere(code, key) {
  var counter = 1;
  var keyCounter = 0;
  highlightVigenere(counter, keyCounter, code, key);
}

$(document).ready(function() {
  $(".original-message, .cipher-message").html(fillMessage(testMessage, encode, 0, "left"));
  $(".vigenere-square").html(fillVigenereSquare());

  $("#vigenere-demo").submit(function(event) {
    event.preventDefault();
    
    var key = $("#vigenere-demo-key").val();
    var code = encodeVigenere(key, testMessage);
    if (code.includes("Error")) {
      alert("Please Enter a Valid Key");
    } else {
      $(".cipher-message").text("");
      $(".vigenere-key").html(makeVigenereKey(key));
      displayVigenere(code, key);
    }
  });
});
