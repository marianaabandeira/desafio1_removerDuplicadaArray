import * as readlineSync from 'readline-sync';

/**
 * Função que remove duplicatas de um array
 */
function removeDuplicates<T>(arr: T[]): T[] { 
  return [...new Set(arr)]; 
}

// ---------- Entrada do usuário ----------
const input = readlineSync.question('Digite números separados por vírgula: '); 

// Converte string em array de números
const numeros = input.split(',').map(num => Number(num));

// ---------- Teste ----------
console.log("Números sem duplicatas:", removeDuplicates(numeros));
