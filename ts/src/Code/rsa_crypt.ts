import { toast } from "react-toastify";
import { calculaCoprimos, verificaPrimo } from "./aux_funcs";

class RSA_Encrypt {
  encrypt(text: string, valorD: number, valorN: number): string {
    console.log("valor de D " + valorD);
    valorD = 13;
    valorN = 697;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      // Pega o código ASCII do caractere
      const charCode = text.charCodeAt(i);
      console.log(charCode + " charcode de " + text[i]);
      console.log("exponenciação " + Math.pow(charCode, valorD));
      const exponent = Math.pow(charCode, valorD);
      const mod = exponent % valorN;
      console.log("mod " + mod);
      // calcula (TEXTO ORIGINAL ^ E) mod N
      const charCodeCriptografado = Math.pow(charCode, valorD) % valorN;

      // Converte o código ASCII para caractere e concatena com o resultado
      result += String.fromCharCode(charCodeCriptografado);

      console.log(charCodeCriptografado + " equivale a " + String.fromCharCode(charCodeCriptografado));
    }
    return result;
  }
}
class RSA_Decrypt {
  decrypt(text: string, valorE: number, valorN: number): string {
    valorE = 197;
    valorN = 697;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);

      console.log(charCode + " charCode de " + text[i]);
      console.log("exponenciação " + Math.pow(charCode, valorE));
      const exponent = Math.pow(charCode, valorE);
      const mod = exponent % valorN;
      console.log("mod " + mod);

      const charCodeDescriptografado = Math.pow(charCode, valorE) % valorN;
      result += String.fromCharCode(charCodeDescriptografado);
      console.log(charCodeDescriptografado + " equivale a " + String.fromCharCode(charCodeDescriptografado));
    }
    return result;
  }
}

class RSA_AllCrypt {
  encryptModule: RSA_Encrypt;
  decryptModule: RSA_Decrypt;

  //  Variáveis a serem inseridas, 2 quaisquer números primos
  p: number = 0;
  q: number = 0;

  //Variáveis a serem calculadas
  n: number = 0; // N = p * q
  z: number = 0; // Z = (p - 1) * (q - 1)
  e: number = 0; // (E * D) mod Z = 1

  // Coprimo de Z
  d: number = 0;

  constructor() {
    this.encryptModule = new RSA_Encrypt();
    this.decryptModule = new RSA_Decrypt();
  }

  calculaNZ() {
    if (this.p === 0 || this.q === 0) {
      toast.error("Insira os números primos P e Q");
      return;
    }
    this.n = this.p * this.q;
    this.z = (this.p - 1) * (this.q - 1);
  }

  insertP(p: number) {
    try {
      verificaPrimo(p);
      this.p = p;
      return true;
    } catch (err) {
      toast.error("Número inválido, insira apenas números primos");
      return false;
    }
  }

  insertQ(q: number) {
    try {
      verificaPrimo(q);
      this.q = q;
      return true;
    } catch (err) {
      toast.error("Número inválido, insira apenas números primos");
      return false;
    }
  }

  gerarCoprimos() {
    const coprimos = calculaCoprimos(this.z);
    const coprimoEscolhido = coprimos[Math.floor(Math.random() * coprimos.length)];
    this.d = coprimoEscolhido;
    this.calculaE();
    return coprimoEscolhido;
  }

  calculaE() {
    // (E * D) mod Z = 1
    for (let i = 1; i < this.z; i++) {
      if ((i * this.d) % this.z === 1) {
        this.e = i;
        console.log(this.e, this.d, this.z);
        break;
      }
    }
    return this.e;
  }

  encrypt(text: string) {
    const textCriptografado = this.encryptModule.encrypt(text, this.d, this.n);
    return textCriptografado;
  }
  decrypt(text: string) {
    const textDescriptografado = this.decryptModule.decrypt(text, this.e, this.n);
    // console.log(this.e, this.d, this.n);
    return textDescriptografado;
  }
}

export default new RSA_AllCrypt();
