class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if(this.length === 1) {
      let retNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return retNode.val;
    }

    let curNode = this.head;
    while(curNode) {
      if(curNode.next === this.tail) {
        const retNode = curNode.next;
        curNode.next = null;
        this.tail = curNode;
        this.length--;
        return retNode.val;
      } else {
        curNode = curNode.next;
      }
    }

    return undefined;
  }

  shift() {
    if(this.length === 0) {
      return undefined;
    }

    if(this.length === 1) {
      const retNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return retNode.val;
    }

    const retNode = this.head;
    this.head = this.head.next;
    retNode.next = null;
    this.length--;
    return retNode.val;
  }
}

module.exports = SinglyLinkedList;