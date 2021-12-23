import Tree from "ui/treeview/RenderTree";

export const renderTree = (node: any, onRemove: any, newNode: any) => {
  const renderData = Object.entries(node).map(([key, value]: any) => {
    if ((key === "left" || key === "right") && typeof value === "object") {
      if (value !== null) {
        return (
          <li key={value.data}>
            <Tree data={value} newNode={newNode} onRemove={onRemove} />
          </li>
        );
      } else if (value === null) {
        return null;
      }
    }
  });
  return renderData;
};
