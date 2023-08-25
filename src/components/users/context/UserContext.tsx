import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>({});

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const { userData, setUserData } = useContext(UserContext);
  return { userData, setUserData };
}
