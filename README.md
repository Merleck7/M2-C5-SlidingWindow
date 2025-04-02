Proyecto: Encontrar la Palabra Más Larga con Sliding Window

Descripción

Este proyecto implementa un algoritmo basado en Sliding Window para encontrar la palabra más larga dentro de un texto dado. Es una solución eficiente para analizar cadenas de texto y extraer la palabra de mayor longitud.

Objetivo

Utilizar la técnica de ventana deslizante para recorrer un texto.

Identificar la palabra más larga sin necesidad de múltiples bucles anidados.

Instrucciones

Dividir el texto en palabras individuales utilizando .split(' ').

Recorrer cada palabra y comparar su longitud con la palabra más larga encontrada hasta el momento.

Actualizar la palabra más larga cuando se encuentre una mayor.

Devolver la palabra más larga después de completar el recorrido.

Código

// Función para encontrar la palabra más larga usando Sliding Window
function findLongestWord(text) {
    let palabras = text.split(' ');
    let longestWord = ''; 
    
    for (let index = 0; index < palabras.length; index++) {
        const element = palabras[index];
        if (element.length > longestWord.length) {
            longestWord = element;
        }        
    }
     return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log("La palabra más larga es:", findLongestWord(text));

Ejemplo de Entrada y Salida

Entrada:

const texto = "La programación en JavaScript es increíble";
console.log(findLongestWord(texto));

Salida:

"programación"

Beneficios del Algoritmo Sliding Window

✅ Reduce la complejidad temporal evitando bucles innecesarios.
✅ Permite recorrer la cadena de manera eficiente.
✅ Es un enfoque claro y fácil de entender para manipular subconjuntos de datos.

Requisitos

Lenguaje: JavaScript (ES6+).

Métodos utilizados: .split(), length, for.