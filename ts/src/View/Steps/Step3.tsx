import React from "react";
import rsa from "../../Code/rsa_crypt";
export function Step3() {
  const [textNaoCriptografado, setTextNaoCriptografado] = React.useState("");
  const [textCriptografado, setTextCriptografado] = React.useState("");

  const [resultadoCriptografia, setResultadoCriptografia] = React.useState("");
  const [resultadoDescriptografia, setResultadoDescriptografia] = React.useState("");

  return (
    <div>
      <input type="text" onChange={(text) => setTextNaoCriptografado(text.target.value)} />
      <button onClick={() => setResultadoCriptografia(rsa.encrypt(textNaoCriptografado))}> Criptografar Frase </button>
      <p>{resultadoCriptografia}</p>
      <input type="text" onChange={(text) => setTextCriptografado(text.target.value)} />
      <button onClick={() => setResultadoDescriptografia(rsa.decrypt(textCriptografado))}> descript Frase </button>
      <p>{resultadoDescriptografia}</p>
    </div>
  );
}
