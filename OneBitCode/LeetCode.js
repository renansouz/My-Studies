var findDuplicateSubtrees = function(root) {
    const map = new Map();
    const result = [];
    
    const traverse = (node) => {
        if (!node) return "#";
        const serial = `${node.val},${traverse(node.left)},${traverse(node.right)}`;
        if (map.has(serial)) {
            map.set(serial, map.get(serial) + 1);
        } else {
            map.set(serial, 1);
        }
        if (map.get(serial) === 2) {
            result.push(node);
        }
        return serial;
    };
    
    traverse(root);
    return result;
};

// Example usage
const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 2,
            left: { val: 4, left: null, right: null },
            right: null
        },
        right: { val: 4, left: null, right: null }
    }
};
console.log(findDuplicateSubtrees(tree)); // Output: [[TreeNode], [TreeNode]]