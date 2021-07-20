"use strict";
/**
 * Separates a string based on the list of tokens supplied
 * @param string
 * @param tokens
 */
function splitMulti(string, tokens){
    var tempChar = tokens[0]; // default split char
    for (var i = 1; i < tokens.length; i++){
        string = string.split(tokens[i]).join(tempChar);
    }
    string = string.split(tempChar);
    return string;
}
/**
 * Separates and returns sum of a string containing up to 2 numbers
 * @param numbers
 */
function Add(numbers: string) {

    var delimArr = [',', '\n', ';']  // default delimiters

    if (numbers[0] === "/" && numbers[1] === "/") {
        delimArr = [numbers[2]]
        numbers = numbers.substring(numbers.indexOf(delimArr[0]) + 3);
    }

    var numArray = splitMulti(numbers, delimArr)

    let numTemp = 0;
    if (numArray.length === 1 && numArray[0].replace(/\D/g,'') === "") {
        return 0
    }

    for (let i = 0; i < numArray.length; i++) {
        if (!isNaN(Number(numArray[i].replace(/\D/g,'')))) {
            numTemp += parseInt(numArray[i]);
        }
    }
    return numTemp;
}