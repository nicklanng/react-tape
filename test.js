const { test, createRenderer } = require('.')
const React = require('react')

const HelloWorld = () => <h1>HelloWorld</h1>

test('HelloWorld # gives a greeting', (t) => {
  const renderer = createRenderer()
  
  renderer.render(<HelloWorld />)
  const result = renderer.getRenderOutput()
  
  t.jsxEquals(<h1>HelloWorld</h1>, result)
  t.jsxIncludes('Hello', result)
  t.end()
})
