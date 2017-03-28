# react-tape
[![npm version](https://badge.fury.io/js/react-tape.svg)](https://badge.fury.io/js/react-tape)

A simple helper library that pulls together Tape and React testing extensions.

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
