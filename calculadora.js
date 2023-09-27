/*
Las pruebas unitarias son una partte fundamental de la ingeniería de software, tiene como objetivo verificar la funcionalidad de una unidad de código. Se entiende por unidad de código a la parte más pequeña que se puede "testear" o probar en una aplicación, por ejemplo:

    - Ciclos
    - Funciones
    - Métodos
    - Etc.


Realizar pruebas unitarias tiene muchas ventajas, ya que permite asegurar que el código funciona segun lo esperado, ademas ayuda a encontrar errores de forma mucho más sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien ayuda a garantizar que el código sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios.

*/


// //Escenario ficticio
// function promedio (cal1, cal2, cal3){
//     let promedio = (cal1 + cal2 + cal3) /3; //formula basica para calcular promedio

// //Ciclo para calcular aprobado o reprobado
//     if (promedio >= 6){
//         console.log("Felicidades, aprobaste");
//     }else{
//         console.log("Necesitas estudiar mas, estas reprobado(a)");
//     }

// }

// promedio(0, 1, -8);//promedio 7
//Que pasa si no se ingresan las 3 calificaciones
//Que sucede si una de las calificaciones es un valor no numerico
//Que pasa si una de las calificaciones es un valor negativo



1//Crear una calculadora básica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicacion, division) para trabajar con pruebas unitarias

//suma
function suma (num1, num2){
    return num1 + num2;
}

//Resta
function resta (num1, num2){
    return num1 - num2;
}

//Multiplicacion
function multiplicacion(num1, num2){
    return num1 * num2;
}

//Division
function division (num1, num2){
    return num1 / num2;
}


/*
Para manejar nuestras pruebas unitarias, se utiliza JEST

    - JUnit (JAVA)
    - NUnit (.NET)
    - pytest (Python)
    - JEST (JS)


JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:
*/

module.exports = {division, suma, resta, multiplicacion};