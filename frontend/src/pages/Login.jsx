import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import "../assets/css/login.css";

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    // Call the API
    axios
      .get("http://localhost:5000/dogs")
      .then((response) => setDogs(response.data));
  }, []);

  return (
    <div className="login">
      <NavLink to="/adddog">
        <button type="button">Ajouter un chien</button>
      </NavLink>

      {dogs.map((dog) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={dog.id} {...dog} />
      ))}
    </div>
  );
}

export default Login;
