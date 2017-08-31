function cryptoEncode(key, message){
  var encrypted = CryptoJS.AES.encrypt(message, key);
  return encrypted;
}

function cryptoDecode(key, message){
  var decrypted;
  if(message.startsWith("U2F")){
    var decrypted = CryptoJS.AES.decrypt(message, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
  } else {
    return "Error: Invalid AES crypto code";
  }
}
