import axios from "axios";
import { useState } from "react";
import "../assets/css/add-dog.css";

function AddDog() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const handleClick = () => {
    axios.post("http://localhost:5000/dogs", {
      name,
      birth,
      creation: `${year}/${month}/${day}`,
    });
  };

  return (
    <div id="add-dog-comp">
      <div className="add-dog">
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
    </div>
  );
}

export default AddDog;
