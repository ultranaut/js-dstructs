'use strict';

var _ = require('underscore');

(function () {

  var root = this;

  /* --- Linked list ------------------------------------------------ */
  function LinkedListNode(data, next) {
    this.data = typeof data !== 'undefined' ? data : null;
    this.next = typeof next !== 'undefined' ? next : null;
  }

  function LinkedList() {
    this.sentinel = new LinkedListNode();
  }

  LinkedList.prototype.isEmpty = function () {
    return this.sentinel.next === null;
  };

  LinkedList.prototype.find = function (data, head) {
    var node = typeof head === 'undefined' ? this.sentinel.next : head;
    while (node !== null) {
      if (node.data === data) {
        break;
      }
      node = node.next;
    }
    return node;
  };

  LinkedList.prototype.getTail = function () {
    var prev = null;
    var node = this.sentinel.next;
    while (node !== null) {
      prev = node;
      node = node.next;
    }
    return prev;
  };

  LinkedList.prototype.insertAfter = function (data, node) {
    var newNode = new LinkedListNode(data);
    newNode.next = node.next;
    node.next = newNode;
    return newNode;
  };

  LinkedList.prototype.append = function (data) {
    var tail = this.getTail();
    if (tail === null) {
      tail = this.sentinel;
    }
    return this.insertAfter(data, tail);
  };

  LinkedList.prototype.prepend = function (data) {
    return this.insertAfter(data, this.head);
  };

  var structures = {
    LinkedList: LinkedList
  };


  // export as a Node module if we're in that environment
  // otherwise set it as a global object
  if (typeof module !== 'undefined' &&
      typeof module.exports !== 'undefined') {
    module.exports = structures;
  }
  else {
    root.structures = structures;
  }

}).call(this);
