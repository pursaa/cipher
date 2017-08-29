function xor(key, message) {
  var output = "";
  for(var i = 0; i < message.length;){
    for(var j = 0;(j < key.length && i < message.length); i++, j++) {
      output += String.fromCharCode(message[i].charCodeAt(0) ^ key[j].charCodeAt(0));
      console.log(output);
    }
  }
  console.log(output);
  return output;
}
