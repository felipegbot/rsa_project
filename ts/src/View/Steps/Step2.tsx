import React from "react";
import rsa from "../../Code/rsa_crypt";
export const Step2 = () => {
  const [q, setQ] = React.useState(0);

  const handleSubmit = () => {
    if (rsa.insertQ(q)) {
      console.log("Q:" + rsa.q);
      rsa.calculaNZ();
      console.log("N: " + rsa.n);
      console.log("Z: " + rsa.z);
    }
  };

  const handleCoprimos = () => {
    console.log("Z: " + rsa.z);
    const coprimoEscolhido = rsa.gerarCoprimos();
    console.log("coprimo escolhido: " + coprimoEscolhido);
  };

  return (
    <div>
      <input
        onChange={(inputValue) => {
          setQ(Number(inputValue.target.value));
        }}
        type="number"
      />
      <button onClick={handleSubmit}>Inserir Q</button>
      <br />
      <button onClick={handleCoprimos}>Gerar coprimos</button>
    </div>
  );
};
