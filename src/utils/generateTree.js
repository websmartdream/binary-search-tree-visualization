class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeGenerator {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      function searchTree(nodes) {
        if (data < nodes.data) {
          if (nodes.left === null) {
            nodes.left = new Node(data);
            return;
          } else if (nodes.data !== null) {
            return searchTree(nodes.left);
          }
        } else if (data > nodes.data) {
          if (nodes.right === null) {
            nodes.right = new Node(data);
            return;
          } else if (nodes.data !== null) {
            return searchTree(nodes.right);
          }
        } else {
          return null;
        }
      }
      searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    if (current === null) {
      return null;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMinNode = (node) => {
    if (node.left === null) {
      return node;
    } else {
      console.log(node);
      return this.findMinNode(node.left);
    }
  };

  findMax() {
    let current = this.root;
    if (current === null) {
      return null;
    }
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  removeNode(data) {
    const { findMinNode } = this;
    function removeData(nodes, datas) {
      if (nodes === null) {
        return null;
      } else if (datas < nodes.data) {
        nodes.left = removeData(nodes.left, datas);
        return nodes;
      } else if (datas > nodes.data) {
        nodes.right = removeData(nodes.right, datas);
        return nodes;
      } else {
        if (nodes.left === null && nodes.right === null) {
          nodes = null;
          return nodes;
        } else if (nodes.left === null) {
          nodes = nodes.right;
          return nodes;
        } else if (nodes.right === null) {
          nodes = nodes.left;
          return nodes;
        }
        const min = findMinNode(nodes.right);
        nodes.data = min.data;
        nodes.right = removeData(nodes.right, min.data);
        return nodes;
      }
    }

    this.root = removeData(this.root, data);
  }

  print() {
    return this.root;
  }
}

export { Node, TreeGenerator };
