import { createContext, useContext, useState } from "react";

const StepperContext = createContext<any>({});

export function UseContextProvider({ children }) {
  const [myData, setMyData] = useState("");

  return (
    <StepperContext.Provider value={{ myData, setMyData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { myData, setMyData } = useContext(StepperContext);
  return { myData, setMyData };
}
