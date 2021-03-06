var expect = require('chai').expect,
    di = require('../../di');

describe('hashtableIterator test', function() {

    'use strict';

    var elements = [],
        itr = di.getHtIteratorFactory()(elements),
        hashTablePair = di.getFactory('nd', 'hashTablePair');

    it('should have a null next first', function() {
        expect(itr.hasNext()).to.be.equal(false);
        expect(itr.next()).to.be.equal(null);
    });

    it('should iterate over the elements', function() {
        var el = [];

        elements[11] = [hashTablePair('a', '111111')];
        elements[12] = [hashTablePair('b', '222222'),  hashTablePair('c', '333333')];

        while (itr.hasNext()) {
            var pair = itr.next();
            el.push({
                key: pair.getKey(),
                value: pair.getValue()
            });
        }

        expect(el).to.be.eql([
            {
                key: 'a',
                value: '111111'
            },
            {
                key: 'b',
                value: '222222'
            },
            {
                key: 'c',
                value: '333333'
            }
        ]);
    });

    it('should have export method', function() {
        expect(itr.export).to.be.a('Function');
    });

});