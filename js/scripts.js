function printError(errorMessage) {
  $(".error-text").text(errorMessage.substring(6, errorMessage.length));
  $(".error-text, #qr").addClass("error-showing");
}

function clearError() {
  $(".error-text").text("");
  $(".error-text, #qr").removeClass("error-showing");
}

$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
    clearError();

    var directions = ["left", "right"];
    var message = $("#input").val();
    var shift = parseInt($("#shift").val());
    var direction = $("input:radio[name=direction]:checked").val();
    var action = $("input:radio[name=action]:checked").val()
    if (shift > 0 && shift < 26) {
      var output;
      if (action === "encode") {
        output = caesarShift(message, shift, direction);
      } else {
        direction = directions[(directions.indexOf(direction) + 1) % 2];
        output = caesarShift(message, shift, direction);
      }
      $("#output").val(output);
      $("#input").val("");
    } else {
      printError("Invalid Shift");
    }
  });

  $("#vigenere-encode").click(function() {
    clearError();
    var key = $("#vigenere-key").val();
    var message = $("#input").val();
    var output = encodeVigenere(key, message);
    if (output.includes("Error:")) {
      printError(output);
    } else {
      $("#output").val(output);
      $("#input").val("");
    }
  });

  $("#vigenere-decode").click(function() {
    clearError();
    var key = $("#vigenere-key").val();
    var message = $("#input").val();
    var output = decodeVigenere(key, message,);
    if (output.includes("Error:")) {
      printError(output);
    } else {
      $("#output").val(output);
      $("#input").val("");
    }
  });

  $("#foursquare-encode").click(function(){
    clearError();
    var key1 = $("#foursquare-key-1").val();
    var key2 = $("#foursquare-key-2").val();
    var message = $("#input").val();
    var output = encodeFourSquare(key1, key2, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#foursquare-decode").click(function(){
    clearError();
    var key1 = $("#foursquare-key-1").val();
    var key2 = $("#foursquare-key-2").val();
    var message = $("#input").val();
    var output = decodeFourSquare(key1, key2, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#xor-encode").click(function(){
    clearError();
    var message = $("#input").val();
    var key = $("#xor-key").val();
    var output = xor(key, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#xor-decode").click(function(){
    clearError();
    var message = $("#input").val();
    var key = $("#xor-key").val();
    var output = xorDecode(key, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#crypto-encode").click(function(){
    clearError();
    var message = $("#input").val();
    var key = $("#crypto-key").val();
    var output = cryptoEncode(key, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#crypto-decode").click(function(){
    clearError();
    var message = $("#input").val();
    var key = $("#crypto-key").val();
    var output = cryptoDecode(key, message);
    $("#output").val(output);
    $("#input").val("");

  });

  $(".ciphers").change(function() {
    clearError();
    var cipher = $(".ciphers").val();
    $(".cipher").hide();
    $(cipher).show();
    $("#xor").hide();
    $(cipher).show();
    $('#qrcode').hide();
    $('#qr').show();
    if(cipher == "Choose a cipher"){
      $("#qr").hide();
    }
  });
});

function blinker() {
    $('.blink-me').fadeOut(500);
    $('.blink-me').fadeIn(500);
}

function qrClick() {
  var input = $("#output").val();
  $("#qrcode").html("");
  $('#qrcode').qrcode(input);
  $('#qrcode').show();
}

setInterval(blinker, 1000);
