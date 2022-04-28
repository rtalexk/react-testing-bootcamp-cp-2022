import { createContext, useState } from "react";

export const MediaDateContext = createContext({
  date: new Date(),
  setDate: (_date) => { },
});

export function MediaDateContextProvider({ children }) {
  const today = new Date();
  const [ date, setDate ] = useState(today);

  return (
    <MediaDateContext.Provider value={{ date, setDate }}>
      {children}
    </MediaDateContext.Provider>
  );
}