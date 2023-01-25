class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    } 
    append(value) {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    size() {
        let nodeCount = 0;
        let node = this.head;
        while (node) {
            nodeCount++;
            node = node.next;
        }
        return nodeCount;
    }
    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }
    at(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }
    pop() {
      if(!this.head) throw new Error("List is empty");
      if(!this.head.next) {
        this.head = null;
        this.tail = null;
        return;
      }
        let node = this.head;
        while (node.next.next) {
            node = node.next;
        }
        node.next = null;
        this.tail = node;
    }
    contains(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }
    toString() {
        let node = this.head;
        let values = [];
        while (node) {
            values.push(node.value);
            node = node.next;
        }
        return values.join(" -> ");
    }
}
            
class Node {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}
const list = new linkedList();
list.append(1);
list.prepend(2)
list.append(3);
list.prepend(9)

            