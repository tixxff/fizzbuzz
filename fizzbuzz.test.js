const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
  //   test("Test 1 expected 1", () => {
  //     const result = FizzBuzz.say(1);
  //     expect(result).toEqual(1); //Assert Function
  //   });

  //   test("Test 2 expected 2", () => {
  //     const result = FizzBuzz.say(2);
  //     expect(result).toEqual(2); //Assert Function
  //   });

  //   test("Test 3 expected Fizz", () => {
  //     const result = FizzBuzz.say(3);
  //     expect(result).toEqual("Fizz"); //Assert Function
  //   });

  //   test("Test 4 expected 4", () => {
  //     const result = FizzBuzz.say(4);
  //     expect(result).toEqual(4); //Assert Function
  //   });

  //   test("Test 5 expected 100", () => {
  //     const result = FizzBuzz.say(100);
  //     expect(result).toEqual("Buzz"); //Assert Function
  //   });

  //   test("Test 5 expected Buzz", () => {
  //     const result = FizzBuzz.say(5);
  //     expect(result).toEqual("Buzz"); //Assert Function
  //   });

  //   test("Test 6 expected FizzBuzz", () => {
  //     const result = FizzBuzz.say(15);
  //     expect(result).toEqual("FizzBuzz"); //Assert Function
  //   });

  test("Test 5%5 expected 0", () => {
    const result = FizzBuzz.mod(5, 5);
    expect(result).toEqual(0); //Assert Function
  });
});
