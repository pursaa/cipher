function decode(input, dir, num){
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
  return input;
}

function vigenereDecode(key, input) {

  var keyNum = [];
  var alpha = 26;
  input = input.split("");
  key = key.split("");
  var output = [];
  var temp;

  for (var i = 0; i < key.length; i++) {
    temp = key[i].charCodeAt();
    if(temp > 64 && temp < 91){
      temp -= 65;
      keyNum.push(temp);
    }else if(temp > 96 && temp < 123) {
      temp -= 97;
      keyNum.push(temp);
    }
  }
  var counter = 0;
  for(var i = 0; i < input.length; i++){
    var temp2 = decode(input[i], "left", keyNum[counter]);
    output[i] = temp2;
    counter += 1;
    if (counter >= keyNum.length) {
      counter = 0;
    }
  }
  output = output.join("");
  output = output.replace(/,/g, "");
  return output;
}
