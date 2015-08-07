'use strict';

var expect = require('chai').expect;
var structures = require('../index');
var LinkedList = structures.LinkedList;
var emptyNode = {data: null, next: null};

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
    var appendItems = ['foo', 42, { baz: 'qux' }];

    tail = list.getTail();
    expect(tail).to.be.null; // eslint-disable-line no-unused-expressions

    for (var item in appendItems) {
      appended = list.append(item);
      tail = list.getTail();
      expect(tail).to.equal(appended);
      expect(tail.data).to.equal(item);
      expect(tail.next).to.be.null; // eslint-disable-line no-unused-expressions
    }
  });

  it('append', function () {
    var list = new LinkedList();
    var appended;

    appended = list.append('foo');
    expect(appended).to.be.an('object');
  });
});
