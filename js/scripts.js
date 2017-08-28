$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
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
        $("#shift").val("");
        $("#right").prop("checked", false);
        $("#left").prop("checked", true);
      } else {
        decode();
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
  });
});
