class FizzBuzz {
  static say(number) {
    // if (number % 15 === 0) {
    //   return "FizzBuzz";
    // } else if (number % 3 === 0) {
    //   return "Fizz";
    // } else if (number % 5 === 0) {
    //   return "Buzz";
    // } else {
    //   return number;
    // }
    switch (true) {
      case this.mod(number, 15) === 0:
        return "FizzBuzz";

      case this.mod(number, 3) === 0:
        return "Fizz";

      case this.mod(number, 5) === 0:
        return "Buzz";
    }
  }

  //   static mod(number, base) {
  //     while (number >= base) {
  //       number -= base;
  //     }
  //     return number;

  //return number - Math.floor(number / base)*base;
}

module.exports = FizzBuzz;
