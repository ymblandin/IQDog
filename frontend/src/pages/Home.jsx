import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { IdContext } from "../contexts/IdContext";
import "../assets/css/home.css";

export default function Home() {
  const { dogId } = useContext(IdContext);

  const [dog, setDog] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/dogs/${dogId}`).then((response) => {
      setDog({ ...dog, ...response.data[0] });
    });
    axios.get("https://random.dog/woof").then((response) => {
      setDog((dogInfo) => {
        return { ...dogInfo, img: `https://random.dog/${response.data}` };
      });
    });
  }, []);
  return (
    <div className="home">
      <img src={dog.img} alt="dog" />
      <h2>{dog.name}</h2>
      <NavLink to="/Test">
        <button type="button">Commencer les tests</button>
      </NavLink>
    </div>
  );
}
