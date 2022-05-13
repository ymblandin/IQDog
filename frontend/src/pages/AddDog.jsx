import { useState } from "react";

function AddDog() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <label htmlFor="name">
        Quel est son nom ?
        <input
          type="text"
          value={name}
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="birth">
        Quelle est sa date de naissance ?
        <input
          type="text"
          value={birth}
          id="birth"
          onChange={(event) => setBirth(event.target.value)}
          placeholder="AAAA/MM/JJ"
        />
      </label>
      <button type="button" onClick={handleClick}>
        Enregistrer
      </button>
    </div>
  );
}

export default AddDog;
