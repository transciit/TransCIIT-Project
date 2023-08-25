import { createContext, useContext, useState } from "react";

const StepperContext = createContext<any>({});

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);
  return { userData, setUserData };
}
