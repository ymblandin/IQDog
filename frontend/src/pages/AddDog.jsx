import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { IdContext } from "../contexts/IdContext";
import "../assets/css/add-dog.css";

function AddDog() {
  // const { setDogId } = useContext(IdContext);

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const navigate = useNavigate();

  const handleClick = () => {
    axios.post("http://localhost:5000/dogs", {
      name,
      birth,
      creation: `${year}/${month}/${day}`,
    });
    navigate("/home");
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
            type="date"
            min="2000-01-01"
            max="2022-12-31"
            value={birth}
            id="birth"
            onChange={(event) => setBirth(event.target.value)}
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
