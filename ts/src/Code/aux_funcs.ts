function calculaMDC(num1: number, num2: number): number {
  // Algoritmo de Euclides para encontrar o MDC entre dois números
  // De maneira recursiva realiza divisões sucessivas até encontrar o maior divisor comum
  if (num2 === 0) return num1;
  return calculaMDC(num2, num1 % num2);
}

export function verificaPrimo(numero: number) {
  if (numero === 1 || 0) throw new Error("Número inválido, insira apenas números primos");
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) throw new Error("Número inválido, insira apenas números primos");
  }
  return true;
}

export function calculaCoprimos(primeiroNumero: number) {
  let coprimos = [];
  for (let i = 1; i < primeiroNumero; i++) {
    // Se o MDC entre os dois números for 1, então são primos entre si
    if (coprimos.length > 100) break;
    if (calculaMDC(primeiroNumero, i) === 1) coprimos.push(i);
  }
  return coprimos;
}
