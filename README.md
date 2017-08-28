# Substitution Ciphers

## Specifications

### Encode

* The program does nothing with non-alphabet characters.
  * Example Input: "12345!"
  * Example Output: "12345!"
* The program replaces a character other than a, b, or c with the letter 3 before it.
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
