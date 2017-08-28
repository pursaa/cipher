$(document).ready(function(){
  $('form#input-form').submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    // alert(input);
    $("#output").text(input);
  });
});
