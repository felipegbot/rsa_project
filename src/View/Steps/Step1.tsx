import React from "react";
import rsa from "../../Code/rsa_crypt";
export const Step1 = () => {
  const [p, setP] = React.useState(0);

  const handleSubmit = () => {
    if (rsa.insertP(p)) {
      console.log("P: " + rsa.p);
    }
  };

  return (
    <div>
      <input
        onChange={(inputValue) => {
          setP(Number(inputValue.target.value));
        }}
        type="number"
      />
      <button onClick={handleSubmit}>Inserir P</button>
    </div>
  );
};
