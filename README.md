# Intro to Ciphers

#### _This program will run several different ciphers, August 31, 2017_

#### By _**Kelsey Langlois, Linda Luu, Rafael Furry, Debbie Michel**_

## Description

_This program will run several different ciphers. First on is Caesar cipher.  The user will choose how many characters to shift each letter in the word, whether to shift the letters left or right and whether to encode or decode the word. The user will type a word in the input box and press the submit button.  There is an option button to display a QR code.  The second choice is Vigenere cipher.  The user will type in a word, then type in a keyword, press the encode or decode button.  The third choice is Four-Square cipher.  The user will have two key words to input and a encode and decode button. Then there is the XOR cipher and the user will type in a key word along with the input word; choose to encode or decode.  Encode will change the words to numbers and decode can change them back.  The last one is the AES cipher.  Again the user inputs a word and a key word and presses the number for encode.  The decode will unencrypt the code. There is an option button to display a QR code (bar code)for all the ciphers. _

## Specifications

### Encode: Generic Caesar
* The program does nothing with _non-alphabet_ characters.
  * Example _Input:_ "12345!"
  * Example _Output:_ "12345!"
* The program replaces a character other than the first 3 letters in the alphabet with the letter 3 places before it.
  * Example _Input:_ "D"
  * Example _Output:_ "A"
* The program replaces a, b, or c with x, y, and z, respectively.
  * Example _Input:_ "A"
  * Example _Output:_ "X"
* The program replaces characters with the coded character of the same case.
  * Example _Input:_ "a"
  * Example _Output:_ "x"
* The program allows the user to choose the number of characters they want to shift left or right.
  * Example _Input:_ **"3"** in the shift by box and **"D"** in the input box
  * Example _Output:_ Output will be **"A"** or **G** depending on the chosen direction.
* The program allows the user to choose the direction to shift the letters (left or right) and shifts the message accordingly.
  * Example _Input:_, shift = **"right"**, input = **"Goat"**, shift number = **"3"**
  * Example _Output:_ **"jrdw"**
  * Example _Input:_, shift = **"left"**, input = **"Goat"**, shift number = **"3"**
  * Example _Output:_ **"dlxq"**
* The program will allow the user to Encode and Decode the message
  * Example _Encode Input:_  _"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"_
  * Example _Output:_  **"QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"**
  * Example _Decode Input:_  _"QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"_
  * Example _Output:_  **"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"**


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

### Four-Square
#### Encode

* The program returns empty strings for non-alphabet characters and qs.
  * Example Input: "123Q!!!"
  * Example Output: ""
* The program downcases the entire key.
  * Example Input: "Hello"
  * Example Output: "hello"
* The program removes all duplicates from a key.
  * Example Input: "hello"
  * Example Output: "helo"
* The program adds all other letters in alphabet (besides q) to the end of the key.
  * Example Input: "example"
  * Example Output: "examplbcdfghijknorstuvwxyz"
* The program arranges the key in a 5 by 5 square.
  * Example Input: "example"
  * Example Output:  "e x a m p
                      l b c d f
                      g h i j k
                      n o r s t
                      u v w y z"
* The program creates two keysquares from user input using the above steps.
* The program creates an alphabet square, leaving out q.
  * Example Output: "a b c d e
                     f g h i j
                     k l m n o
                     p r s t u
                     v w x y z"
* The program downcases an input message:
  * Example Input: "HE"
  * Example Output: "he"
* The program takes two letters, and assigns them coordinates based on their location in the alphabet square.
  * Example Input: "HE"
  * Example Output: [2, 1], [4, 0]
* The program generates two new pairs of coordinates: Coordinate1 = [Letter2X, Letter1Y], and Coordinate2 = [Letter1X, Letter2Y]. (These represent the intersections of the two letters in a FourSquare cipher grid.)
  * Example Input: "HE"
  * Example Output: [4, 1], [2, 0]
* The program returns the letters at these coordinates in the respective keysquares.
  * Example Input: "HE"
  * Example Output: "FY"
* The program does the above steps for each pair of letters in an input longer than 2, and returns the resulting string.
  * Example Input: message: "help me obi wan kenobi", key1: "Example" key2: "Keyword"
  * Example Output: "FY GM KY HO BX MF KK KI MD"
* If an input string does not have an even number of letters, program adds an X to the end before encoding.
  * Example Input: "This is a test"
  * Example Output: "thisisatestx"

#### Decode

* Program takes a ciphertext and breaks into 2-letter chunks.
  * Example Input: "fygmkyhobxmfkkkimd"
  * Example Output: "fy gm ky ho bx mf kk ki md"
* Program returns an error if ciphertext is not an even length.
  * Example Input: "xyz"
  * Example Output: "Invalid Ciphertext"
* Program returns an error if ciphertext has any non-alphabet characters or qs.
  * Example Input: "123Q!"
  * Example Output: "Invalid Ciphertext"
* For a pair of cipher characters, the program finds the first character's location in keysquare 1, and the second character's location in keysquare 2.
  * Example Input: "fy"
  * Example Output: [4, 1], [2, 0]
* Program generates a new pair of coordinates: Coordinate1 = [Char2x, Char1y] and Coordinate2 = [Char1x, Char2y].
  * Example Input: "fy"
  * Example Output: [2, 1], [4, 0]
* Program returns the letters at these coordinates in the plaintext alphabet square.
  * Example Input: "fy"
  * Example Input: "he"
* Program does this for all pairs of characters in the ciphertext.
  * Example Input: "fygmkyhobxmfkkkimd"
  * Example Output: "helpmeobiwankenobi"



  ## Setup/Installation Requirements

* _Clone the substitution ciphers _
* _Open the index.html_
* _Choose a cipher from the drop down box in the center of the page_
* _Enter a word in the input box_
* _Ener a key word or shift directions depending on the cipher you are using_
* _Hit the encode or decode button_
* _Hit the QR button to see the bar code_


## Known Bugs

_No known bugs at this time_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns please contact Kelsey Langlois at [@gmail.com]; Linda Luu at [@gmail.com]; Rafael Furry at [@gmail.com]; Debbie Michel at [debbiemichel1633@gmail.com].  You are more then welcome to play with the code and change it in anyway you wish_

## Technologies Used

_This program was written using html, css, javascript, bootstrap and jQuery._

### License

*MIT*

Copyright (c) 2016 **_{Kelsey Langlois, Linda Luu, Rafael Furry, Debbie Michel}_**
