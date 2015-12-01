function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, newNode) {
        if(newNode.item < currentNode.item) {
            var left = currentNode.l;
            if(left == null) {
                currentNode.l = newNode;
            } else {
                this.addNode(currentNode.l, newNode);
            }
        } else {
            var right = currentNode.r;
            if(right == null) {
                currentNode.r = newNode;
            } else {
                this.addNode(currentNode.r, newNode);
            }
        }

}

BST.prototype.add = function (item) {
    if(this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}
function inOrder(tree, callback) {
    if(tree != null) {
        inOrder(tree.l, callback);
        callback(tree.item);
        inOrder(tree.r, callback);
    }
}
function inPreOrder(tree, callback) {
    if(tree != null) {
        callback(tree.item);
        inPreOrder(tree.l, callback);
        inPreOrder(tree.r, callback);
    }
}
function inPostOrder(tree, callback) {
    if(tree != null) {
        inPostOrder(tree.l, callback);
        inPostOrder(tree.r, callback);
        callback(tree.item);
    }
}
function searchTree(node, e) {
    if (node == full) {
        return false;
    }
    if (e == node.item) {
        return true;
    } else {
        if (e < node.item) {
            return searchTree(node.l, e);
        } else if (e > node.item) {
            return searchTree(node.r, e);
        }
    }
}