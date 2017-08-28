# Substitution Ciphers

## Specifications

### Encode: Generic Caesar

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

* The program does the same steps as the Generic Caesar cipher, but shifts letters by 13 places.
  * Example Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
  * Example Output: "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"
