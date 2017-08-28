$(document).ready(function(){
  $('#caesar-encode').click(function() {
    var input = $("#input").val();
    var output = encode(input, 3, "left");
    $("#output").text(output);
    $("#input").val("");
  });

  $('#rot-13-encode').click(function() {
    var input = $("#input").val();
    var output = encode(input, 13, "left");
    $("#output").text(output);
    $("#input").val("");
  });

  $("#input-form").submit(function(event) {
    event.preventDefault();
    var message = $("#input").val();
    var shift = parseInt($("#shift").val());
    var direction = $("input:radio[name=direction]:checked").val();
    if (shift > 0 && shift < 26) {
      var output = encode(message, shift, direction);
      $("#output").text(output);
      $("#input").val("");
      $("#shift").val("");
      $("#right").prop("checked", false);
      $("#left").prop("checked", true);
    } else {
      alert("Please enter a valid number to shift.");
    }

  });
});
