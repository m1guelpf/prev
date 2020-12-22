import React from 'react'
import { render } from 'react-dom'
import { App } from '@inertiajs/inertia-react'

const el = document.getElementById('app')

render(
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={name => require(`../pages/${name}`).default}
  />,
  el
)
