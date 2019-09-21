const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
  test("Test 1 expected 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); //Assert Function
  });
});
