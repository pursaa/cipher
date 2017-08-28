function caeserCipherThirteenDecode(input) {
  event.preventDefault();
  var input = $("#shift").val();
  input = input.split("");
  var x = 0;
  for (var i = 0; i < input.length; i++) {
    x = input[i].charCodeAt();
    if(x > 64 && x < 91){
      if(x > 78){
        x -= 13;
      } else {
        x += 13
      }
    }
    if(x > 96 && x < 123){
      if (x > 110){
        x -= 13;
      } else {
        x += 13;
      }
    }
    input[i] = String.fromCharCode(x);
  }
  input = input.join("");
  $("#output").text(input);
}
