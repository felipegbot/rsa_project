import React from "react";
import rsa from "../../Code/rsa_crypt";
import "./styles.css";

export const Step1 = () => {
  const [p, setP] = React.useState(0);

  const handleSubmit = () => {
    if (rsa.insertP(p)) {
      console.log("P: " + rsa.p);
    }
  };

  return (
    <div>
      {/* <input
        onChange={(inputValue) => {
          setP(Number(inputValue.target.value));
        }}
        type="number"
      /> */}
      {/* <button onClick={handleSubmit}>Inserir P</button> */}
    </div>
  );
};

export function InitialScreen() {
  return (
    <div className="conteudo">
      {/* <div className="card01">
          <h2 className="titulo-card">hsudashuahd</h2>
        </div>

        <div className="card02">
          <h2 className="titulo-card">hsudashuahd</h2>
        </div>

        <div className="card03">
          <h2 className="titulo-card">hsudashuahd</h2>
        </div> */}
      <div className="titulo">
        <h1>RSA - Sistema Encriptográfico</h1>
      </div>

      <div className="card01">
        <div className="fundo-icone">
          <img className="code-svg" src="/src/img/code.svg" alt="code" />
        </div>
        <h3>Lorem ipsum</h3>
      </div>

      <div className="card02">
        <h3>Lorem ipsum</h3>
      </div>

      <div className="card03">
        <h3>Lorem ipsum</h3>
      </div>

      <div className="executar">
        <a href="/">Iniciar execução do programa </a>
      </div>
    </div>
  );
}
