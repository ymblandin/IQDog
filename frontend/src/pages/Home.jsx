import { useContext } from "react";
import { IdContext } from "../contexts/IdContext";
import "../assets/css/home.css";

export default function Home() {
  const { dogId } = useContext(IdContext);
  return <div className="home">{dogId}</div>;
}
