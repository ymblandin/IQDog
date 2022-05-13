import { createContext, useState } from "react";

const IdContext = createContext();

function IdProvider({ children }) {
  const [dogId, setDogId] = useState(0);

  return (
    <IdContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ dogId, setDogId }}
    >
      {children}
    </IdContext.Provider>
  );
}

export { IdContext, IdProvider };
