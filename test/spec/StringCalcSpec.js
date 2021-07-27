describe("StringCalcCheck", function(){

    it("Simple tests", function () {
        expect(0).toEqual(Add(""));
        expect(1).toEqual(Add('1'));
        expect(3).toEqual(Add('1,2'));
    });

    it("Mixed string of numbers or just letters", function () {
        expect(0).toEqual(Add("gfdkls"));
        expect(6).toEqual(Add('1\n2,3'));
    });

    it("Delimiter tests", function () {
        expect(3).toEqual(Add("//;\\n1;2"));
        expect(3).toEqual(Add("1;2"));
        expect(25).toEqual(Add("//:\\n17:2:6"));
    });

    it("Testing negative number exception", function () {
        // expect(Add("5,-3").toThrowError('Error: negatives not allowed: -3'));
    });

});