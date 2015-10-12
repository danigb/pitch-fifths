'use strict'

// The fifths vector representation of: 1P, 2M, 3M, 4P, 5P, 6M, 7M
var BASE_TO = [ [0, 0], [2, -1], [4, -2], [-1, 1], [1, 0], [3, -1], [5, -2] ]
var BASE_FROM = [ [0, 0], [4, 0], [1, 1], [5, 1], [2, 2], [6, 2], [3, -1] ]

/**
 * Get a pitch or interval measured in fifths and octaves
 *
 * Every interval (or pitch) can be expressed by repeating ascending or descending
 * fifths and octaves. For exaple, interval major second is two fifths up and
 * one octave down:
 * `fifths([1, 0, 0]) // => [2, -1]`
 *
 * This representation is useful for calculating interval distances, transpositions
 * or keys
 *
 * @param {Array} apitch - the pitch or interval as [a-pitch](https://github.com/danigb/a-pitch)
 * @return {Array} an array with the form [fifths, octaves] where both are integers
 *
 * @example
 * var fifths = require('pitch-fifths')
 * fifths([0, 0, 0]) // => [0, 0]
 * fifths([0, 0, 1]) // => [0, 1]
 * fifths([1, 0, 0]) // => [2, -1]
 */
function fifths (t) {
  var base = BASE_TO[t[0] % 7]
  var fifths = base[0] + 7 * t[1]
  var oct = t[2] !== null ? base[1] + t[2] - 4 * t[1] : null
  return [fifths, oct]
}

/**
 * Get the [a-pitch](https://github.com/danigb/a-pitch) structure from a
 * fifths array
 *
 * @param {Array} coord - the fifths array
 * @return {Array} the a-pitch structure
 *
 * @example
 * var fifths = require('pitch-fifths')
 * fifths.toPitch([3, -1]) // => [6, 0, 1]
 */
function toPitch (coord) {
  var q = coord[0] % 7
  var index = q < 0 ? 7 - Math.abs(q) : q
  var alter = Math.floor((coord[0] + 1) / 7)

  var base = BASE_FROM[index]
  var oct = coord[1] === null ? null : base[1] + alter * 4 + coord[1]
  return [base[0], alter, oct]
}

fifths.toPitch = toPitch
module.exports = fifths
