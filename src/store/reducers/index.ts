/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { combineReducers } from 'redux'
import user from './user'

const reducers = combineReducers({ user })

export type State = ReturnType<typeof reducers>
export type MergeMapAndDispatchToProps<MapStateToProps, MapDispatchToProps> = MapStateToProps & MapDispatchToProps

export default reducers
