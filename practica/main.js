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
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log("La palabra más larga es:", findLongestWord(text));