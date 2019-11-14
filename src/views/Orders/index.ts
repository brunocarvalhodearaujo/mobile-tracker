/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Orders, { Props as OrdersProps } from './Orders'
import { State, MergeMapAndDispatchToProps } from '../../store'

const mapStateToProps = (state: State, ownProps: OrdersProps) => ({
  isFetching: state.user.isFetching
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OrdersProps) => ({
  actions: bindActionCreators({}, dispatch)
})

export type WrappedComponentProps = MergeMapAndDispatchToProps<
  typeof mapStateToProps,
  typeof mapDispatchToProps
>

const WrappedComponent: typeof Orders = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)

export default WrappedComponent

