import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { IdContext } from "../contexts/IdContext";
import "../assets/css/home.css";

export default function Home() {
  const { dogId } = useContext(IdContext);
  const [dogInfo, setDogInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/dogs/${dogId}`)
      .then((response) => setDogInfo(response.data));
  }, []);

  return (
    <div className="home">
      <p>{dogInfo[0]?.name}</p>
      <NavLink to="/test">
        <button type="button"> Démarrer les tests</button>
      </NavLink>
    </div>
  );
}
