class RSA_Encrypt {
  encrypt(): void {
    console.log("RSA_Encrypt");
  }
}
class RSA_Decrypt {
  decrypt(): void {
    console.log("RSA_Decrypt");
  }
}

class RSA_AllCrypt {
  encrypt: RSA_Encrypt;
  decrypt: RSA_Decrypt;

  //Variáveis a serem inseridas
  p: number;
  q: number;

  //Variáveis a serem calculadas
  n: number;
  z: number;
  e: number;
  d: number;

  constructor() {
    this.encrypt = new RSA_Encrypt();
    this.decrypt = new RSA_Decrypt();
  }

  verificaPrimo(numero: number) {
    if (numero === 1 || 0) return false;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) throw new Error("Número inválido, insira apenas números primos");
    }
    return true;
  }

  init() {
    try {
      const primeiroNum = prompt("Insira o primeiro número primo");
      this.verificaPrimo(Number(primeiroNum));
      const segundoNum = prompt("Insira o segundo número primo");
      this.verificaPrimo(Number(segundoNum));
    } catch (e) {
      console.log("Número(s) inválido(s)", e);
    }
  }
}
