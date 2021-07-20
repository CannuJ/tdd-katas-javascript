describe("StringSumCheck", function(){

    it("Two positive integers", function () {
        expect('9').toEqual(Sum('4', '5'));
        expect('53').toEqual(Sum('24', '29'));
        expect('86').toEqual(Sum('75', '11'));
    });

    it("Positive and negative integer", function () {
        expect('43').toEqual(Sum('46', '-3'));
        expect('19').toEqual(Sum('-17', '36'));
        expect('85').toEqual(Sum('90', '-5'));
    });

});