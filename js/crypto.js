function cryptoEncode(key, message){
  alert("hello");
  var encrypted = CryptoJS.AES.encrypt(message, key);
  return encrypted;
  alert("hello");
}

function cryptoDecode(key, message){
  var decrypted = CryptoJS.AES.decrypt(message, key);
  return decrypted.toString(CryptoJS.enc.Utf8);
}
