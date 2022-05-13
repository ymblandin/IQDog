import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../assets/css/login.css";

const dogSample = [
  {
    id: 1,
    name: "Gucci",
    age: 10,
  },
  {
    id: 2,
    name: "Defa",
    age: 5,
  },
];

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [dogs, setDogs] = useState(dogSample);

  useEffect(() => {
    // Call the API
  }, []);

  return (
    <div className="login">
      {dogs.map((dog) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={dog.id} {...dog} />
      ))}
    </div>
  );
}

export default Login;
