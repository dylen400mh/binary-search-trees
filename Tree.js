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
    if (node === null) return Node(value)

    if (value < node.data) {
      node.left = insert(value, node.left);
    } else if (value > node.data) {
      node.right = insert(value, node.right);
    }

    // // create new node for insertion
    // const newNode = Node(value);

    // // insert value
    // if (newNode.data < node.data) node.left = newNode;
    // else if (newNode.data > node.data) node.right = newNode;

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

    // perform callback function on node
    if (callback) callback(node);

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

  // pre-order traversal on tree nodes (parent, left child, right child)
  const preOrder = (callback = null, array = [], node = root) => {
    // base case
    if (node === null) return;

    // perform callback function on node
    if (callback) callback(node);

    // add node data to array
    array.push(node.data);

    // perform preOrder traveral on child nodes
    preOrder(callback, array, node.left);
    preOrder(callback, array, node.right);

    return array;

  }

  // in-order traversal on tree nodes (left child, parent, right child)
  const inOrder = (callback = null, array = [], node = root) => {
    // base case
    if (node === null) return;

    // perform callback function on node
    if (callback) callback(node);

    // perform pre-order traveral on left child node
    inOrder(callback, array, node.left);

    // add node data to array
    array.push(node.data);

    // perform pre-order traversal on right child node
    inOrder(callback, array, node.right);

    return array;
  }

  // post-order traversal on tree nodes (left child, right child, parent)
  const postOrder = (callback = null, array = [], node = root) => {
    // base case
    if (node === null) return;

    // perform callback function on node
    if (callback) callback(node);

    // perform preOrder traveral on child nodes
    postOrder(callback, array, node.left);
    postOrder(callback, array, node.right);

    // add node data to array
    array.push(node.data);

    return array;
  }

  /*Returns number of edges in longest path from a given node to a leaf node.
  Leaf height = 0 */
  const height = (node = root) => {
    // Base case: Height of null is -1
    if (node === null) return -1;

    // get heights of children nodes
    const leftHeight = (node.left);
    const rightHeight = (node.right);

    // return height of current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /* Returns depth: Number of edges in path from a given node to the tree’s root node
  Root height = 0 */
  const depth = (node = root, depth = 0) => {
    // Base case: Node is reached
    if (node === root) return depth;

    // If node doesn't exist
    if (!node) return null;

    // If node is less than root, traverse left. Otherwise, traverse right.
    (node.data < root.data) ? depth(node.left, ++depth) : depth(node.right, ++depth);
  }

  /* Checks if a tree is balanced.
  Difference between heights of left subtree and right subtree of every node is not more than 1 */
  const isBalanced = (node = root) => {
    // if base case is reached, the tree is balanced
    if (node === null) return true;

    // get height difference of child branches
    const heightDifference = Math.abs((height(node.left) - height(node.right)));

    return (heightDifference <= 1 && isBalanced(node.left) && isBalanced(node.right));
  }

  // rebalances an unbalanced binary tree
  const rebalance = () => {
    // get array of values using any traversal method
    const array = levelOrder();

    // overwrite root to new balanced tree
    root = buildTree(array);
  }

  return {
    root,
    buildTree,
    insert,
    remove,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance
  };
};

export default Tree;
