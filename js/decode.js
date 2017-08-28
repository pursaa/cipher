function decode(){
  event.preventDefault();
  var input = $("#input").val();
  var dir = $('input[name="direction"]:checked').val();
  var num = parseInt($("#shift").val());
  var alpha = 26;
  input = input.split("");
  var temp = 0;
  if(dir == "right"){
    for(var i = 0; i < input.length; i++){
        temp = input[i].charCodeAt();
        if(temp > 64 && temp < 91){
          temp += num;
          if(temp > 90)
            temp -= alpha;
        }
        if(temp > 96 && temp < 123){
          temp += num;
          if(temp > 122)
            temp -= alpha;
        }
        console.log(temp);
        input[i] = String.fromCharCode(temp);
      }
  } else if(dir == "left"){
    i = input.length -1;
    for(var j = 0; j < input.length; j++){
      temp = input[i].charCodeAt();
      console.log(temp);
      if(temp > 64 && temp < 91){
        temp -= num;
        if(temp < 65)
          temp+=alpha;
      }
      if(temp > 96 && temp < 123){
        temp -= num;
        if(temp < 97)
          temp += alpha;
      }
      input[i] = String.fromCharCode(temp);
      i--;
    }
  }

  input = input.join("");
  $("#output").val(input);
}
