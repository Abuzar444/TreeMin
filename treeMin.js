class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(4);
const b = new Node(5);
const c = new Node(8);
const d = new Node(2);
const e = new Node(9);
const f = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMin = (root) => {
    let min = Infinity;
    let queue = [root];
    while (queue.length > 0) {
        let current = queue.shift();
        if (current.val < min) min = current.val;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return min;
}
console.log(treeMin(a))