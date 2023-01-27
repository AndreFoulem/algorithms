//! singlyLinkList
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    //* ----------- PUSH  ------------- //
    SinglyLinkedList.prototype.push = function (value) {
        var newNode = new Node(value);
        // assign refs
        if (this.head) {
            //!-> tail holds ref to old node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    //* -----------  POP  ------------- //
    SinglyLinkedList.prototype.pop = function () {
        if (!this.head) {
            return 'empty';
        }
        //! first thing is to traverse the list
        var temp = this.head;
        var newTail = temp;
        while (temp.next !== null) {
            newTail = temp;
            temp = temp.next;
        }
        this.tail = newTail;
        //!sever the last tail
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    };
    //* -----------  SHIFT  ------------- //
    SinglyLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var originalFirstNodeHead = this.head;
        this.head = originalFirstNodeHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return originalFirstNodeHead;
    };
    //* -----------  UNSHIFT  ------------- //
    SinglyLinkedList.prototype.unshift = function (value) {
        var newNode = new Node(value);
        if (this.head) {
            //!-> tail holds ref to old node
            newNode.next = this.head;
            this.head = newNode;
        }
        else if (!this.head) {
            this.tail = this.head = newNode;
        }
        this.length++;
        return this;
    };
    //* -----------  GET  ------------- //
    SinglyLinkedList.prototype.get = function (index) {
        //! guard
        if (index < 0 || index >= this.length)
            return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    };
    //* -----------  SET NODE VALUE ------------- //
    SinglyLinkedList.prototype.set = function (index, value) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
list.push('first');
list.push('second');
list.push('third');
list.set(2, 'yo');
console.log(list.pop());
console.log(list.length);
console.log(list);
