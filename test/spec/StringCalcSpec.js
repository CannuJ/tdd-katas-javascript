describe("StringCalcCheck", function(){

    it("Simple tests", function () {
        expect(0).toEqual(Add(""));
        expect(1).toEqual(Add('1'));
        expect(3).toEqual(Add('1,2'));
    });

    it("Mixed string of numbers", function () {
        expect(0).toEqual(Add("gfdkls"));
        expect(6).toEqual(Add('1\n2,3'));
    });

    it("Delimiter tests", function () {
        expect(3).toEqual(Add("//;\\n1;2"));
        expect(3).toEqual(Add("1;2"));
    });

});