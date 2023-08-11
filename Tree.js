import Node from "./Node.js";

const Tree = (array) => {
  const buildTree = (array, start = 0, end = array.length - 1) => {
    // base case: finished when start index is greater than end index
    if (start > end) return null;

    // access middle node of array
    let middleIndex = Math.floor((start + end) / 2);

    // make new node
    let node = Node(array[middleIndex]);

    // recursively call buildTree on child nodes
    node.left = buildTree(array, start, middleIndex - 1);
    node.right = buildTree(array, middleIndex + 1, end);

    return node;
  };

  // get root of tree from array
  let root = buildTree(array);

  // insert value into tree
  const insert = (value, node = root) => {
    // while the current node's children are not null, traverse left/right depending on the value passed
    while (node.left && node.right) {
      if (value < node.left) {
        node.left = this.insert(value, node.left);
      } else if (value > node.right) {
        node.right = this.insert(value, node.right);
      }
    }

    // insert value
    if (node.left === null) node.left = value;
    else if (node.right === null) node.right = value;

    return node;
  };

  // remove node from tree
  const remove = (value, node = root) => {
    // base case
    if (node === null) return node;

    // if root is greater than value to remove, traverse left
    if (node.data > value) {
      node.left = remove(value, node.left);
      return node;
    }
    // if root is less than value to remove, traverse right
    if (node.data < value) {
      node.right = remove(value, node.right);
      return node;
    }

    // node to delete is found - deletion begins

    // CASE 1: ONLY ONE CHILD EXISTS
    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }

    // CASE 2: TWO CHILDREN EXIST
    else {
      let successor = node.right;

      // find in-order successor of root (smallest in right subtree)
      while (successor.left !== null) {
        successor = successor.left;
      }

      // copy in-order successor's data to the node we are deleting
      node.data = successor.data;

      // remove in-order successor from right subtree
      node.right = remove(successor.data, node.right);

      return node;
    }
  };

  // returns the node with the given value
  const find = (value, node = root) => {
    // base case
    if (node === null || node.data === value) return node;

    // if root is greater than value to remove, traverse left
    if (node.data > value) {
      return find(value, node.left);
    }
    // if root is less than value to remove, traverse right
    if (node.data < value) {
      return find(value, node.right);
    }
  };

  // returns array of values in level order
  const levelOrder = (callback = null, array = [], queue = [], node = root) => {
    if (node === null) return;

    // perform callback function on node data
    if (callback) callback(node.data);

    // add root to array
    array.push(node.data);

    // add node children to queue
    queue.push(node.left);
    queue.push(node.right);

    // while there are still elements in the queue
    while (queue.length) {
      const nextNode = queue.shift();
      levelOrder(callback, array, queue, nextNode);
    }

    return array;
  };

  

  return {
    root,
    buildTree,
    insert,
    remove,
    find,
    levelOrder,
  };
};

export default Tree;
