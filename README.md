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
