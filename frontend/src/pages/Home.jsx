import { useContext } from "react";
import { IdContext } from "../contexts/IdContext";

export default function Home() {
  const { dogId } = useContext(IdContext);
  return <div>{dogId}</div>;
}
