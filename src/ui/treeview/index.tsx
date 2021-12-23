import React, { useContext, useEffect, useState } from "react";
import Tree from "./RenderTree";

import { TreeGenerator } from "utils/generateTree";
import Context from "context/context";

const bstInstance = new TreeGenerator();

const TreeView = () => {
  const { setContext } = useContext<any>(Context);
  const [newNode, setNewnode] = useState(0);
  const [rootTree, setRootTree] = useState<any>(null);

  useEffect(() => {
    console.log(bstInstance.root);
    window.addEventListener("keydown", handleKeyPressed);
    return () => {
      window.removeEventListener("keydown", handleKeyPressed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPressed = (e: any) => {
    console.log(bstInstance.root);
    if (e.code === "Space") {
      const number = Math.floor(Math.random() * (100 + 100 + 1)) - 100;
      bstInstance.addNode(number);
      setContext(number);
      setNewnode(number);
      setRootTree((prev: any) => ({ ...prev, ...bstInstance.root }));
    }
  };

  const removeNode = (num: Number) => {
    bstInstance.removeNode(num);
    setRootTree((prev: any) => ({ ...prev, ...bstInstance.root }));
  };

  const resetTree = () => {
    bstInstance.resetTree();
    setRootTree(null);
  };

  return (
    <div className="treeview">
      <div className="reset-tree" onClick={resetTree}>
        Reset Tree
      </div>
      {bstInstance.root ? (
        <ul>
          <li>
            <Tree
              data={rootTree}
              newNode={newNode}
              parent={bstInstance.root}
              onRemove={removeNode}
            />
          </li>
        </ul>
      ) : (
        <div className="notree">Press the Spacebar!!!</div>
      )}
    </div>
  );
};

export default TreeView;
