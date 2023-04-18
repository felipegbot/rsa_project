import { toast } from "react-toastify";
import { calculaCoprimos, verificaPrimo } from "./aux_funcs";

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

  //  Variáveis a serem inseridas, 2 quaisquer números primos
  p: number = 0;
  q: number = 0;

  //Variáveis a serem calculadas
  n: number = 0; // N = p * q
  z: number = 0; // Z = (p - 1) * (q - 1)

  e: number = 0;
  d: number = 0;

  constructor() {
    this.encrypt = new RSA_Encrypt();
    this.decrypt = new RSA_Decrypt();
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
    return calculaCoprimos(this.z);
  }
}

export default new RSA_AllCrypt();
