# Substitution Ciphers

## Specifications

### Encode: Classic Caesar

* The program does nothing with non-alphabet characters.
  * Example Input: "12345!"
  * Example Output: "12345!"
* The program replaces a character other than the first 3 letters in the alphabet with the letter 3 before it.
  * Example Input: "D"
  * Example Output: "A"
* The program replaces a, b, or c with x, y, and z, respectively.
  * Example Input: "A"
  * Example Output: "X"
* The program replaces characters with the coded character of the same case.
  * Example Input: "a"
  * Example Output: "x"
* The program replaces all letters in an inputted string following the rules above.
  * Example Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
  * Example Output: "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"

### Encode: ROT13

* The program does the same steps as the Classic Caesar cipher, but shifts letters by 13 places.
  * Example Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
  * Example Output: "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"

### Encode: Generic Caesar

* The program does the same steps as the ciphers above, but shifts letters left by a user-specified number of places.
  * Example Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 2
  * Example Output: "RFC OSGAI ZPMUL DMV HSKNQ MTCP RFC JYXW BME"
* The program allows the user to choose the direction to shift the letters (left or right) and shifts the message accordingly.
  * Example Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 15, "right"
  * Example Output: "IWT FJXRZ QGDLC UDM YJBEH DKTG IWT APON SDV"

### Encode: Vigenere

* The program returns an empty string for non-alphabet characters
  * Example Input: "9"
  * Example Output: ""
* The program does not allow non-alphabetical characters in its key.
  * Example Input: "1235!"
  * Example Output: "Error: Invalid Key"
* The program turns a single letter key into a number from 0-25 based on its order in the alphabet.
  * Example Input: "E"
  * Example Output: 4
* The program encodes a single letter message using the right-shifted Caesar Cipher corresponding to the key's number.
  * Example Input: Key: "E", Message: "A"
  * Example Output: "E"
  * Example Input: Key: "E", Message: "Z"
  * Example Output: "D"
* The program encodes a multi-letter message with a key of the same length, using the first character in the key to determine the cipher for the first letter, second key character for the second letter of the message, and so on.
  * Example Input: Key: "CAT", Message: "Dog"
  * Example Output: "Foz"
* The program encodes a multi-letter message with a key of different length, starting at the first character of the key again when the end of the key is reached.
  * Example Input: Key: "CAT", Message: "Doggy"
  * Example Output: "Foziy"
