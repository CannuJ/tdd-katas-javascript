"use strict";
/**
 * Determines whether number is a natural number
 * @param num
 */
function isNaturalNumber(num) {
    num = num.toString();
    var n1 = Math.abs(num), n2 = parseInt(num, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === num;
}
/**
 * Totals both string integers together
 * @param num1
 * @param num2
 */
function Sum(num1, num2) {
    if ((isNaN(parseInt(num1))) || (!isNaturalNumber(num1))) {
        num1 = '0';
    }
    if ((isNaN(parseInt(num2))) || (!isNaturalNumber(num2))) {
        num2 = '0';
    }
    const strSum = parseInt(num1) + parseInt(num2);
    return String(strSum);
}
//# sourceMappingURL=stringsum.js.map