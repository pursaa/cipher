$(document).ready(function(){
  console.log(encode("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 15, "right"));
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
});
