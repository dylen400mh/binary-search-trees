const Helper = (() => {
  // ensures an array with no duplicates is returned with requested size
  function generateArray(size) {
    let set = new Set();
    while (set.size !== size) {
      set.add(Math.floor(Math.random() * 100));
    }

    return [...set].sort((a, b) => a - b);
  }

  // print binary search tree
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return { generateArray, prettyPrint };
})();

export default Helper;
