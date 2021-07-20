describe("StringSumCheck", function(){

    it("Two positive integers", function () {
        expect('9').toEqual(Sum('4', '5'));
        expect('53').toEqual(Sum('24', '29'));
        expect('75').toEqual(Sum('75', '0'));
    });

    it("Negative integers should be ignored", function () {
        expect('46').toEqual(Sum('46', '-3'));
        expect('36').toEqual(Sum('-17', '36'));
        expect('90').toEqual(Sum('90', '-5'));
    });

    it("Invalid Non Natural Numbers should be ignored", function () {
        expect('8').toEqual(Sum('1.6', '8'));
        expect('37').toEqual(Sum('37', '-9.4'));
        expect('0').toEqual(Sum('54.2', '-50.1'));
    });

});