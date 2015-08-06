'use strict';

var expect = require('chai').expect;
var structures = require('../index');
var LinkedList = structures.LinkedList;
var emptyNode = {data: null, next: null};

describe('LinkedList', function () {
  it('constructor', function () {
    var list = new LinkedList();
    expect(LinkedList).to.be.a('function');
    expect(list).to.be.an('object');
    expect(list).to.be.an.instanceof(LinkedList);
    expect(list.sentinel).to.be.an('object');
    expect(list.sentinel).to.eql(emptyNode);
  });
});
