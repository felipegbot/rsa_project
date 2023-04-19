function encrypt(text: string, valorD: number, valorN: number): string {
  console.log("valor de D " + valorD);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    // Pega o código ASCII do caractere
    const charCode = text.charCodeAt(i);
    const exponent = Math.pow(charCode, valorD);
    const mod = exponent % valorN;
    // calcula (TEXTO ORIGINAL ^ E) mod N
    const charCodeCriptografado = Math.pow(charCode, valorD) % valorN;

    // Converte o código ASCII para caractere e concatena com o resultado
    result += String.fromCharCode(charCodeCriptografado);
  }
  return result;
}

function decrypt(text: string, valorE: number, valorN: number): string {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);

    const exponent = Math.pow(charCode, valorE);
    const mod = exponent % valorN;

    const charCodeDescriptografado = Math.pow(charCode, valorE) % valorN;
    result += String.fromCharCode(charCodeDescriptografado);
  }
  return result;
}

const E = 197;
const Z = 640;
const N = 697;
const D = 13;

const text = "Hello World";

const encrypted = encrypt(text, D, N);
const decrypted = decrypt(encrypted, E, N);
