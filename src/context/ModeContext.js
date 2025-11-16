import { createContext, useState } from "react";

export const ModeChange = createContext();
function ModeContext({ children }) {
  const lastMode = Boolean(localStorage.getItem("mode"))
    ? localStorage.getItem("mode")
    : "dark";

  const [mode, setMode] = useState(`${lastMode}`);
  return (
    <ModeChange.Provider value={{ mode, setMode }}>
      {children}
    </ModeChange.Provider>
  );
}

export default ModeContext;
