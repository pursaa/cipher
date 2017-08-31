# Intro to Ciphers

#### _Epicodus Project in JavaScript, HTML, and CSS, August 31, 2017_

#### _**By Kelsey Langlois, Linda Luu, Rafael Furry, Debbie Michel**_

## Description

_This program will run several different ciphers; Caesar, Vigenere, Four-Square, XOR, and AES. Each cipher has a form to take a message and any other necessary information (keys, shift amounts, etc.), and the option to encode or decode the given message. There is also an option to display a scannable QR code (bar code) for all outputs._

_Each cipher has an about page with an explanation of how the cipher works._

## Setup/Installation Requirements

This webpage is available to view on GitHub pages at [langlk.github.io/substitution-ciphers](https://langlk.github.io/substitution-ciphers/)

* _Clone this repository._
* _Open index.html in the browser of your choice._
* _To encode or decode a message:_
  * _Choose a cipher from the drop down menu in the center of the page._
  * _Enter a message in the input box._
  * _Enter any additional information needed in the form._
  * _Click the encode or decode button._
  * _To get the output as a QR code, click "Get QR Code."_
* _Use the tabs at the top of the page to navigate to different demos._

## Specifications

### Caesar Cipher
#### Encode

* The program does nothing with non-alphabet characters.
  * **Example Input:** "12345!"
  * **Example Output:** "12345!"
* The program replaces a character with the character **shift** number of letters in the specified direction, wrapping to the other end of the alphabet if needed.
  * **Example Input:** "A", shift=3, direction="left"
  * **Example Output:** "X"
* The program allows the user to choose the number of characters they want to shift and the direction they want to shift.
* The program does the above steps for all characters in a message.
* **Example Input:** "ABC", shift=3, direction="left"
* **Example Output:** "XYZ"

#### Decode

* The program does the above steps for decoding, moving **shift** number of letters in the opposite direction to undo the shift.
  * **Example Input:** "XYZ" shift=3, direction="left"
  * **Example Output:** "ABC"

### Vigenere Cipher
#### Encode

* The program returns an empty string for non-alphabet characters
  * **Example Input:** "9"
  * **Example Output:** ""
* The program does not allow non-alphabetical characters in its key.
  * **Example Input:** "1235!"
  * **Example Output:** "Invalid Key"
* The program turns a single letter key into a number from 0-25 based on its order in the alphabet.
  * **Example Input:** "E"
  * **Example Output:** 4
* The program encodes a single letter message using the right-shifted Caesar Cipher corresponding to the key's number.
  * **Example Input:** Key: "E", Message: "A"
  * **Example Output:** "E"
  * **Example Input:** Key: "E", Message: "Z"
  * **Example Output:** "D"
* The program encodes a multi-letter message with a key of the same length, using the first character in the key to determine the cipher for the first letter, second key character for the second letter of the message, and so on.
  * **Example Input:** Key: "CAT", Message: "Dog"
  * **Example Output:** "Foz"
* The program encodes a multi-letter message with a key of different length, starting at the first character of the key again when the end of the key is reached.
  * **Example Input:** Key: "CAT", Message: "Doggy"
  * **Example Output:** "Foziy"

#### Decode
* The program does the same steps as above for decoding, using the corresponding left-shifted Caesar Cipher to undo the encoding.
  * **Example Input:** Key: "CAT", Message: "Foziy"
  * **Example Output:** "G"

### Four-Square Cipher
#### Encode

* The program does not allow non-alphabet characters in keys.
  * **Example Input:** Key="123Q!!!"
  * **Example Output:** "Invalid Key"
* The program returns empty strings for non-alphabet characters and qs in message.
  * **Example Input:** Message="123Q!!!"
  * **Example Output:** Message=""
* The program downcases the entire key.
  * **Example Input:** "Hello"
  * **Example Output:** "hello"
* The program removes all duplicates from a key.
  * **Example Input:** "hello"
  * **Example Output:** "helo"
* The program adds all other letters in alphabet (besides q) to the end of the key.
  * **Example Input:** "example"
  * **Example Output:** "examplbcdfghijknorstuvwxyz"
* The program arranges the key in a 5 by 5 square.
  * **Example Input:** "example"
  * **Example Output:**
    ```
    e x a m p
    l b c d f
    g h i j k
    n o r s t
    u v w y z
    ```
* The program creates two keysquares from user input using the above steps.
* The program creates an alphabet square, leaving out q.
  * **Example Output:**
    ```
    a b c d e
    f g h i j
    k l m n o
    p r s t u
    v w x y z
    ```
* The program downcases an input message:
  * **Example Input:** "HE"
  * **Example Output:** "he"
* The program takes two letters, and assigns them coordinates based on their location in the alphabet square.
  * **Example Input:** "HE"
  * **Example Output:** [2, 1], [4, 0]
* The program generates two new pairs of coordinates: Coordinate1 = [Letter2X, Letter1Y], and Coordinate2 = [Letter1X, Letter2Y]. (These represent the intersections of the two letters in a FourSquare cipher grid.)
  * **Example Input:** "HE"
  * **Example Output:** [4, 1], [2, 0]
* The program returns the letters at these coordinates in the respective keysquares.
  * **Example Input:** "HE"
  * **Example Output:** "FY"
* The program does the above steps for each pair of letters in an input longer than 2, and returns the resulting string.
  * **Example Input:** message: "help me obi wan kenobi", key1: "Example" key2: "Keyword"
  * **Example Output:** "FY GM KY HO BX MF KK KI MD"
* If an input string does not have an even number of letters, program adds an X to the end before encoding.
  * **Example Input:** "This is a test"
  * **Example Output:** "thisisatestx"

#### Decode

* The program takes a ciphertext and breaks into 2-letter chunks.
  * **Example Input:** "fygmkyhobxmfkkkimd"
  * **Example Output:** "fy gm ky ho bx mf kk ki md"
* The program returns an error if ciphertext is not an even length.
  * **Example Input:** "xyz"
  * **Example Output:** "Invalid Ciphertext"
* The program returns an error if ciphertext has any non-alphabet characters or qs.
  * **Example Input:** "123Q!"
  * **Example Output:** "Invalid Ciphertext"
* For a pair of cipher characters, the program finds the first character's location in keysquare 1, and the second character's location in keysquare 2.
  * **Example Input:** "fy"
  * **Example Output:** [4, 1], [2, 0]
* The program generates a new pair of coordinates: Coordinate1 = [Char2x, Char1y] and Coordinate2 = [Char1x, Char2y].
  * **Example Input:** "fy"
  * **Example Output:** [2, 1], [4, 0]
* The program returns the letters at these coordinates in the plaintext alphabet square.
  * **Example Input:** "fy"
  * **Example Output:** "he"
* The program does this for all pairs of characters in the ciphertext.
  * **Example Input:** "fygmkyhobxmfkkkimd"
  * **Example Output:** "helpmeobiwankenobi"

### XOR Cipher
#### Encode

* The program runs a bitwise XOR (Exclusive Or) of the message and key.
  * **Example Input:** KeyBinary=010101, MessageBinary=111111
  * **Example Output:** CipherBinary=101010

* The program return result in hexadecimal.
  * **Example Input:** CipherBinary: 101010
  * **Example Output:** CipherHex="2A"

#### Decode

* The program does not accept a ciphertext that's not in hexadecimal.
  * **Example Input:** "Hello, World"
  * **Example Input:** "Invalid Hex"
* The program runs a bitwise XOR of the ciphertext and key.
  * **Example Input:** KeyBinary=010101, CipherBinary=101010
  * **Example Output:** MessageBinary=111111
* The program returns the message as an ASCII string.
  * **Example Input:** MesageBinary=111111
  * **Example Output:** Message="?"

### AES Cipher
#### Encode

* The program takes a message and key, and encrypts the message with AES using the given key.
  * **Example Input:** Message="Hello", Key="World"
  * **Example Output:** "U2FsdGVkX18euyh1D/f28+iQRoBxkkGmIMof/+wrMHM="

#### Decode

* The program does not accept a ciphertext not in AES format.
  * **Example Input:** Ciphertext="Hello, World"
  * **Example Output:** "Invalid AES Code"
* The program takes ciphertext and key, and decrypts the ciphertext with AES using the given key.
  * **Example Input:** Ciphertext="U2FsdGVkX18euyh1D/f28+iQRoBxkkGmIMof/+wrMHM=", key="World"
  * **Example Output:** "Hello"

## Known Bugs

_No known bugs at this time._

## Support and contact details

_If you run into any issues or have questions, ideas or concerns please contact Kelsey Langlois at [@gmail.com]; Linda Luu at kels.langlois@gmail.com; Rafael Furry at [@gmail.com]; Debbie Michel at [debbiemichel1633@gmail.com]. You are welcome to fork this repository and contribute to the code._

## Technologies Used

* JavaScript
* jQuery
* HTML
* CSS
* Bootstrap

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **_Kelsey Langlois, Linda Luu, Rafael Furry, Debbie Michel_**
