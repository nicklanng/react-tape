const tape = require('tape')
const addAssertions = require('extend-tape')
const jsxEquals = require('tape-jsx-equals')
const jsxIncludes = require('tape-jsx-includes').default

const test = addAssertions(tape, { jsxEquals, jsxIncludes })
const { createRenderer } = require('react-test-renderer/shallow')

module.exports = {
  test,
  createRenderer
}

