$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var directions = ["left", "right"];
    var message = $("#input").val();
    var shift = parseInt($("#shift").val());
    var direction = $("input:radio[name=direction]:checked").val();
    var action = $("input:radio[name=action]:checked").val()
    if (shift > 0 && shift < 26) {
      var output;
      if (action === "encode") {
        output = encode(message, shift, direction);
        $("#output").val(output);
        $("#input").val("");
      } else {
        direction = directions[(directions.indexOf(direction) + 1) % 2];
        output = decode(message, direction, shift);
        $("#output").val(output);
        $("#input").val("");
      }
    } else {
      alert("Please enter a valid number to shift.");
    }
  });

  $("#vigenere-encode").click(function() {
    var key = $("#vigenere-key").val();
    var message = $("#input").val();
    var output = encodeVigenere(key, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#vigenere-decode").click(function() {
    var key = $("#vigenere-key").val();
    var message = $("#input").val();
    var output = vigenereDecode(key, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#foursquare-encode").click(function(){
    var key1 = $("#foursquare-key-1").val();
    var key2 = $("#foursquare-key-2").val();
    var message = $("#input").val();
    var output = encodeFourSquare(key1, key2, message);
    $("#output").val(output);
    $("#input").val("");
  });

  $("#foursquare-decode").click(function(){
    var key1 = $("#foursquare-key-1").val();
    var key2 = $("#foursquare-key-2").val();
    var message = $("#input").val();
    var output = decodeFourSquare(key1, key2, message);
    $("#output").val(output);
    $("#input").val("");
  });
});

function blinker() {
    $('.blink-me').fadeOut(500);
    $('.blink-me').fadeIn(900);
}

setInterval(blinker, 1000);
