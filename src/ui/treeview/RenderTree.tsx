import { renderTree } from "utils/renderTree";

function Tree(props: any) {
  const { data, onRemove, newNode } = props;

  return data ? (
    <>
      <span
        className={`tree-node ${
          data.left === null && data.right === null ? "last-node" : ""
        } ${Number(newNode) === Number(data.data) ? "new-node" : ""}`}
        onClick={() => {
          onRemove(data.data);
        }}
      >
        {data.data}
      </span>
      <ul>{renderTree(data, onRemove, newNode)}</ul>
    </>
  ) : null;
}

export default Tree;
