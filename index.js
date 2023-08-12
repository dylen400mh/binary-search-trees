import Tree from "./Tree.js";
import Helper from "./Helper.js";


// TESTS

// make tree
let array = Helper.generateArray(7);
let tree = Tree(array);

// print tree
Helper.prettyPrint(tree.root)

// check if balanced
console.log(tree.isBalanced()) // true

// print elements with various traversal methods
console.log(tree.levelOrder());
console.log(tree.preOrder())
console.log(tree.inOrder())
console.log(tree.postOrder())

// unbalance tree by adding multiple numbers greater than 100
tree.insert(101);
tree.insert(102);
tree.insert(103);
tree.insert(104);

// print tree
Helper.prettyPrint(tree.root)

// confirm tree is unbalanced
console.log(tree.isBalanced())

// rebalance tree
tree.root = tree.rebalance()

//print tree
Helper.prettyPrint(tree.root)

// check if balanced
console.log(tree.isBalanced()) // true

// print elements with various traversal methods
console.log(tree.levelOrder());
console.log(tree.preOrder())
console.log(tree.inOrder())
console.log(tree.postOrder())





