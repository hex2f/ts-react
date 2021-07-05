import log from '~/log'

import React from 'react'
import ReactDOM from 'react-dom'

import Router from '~/views/Router'
import AppProvider from '~/providers/AppProvider'

import 'tailwindcss/tailwind.css'
import '~/css/base-components.css'

ReactDOM.render(
  <AppProvider>
    <Router />
  </AppProvider>
  , document.querySelector('#app'))

log.info('App Initialised')
