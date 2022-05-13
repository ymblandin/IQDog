import axios from "axios";
import { useState } from "react";

function AddDog() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const handleClick = () => {
    axios.post("http://localhost:5000/dogs", {
      name,
      birth,
      creation: new Date(),
    });
  };

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
          type="date"
          value={birth}
          id="birth"
          min="2000-01-01"
          max="2022-12-31"
          onChange={(event) => setBirth(event.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Enregistrer
      </button>
    </div>
  );
}

export default AddDog;
