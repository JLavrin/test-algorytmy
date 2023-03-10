// 1
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  addFirst(data) {
		this.first = {
			data: data,
			next: this.first
		}
	}
	removeFirst() {
		let oldNode = this.first
		if(oldNode === null)
			return undefined
		this.first = oldNode.next
		return oldNode.data
	}
}

