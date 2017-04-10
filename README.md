# react-tape
A simple helper library that pulls together Tape and React testing extensions.

[![npm version](https://badge.fury.io/js/react-tape.svg)](https://badge.fury.io/js/react-tape)
[![Build Status](https://travis-ci.org/nicklanng/react-tape.svg?branch=master)](https://travis-ci.org/nicklanng/react-tape)

Requires `react@^15.5.0` & `react-dom@^15.5.0`.
https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html

## Example
```javascript
import { test, createRenderer } from 'react-tape'

import React from 'react'
import HelloWorld from './HelloWorld.jsx'

test('HelloWorld # gives a greeting', (t) => {
  const renderer = createRenderer()

  renderer.render(<HelloWorld />)
  const result = renderer.getRenderOutput()

  t.jsxEquals(<h1>HelloWorld</h1>, result)
  t.jsxIncludes('Hello', result)
  t.end()
})
```
