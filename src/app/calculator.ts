export class Calculator {

  constructor() { }

  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }

  dividir (num1: number, num2: number) {
    if (num2 === 0) {
      return null;
    }
    return num1 / num2;
  }
}
