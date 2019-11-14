/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { Theme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NativeRouter as Router, Switch, Route, Redirect } from 'react-router-native'
import { Orders } from './views'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    primary: '#ffffff',
    accent: '#111'
  }
}

export default function App () {
  const store = configureStore()

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/orders' component={Orders} />
            <Route path='*'>
              <Redirect to='/orders' />
            </Route>
          </Switch>
        </Router>
      </PaperProvider>
    </Provider>
  )
}
