import Context from "context/context";
import React, { useContext } from "react";

const Header = () => {
  const { context } = useContext<any>(Context);
  return (
    <div className="app-header">
      <div className="app-title">Binary Search Tree</div>
      <div className="app-controller">New Node: {context}</div>
    </div>
  );
};

export default Header;
