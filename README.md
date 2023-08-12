# Binary Search Tree Implementation

This repository contains an implementation of a balanced binary search tree in JavaScript. The binary search tree is implemented using a `Node` factory and a `Tree` factory, along with various utility functions for insertion, deletion, traversal, balancing, and more.

## Factory Functions

### Node Factory

The `Node` factory represents a single node in the binary search tree. Each node has data, a left child, and a right child.

### Tree Factory

The `Tree` factory represents the binary search tree. It accepts an array of data when initialized and constructs a balanced binary search tree using the `buildTree` function.

### `buildTree(array)`

This function takes an array of data, sorts and removes duplicates, and constructs a balanced binary search tree. It returns the root node of the tree.

### Utility Functions

- `insert(value)`: Inserts a new node with the given value into the tree.
- `delete(value)`: Deletes the node with the given value from the tree.
- `find(value)`: Finds and returns the node with the given value.
- `levelOrder(callback)`: Traverses the tree in breadth-first level order, applying the provided callback function to each node.
- `inorder(callback)`: Traverses the tree in inorder depth-first order, applying the provided callback function to each node.
- `preorder(callback)`: Traverses the tree in preorder depth-first order, applying the provided callback function to each node.
- `postorder(callback)`: Traverses the tree in postorder depth-first order, applying the provided callback function to each node.
- `height(node)`: Returns the height of the given node (number of edges to the furthest leaf).
- `depth(node)`: Returns the depth of the given node (number of edges to the root).
- `isBalanced()`: Checks if the tree is balanced (difference in heights of left and right subtrees <= 1).
- `rebalance()`: Rebalances an unbalanced tree using a traversal and the `buildTree` function.

### Visualization

To visualize the binary search tree, you can use the `prettyPrint` function provided in the instructions. It prints the tree structure in a structured format.

## Driver Script

The repository includes a simple driver script, `index.js`, that demonstrates the functionality of the implemented binary search tree. It does the following:

1. Creates a balanced binary search tree from an array of random numbers < 100.
2. Confirms if the tree is balanced using the `isBalanced` function.
3. Prints elements in level, preorder, inorder, and postorder traversal orders.
4. Unbalances the tree by adding numbers > 100.
5. Confirms if the tree is unbalanced.
6. Balances the tree using the `rebalance` function.
7. Confirms if the tree is balanced again.
8. Prints elements in the same traversal orders as before.

Feel free to run the `index.js` script to see the implementation in action.

## Usage

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node index.js` to execute the driver script.

