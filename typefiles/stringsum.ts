"use strict";
/**
 * Totals both string integers together
 * @param num1
 * @param num2
 */
function Sum(num1: string, num2: string) {

    if(isNaN(parseInt(num1))) {
        num1 = '0';
    }

    if(isNaN(parseInt(num2))) {
        num2 = '0';
    }

    const strSum = parseInt(num1) + parseInt(num2);

    return String(strSum);
}