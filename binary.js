// 2
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(key) {
    const newNode = new Node(key);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (key < current.key) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

	contains(key) {
		let node = this.root
		while(node != null)
			if(key == node.key)
				return true
			else if(key < node.key)
				node = node.left
			else
				node = node.right
		return false
	}
}