describe("Calculator", function(){
    
    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });
    
    describe("Function add", function() {

        it("should be able to add 2 numbers", function() {
            //var calculator = new Calculator();
            var result = calculator.add(2,4);
    
            expect(result).toEqual(6)
        });
    
        it ("should throw an error if both argumend are not provided", function() {
            //var calculator =  new Calculator()
            expect(function() {
                calculator.add(1)
            }).toThrow()
    
        });

        it("should be called with the right arguments", function () {
            
            //spyOn(calculator, "add").and.returnValue(5);
            spyOn(calculator, "add").and.throwError("someError");

            //expect(result).toBeUndefined();
            expect(function() {
                var result = calculator.add(3,2);
            }).toThrowError("someError");
            
            // expect(calculator.add).toHaveBeenCalled();
            expect(calculator.add).toHaveBeenCalledWith(3,2);
        })

    })    

});