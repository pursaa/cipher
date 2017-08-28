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

function vigenereDecode(input, key){
  var keyNum = [];
  var alpha = 26;
  input = input.split("");
  key = key.split("");
  var output = [];
  var temp;

  for (var i = 0; i < key.length; i++) {
    temp = key[i].charCodeAt();
    if(temp > 64 && temp < 91){
      temp -= 64 ;
      keyNum.push(temp);
    }else if(temp > 96 && temp < 123) {
      temp -= 96 ;
      keyNum.push(temp);
    }
  }
  for (var i = 0; i < input.length; i++) {
    temp = key[i].charCodeAt();
    if(temp > 64 && temp < 91){
      debugger;
      temp += keyNum[i];
      if(temp > 90)
        temp -= alpha;
        debugger;

    }
    if(temp > 96 && temp < 123){
      temp += keyNum[i];
      if(temp > 122)
        temp -= alpha;
    }
    output[i] = String.fromCharCode(temp);
  }
  console.log(input);
  console.log(keyNum);
  console.log(output);
  input.join("");
  // var output = input.replace(",", "");
  return output;
}
