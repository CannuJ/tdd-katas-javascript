function Sum(num1, num2) {
    if (isNaN(parseInt(num1))) {
        num1 = '0';
    }
    if (isNaN(parseInt(num2))) {
        num2 = '0';
    }
    const strSum = parseInt(num1) + parseInt(num2);
    return String(strSum);
}
//# sourceMappingURL=stringsum.js.map