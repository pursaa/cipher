$(document).ready(function(){
  $('#caesar-encode').click(function() {
    var input = $("#input").val();
    var output = encode(input, 3);
    $("#output").text(output);
    $("#input").val("");
  });

  $('#rot-13-encode').click(function() {
    var input = $("#input").val();
    var output = encode(input, 13);
    $("#output").text(output);
    $("#input").val("");
  });
});
