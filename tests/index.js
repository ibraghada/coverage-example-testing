'use strict';

var test = require('tape');
var add = require('../index.js');

test('add: should add two numbers when a < 5', function(t) {
  var res = add(1,2);
  t.equal(res,3,'addition 1 + 2 -> 3');
  t.end();
});

test('add: should subtract two numbers when a > 5', function(t) {
  var res = add(6,2);
  t.equal(res,4,'addition 6 - 2 -> 4');
  t.end();
});