function createNode(value) {
  return {
    value: value,
    children: []
  };
}

// Create the root node
const root = createNode('Root');

// Create child nodes
const child1 = createNode('Child 1');
const child2 = createNode('Child 2');

// Add children to the root
root.children.push(child1, child2);

// Create a grandchild node
const grandChild = createNode('Grandchild of Root');

// Add the grandchild to one of the child nodes
child1.children.push(grandChild);


// Depth-First Search traversal
function traverse(node) {
  console.log(node.value);
  node.children.forEach(child => traverse(child));
}

// Start traversal from the root
traverse(root);
