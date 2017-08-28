function encode(message) {
  if (/[^a-z]/i.test(message)) {
    return message;
  } else {
    return "String was alpha";
  }
}
