// import { Calculator } from './calculator';

// describe('Test for Calcultaor', () => {

//   let calculator: Calculator;

//   beforeEach(() => {
//     calculator = new Calculator();
//   });

//   describe('Test for multiply', () => {

//     it('should return 9 when multiply 3 and 3', () => {
//       expect(calculator.dividir(3,0)).toEqual(null);
//       let result = calculator.multiply(3,3);
//       expect(result).toEqual(9);
//     });
//   });

//   describe('Test for dividir', () => {
//     it('should return 1 when dividir 3 and 3', () => {
//       // Act
//       let result = calculator.dividir(3,3);
//       // Assert
//       expect(result).toEqual(1);
//       expect(result).not.toEqual(2);
//   });
// });

//   describe('Test matchers', () => {
//     it('Test matchers', () => {
//       let name:string = 'Vinicio';
//       let name2;
//       let age:number = 30;
//       expect(name).toEqual('Vinicio');
//       expect(name).not.toEqual('Vinicio2');

//       expect(1+2 === 3).toBeTruthy();
//       expect(1+2 === 4).toBeFalsy();
//       //mayor que
//       expect(age).toBeGreaterThan(20);
//       //menor que
//       expect(age).toBeLessThan(40);
//       //espresiones regulares
//       expect(name).toMatch(/V/);
//       expect('15151561651').toMatch(/\d{11}/);
//       //esperando arrelgos
//       expect([1,2,3]).toContain(2);
//       expect(['apple','orange','banana']).toContain('apple');
//     });
//   });


//   it('should create an instance', () => {
//     expect(new Calculator()).toBeTruthy();
//   });

// });
