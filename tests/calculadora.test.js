const calculadora = require('../calculadora');

//console.log(calculadora.suma);

 //Prueba Unitaria Suma
 test("Debe sumar numero a + b", () =>{
     expect(calculadora.suma(10,10)).toBe(20);
 })

 //Prueba Unitaria Resta
 test("Debe restar numero a - b", () =>{
     expect(calculadora.resta(10,10)).toBe(0);
 })

 //Prueba Unitaria multiplicacion
 test("Debe multiplicar numero a * b", () =>{
     expect(calculadora.multiplicacion(10,10)).toBe(100);
 })

 //Prueba Unitaria Suma
 test("Debe dividir numero a / b", () =>{
     expect(calculadora.division(100,10)).toBe(10);
 })


// //Refactorización en un solo test
// test("Prueba para toda la calculadora", () =>{
//     expect(calculadora.suma(10,10)).toBe(20);
//     expect(calculadora.resta(10,10)).toBe(0);
//     expect(calculadora.multiplicacion(10,10)).toBe(100);
//     expect(calculadora.division(100,10)).toBe(10);
// })
