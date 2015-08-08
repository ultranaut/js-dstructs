'use strict';

var expect = require('chai').expect;
var structures = require('../index');
var _ = require('underscore');

var LinkedList = structures.LinkedList;
var emptyNode = {data: null, next: null};

var testValues = [
  42,
  'foo',
  { foo: 42, baz: { qux: 'bar' } },
  [3, 4, 2],
  function () { return this; },
  null
];

describe('LinkedList', function () {
  it('constructor', function () {
    var list;

    expect(LinkedList).to.be.a('function');

    list = new LinkedList();
    expect(list).to.be.an('object');
    expect(list).to.be.an.instanceof(LinkedList);
    expect(list.sentinel).to.be.an('object');
    expect(list.sentinel).to.eql(emptyNode);
  });

  it('getTail', function () {
    var list = new LinkedList();
    var tail;
    var appended;

    tail = list.getTail();
    expect(tail).to.be.null; // eslint-disable-line no-unused-expressions

    for (var value in testValues) {
      appended = list.append(value);
      tail = list.getTail();
      expect(tail).to.equal(appended);
      expect(tail.data).to.equal(value);
      expect(tail.next).to.be.null; // eslint-disable-line no-unused-expressions
    }
  });

  it('append', function () {
    var list = new LinkedList();
    var appended;

    appended = list.append('foo');
    expect(appended).to.be.an('object');
  });

  it('find', function () {
    var list = new LinkedList();

    testValues.forEach(function (value) {
      let found = list.find(value);
      expect(found).to.be.null; // eslint-disable-line no-unused-expressions

      list.append(value);
      found = list.find(value);
      expect(found.data).to.equal(value); // eslint-disable-line no-unused-expressions

      let clonedValue;
      if (_.isFunction(value)) {
        clonedValue = value;
      }
      else {
        clonedValue = _.clone(value);
      }
      found = list.find(clonedValue);
      expect(found.data).to.equal(value); // eslint-disable-line no-unused-expressions
    });

    { // test `head` param

      let duplicateValue = testValues[1];
      let followingValue = testValues[2];

      // append duplicate value at the end of the list
      list.append(duplicateValue);
      // should find the originally inserted node
      let found = list.find(duplicateValue);
      let next = found.next;
      expect(found.next.data).to.equal(followingValue);
      // should find the new node at the tail of the list
      found = list.find(duplicateValue, next);
      expect(found).to.equal(list.getTail());
    }
  });

  it('insertAfter', function () {
    var list = new LinkedList();
    testValues.forEach(function (value) {
      list.append(value);
    });
  });
});
