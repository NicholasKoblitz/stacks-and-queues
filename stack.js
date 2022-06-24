/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if(this.first === null) {
      this.first = newNode;
      this.last = newNode;
      this.size = this.size + 1
    }
    else if(this.first !== null) {
      this.first.next = newNode;
      this.first = newNode;
      this.size = this.size + 1;
    }

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let currentNode = this.first;
    let preNode;
    try {
      while(currentNode.next) {
        preNode = currentNode;
        currentNode = currentNode.next;
      }
      this.last = preNode;
      this.size = this.size - 1;
      return currentNode.val;
    }
    catch(err) {
      throw new Error(err);
    }

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) return true;

    return false;
  }
}

module.exports = Stack;
