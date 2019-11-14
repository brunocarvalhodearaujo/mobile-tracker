/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { createStore, applyMiddleware, Middleware } from 'redux'
import createThunkMiddleware from 'redux-thunk'
import reducers, { State } from './reducers'

const baseURL: string = 'https://www.google.com.br'
const enhancer: Middleware[] = [
  createThunkMiddleware.withExtraArgument(baseURL),
]

export function configureStore (initialState: Partial<State> = {}) {
  return createStore(reducers, initialState, applyMiddleware(...enhancer))
}

export * from './reducers'
export * from './actions'
