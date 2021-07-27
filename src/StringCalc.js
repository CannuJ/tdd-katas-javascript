"use strict";
/**
 * Takes a string and determines delimiter if a definition exists
 * @param string - string containing alphanumeric characters, possibly delimiter definition
 * as per definition '//.*\n' where '.*' represents defined delimiter
 */
function getDelimiter(string) {
    const delimArray = [];
    const delimRegExp = /(?:^\/\/)?\[([^\[\]]+)]\n?/g;
    let delimRegExpArray = delimRegExp.exec(string);
    while (delimRegExpArray !== null) {
        delimArray.push(delimRegExpArray[1]);
        delimRegExpArray = delimRegExp.exec(string);
    }
    if (delimArray.length > 0) {
        return new RegExp('[' + delimArray.join('') + ']');
    }
    delimRegExpArray = /^\/\/(.*)\n/.exec(string);
    if (delimRegExpArray && delimRegExpArray[1]) {
        return delimRegExpArray[1];
    }
    return [',', '\n', ';']; // default delim array
}
/**
 * Takes a string and drops the delimiter definition if exists
 * @param string - string containing alphanumeric characters, possibly delimiter definition
 */
function formatString(string) {
    const regExp = /^(\/\/.+\n)/;
    const regExpExecArray = regExp.exec(string);
    if (regExpExecArray && regExpExecArray.length > 0) {
        return string.replace(regExp, '');
    }
    return string;
}
function getNumbers(string, delimiter) {
    if (typeof delimiter === "string") {
        return string.split(delimiter)
            .filter(n => n !== ',')
            .map(n => parseInt(n));
    }
    const tempChar = delimiter[0]; // default split char
    for (var i = 1; i < delimiter.length; i++) {
        string = string.split(delimiter[i]).join(tempChar);
    }
    string = string.split(tempChar);
    return string.map(n => parseInt(n));
}
function calculateSum(numbers) {
    const negatives = [];
    const finalSum = numbers.reduce((sum, n) => {
        if (n < 0) {
            negatives.push(n);
        }
        if (isNaN(n)) {
            console.log("NaN");
        }
        return sum + n;
    }, 0);
    if (negatives.length > 0) {
        throw new Error('negatives not allowed: ' + negatives.join(','));
    }
    return finalSum;
}
/**
 * Separates and returns sum of a string containing up to 2 numbers
 * @param numbers
 */
function Add(numbers) {
    if (numbers === '' || numbers.replace(/\D/g, '') === '') {
        return 0;
    }
    const delimiter = getDelimiter(numbers);
    const formattedInput = formatString(numbers);
    return calculateSum(getNumbers(formattedInput, delimiter));
}
//# sourceMappingURL=stringcalc.js.map

console.log(Add('//;\\n1;2'))