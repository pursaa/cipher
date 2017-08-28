$(document).ready(function(){
  $('form#input-form').submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var output = encode(input);
    $("#output").text(output);
  });
});
