import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { IdContext } from "../contexts/IdContext";
import "../assets/css/card.css";

function Card({ name, id }) {
  const { setDogId } = useContext(IdContext);
  const [pictureSrc, setPictureSrc] = useState("");

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setPictureSrc(response.data.message));
  }, []);

  const handleClick = () => {
    setDogId(id);
  };

  return (
    <NavLink className="navlink-card" to="/home" onClick={handleClick}>
      <div className="card">
        <img src={pictureSrc} alt="chien" />
        <p>{name}</p>
      </div>
    </NavLink>
  );
}

export default Card;
