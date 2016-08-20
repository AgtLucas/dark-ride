import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <p>Foo</p>,
  document.getElementById('_root')
)
