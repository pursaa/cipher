function encode(message) {
  if (/[^a-z]/i.test(message)) {
    return message;
  } else {
    var charCode = message.charCodeAt(0);
    if (charCode >= 65 && charCode <= 67 || charCode >= 97 && charCode <= 99) {
      charCode = charCode - 3 + 26;
    } else {
      charCode = charCode - 3;
    }
    return String.fromCharCode(charCode);
  }
}
