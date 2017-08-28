function ceaserCipherThreeDecode(input){
  event.preventDefault();
  var input = $("#input").val();
  input = input.split("");
  var x = 0;
  for(var i = 0; i < input.length; i++){
    x = input[i].charCodeAt();
    if(x > 64 && x < 91){
      if(x > 87){
        x -= 23;
      }
      else{
        x += 3;
      }
    }
    if(x > 96 && x < 123){
      if(x > 119){
        x -= 23;
      }
      else{
        x += 3;
      }
    }
    input[i] = String.fromCharCode(x);
  }
  input = input.join("");
  $("#output").text(input);
}
