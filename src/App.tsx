import Context from "context/context";
import React, { useMemo, useState } from "react";
import { Header, TreeView } from "./ui";

const App = () => {
  const [context, setContext] = useState(0);
  const contextValue = useMemo(
    () => ({ context, setContext }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [context]
  );
  return (
    <Context.Provider value={contextValue}>
      <div className="app-container">
        <Header />
        <TreeView />
      </div>
    </Context.Provider>
  );
};

export default App;
