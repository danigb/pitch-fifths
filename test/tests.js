var vows = require('vows')
var assert = require('assert')
var fifths = require('../')
var interval = require('interval-parser')

function t (intervals) {
  return intervals.split(' ').map(interval.parse).map(fifths)
    .map(fifths.toAPitch).map(interval.stringify).join(' ')
}

vows.describe('a-pitch-fifths').addBatch({
  'fifths': {
    'from array to fifths': function () {
      assert.deepEqual(fifths([1, 0, 0]), [2, -1])
      assert.deepEqual(fifths([7, 0, 0]), [0, 0])
    },
    'without octaves': function () {
      assert.deepEqual(fifths([1, 0, null]), [2, null])
      assert.deepEqual(fifths([1, 1, null]), [9, null])
      assert.deepEqual(fifths([1, 2, null]), [16, null])
      assert.deepEqual(fifths([1, -1, null]), [-5, null])
      assert.deepEqual(fifths([1, -2, null]), [-12, null])
    },
    'ascending interval fifths': function () {
      assert.deepEqual(fifths(interval('1P')), [0, 0])
      assert.deepEqual(fifths(interval('8P')), [0, 1])
      assert.deepEqual(fifths(interval('2M')), [2, -1])
      assert.deepEqual(fifths(interval('5P')), [1, 0])
      assert.deepEqual(fifths(interval('4P')), [-1, 1])
      assert.deepEqual(fifths(interval('7M')), [5, -2])
      assert.deepEqual(fifths(interval('1d')), [-7, 4])
      assert.deepEqual(fifths(interval('8d')), [-7, 5])
      assert.deepEqual(fifths(interval('1A')), [7, -4])
      assert.deepEqual(fifths(interval('1AA')), [14, -8])
    },
    'descending interval fifths': function () {
      assert.deepEqual(fifths(interval('-4P')), [1, -1])
      assert.deepEqual(fifths(interval('-5P')), [-1, 0])
    }
  },
  'fifths.toAPitch': {
    'convert back to a-pitch': function () {
      assert.deepEqual(fifths.toAPitch([0, 0]), [0, 0, 0])
      assert.deepEqual(fifths.toAPitch([7, 0]), [0, 1, 4])
      assert.deepEqual(fifths.toAPitch([1, 0]), [4, 0, 0])
      assert.deepEqual(fifths.toAPitch([2, 0]), [1, 0, 1])
      assert.deepEqual(fifths.toAPitch([2, -1]), [1, 0, 0])
      assert.deepEqual(fifths.toAPitch([0, 1]), [0, 0, 1])
      assert.deepEqual(fifths.toAPitch([7, -4]), [0, 1, 0])
      assert.deepEqual(fifths.toAPitch([14, -8]), [0, 2, 0])
      assert.deepEqual(fifths.toAPitch([14, -7]), [0, 2, 1])
      assert.deepEqual(fifths.toAPitch([-1, 0]), [3, 0, -1])
      assert.deepEqual(fifths.toAPitch([-2, 1]), [6, -1, -1])
      assert.deepEqual(fifths.toAPitch([-3, 0]), [2, -1, -2])
      assert.deepEqual(fifths.toAPitch([-7, 0]), [0, -1, -4])
      assert.deepEqual(fifths.toAPitch([-8, 0]), [3, -1, -5])
      assert.deepEqual(fifths.toAPitch([-9, 0]), [6, -2, -6])
    },
    'without octaves': function () {
      assert.deepEqual(fifths.toAPitch([2, null]), [1, 0, null])
      assert.deepEqual(fifths.toAPitch([-9, null]), [6, -2, null])
      assert.deepEqual(fifths.toAPitch([-1, null]), [3, 0, null])
      assert.deepEqual(fifths.toAPitch([-8, null]), [3, -1, null])
    },
    'intervals to fifths and back to intervals': function () {
      assert.deepEqual(t('1P 2M 3M 4P 5P 6M 7M'), '1P 2M 3M 4P 5P 6M 7M')
      assert.deepEqual(t('8P 9M 10M 11P 12P 13M 14M'), '8P 9M 10M 11P 12P 13M 14M')
      assert.deepEqual(t('-1P -2M -3M -4P -5P -6M -7M'), '1P -2M -3M -4P -5P -6M -7M')
      assert.deepEqual(t('-8P -9M -10M -11P -12P -13M -14M'), '-8P -9M -10M -11P -12P -13M -14M')
    }
  }
}).export(module)
