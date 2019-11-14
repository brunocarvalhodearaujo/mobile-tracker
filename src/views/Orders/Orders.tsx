/**
 * Copyright (c) 2019-present, Bruno Carvalho de Araujo.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React, { Component, ReactNode, Fragment } from 'react'
import PropTypes from 'prop-types'
import { WrappedComponentProps } from './index'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'

export interface Props {
  children?: ReactNode
}

interface State {}

export default class Orders extends Component<Props & WrappedComponentProps, State> {
  static propTypes = {
    children: PropTypes.element
  }

  static defaultProps = {}

  render () {
    return (
      <Fragment>
        <Appbar.Header>
          <Appbar.Content title='Encomendas' />
          <Appbar.Action icon='plus' onPress={console.log} />
        </Appbar.Header>
        <View style={styles.container}>
          <Text>Open up Orders.js to start working on your app!</Text>
        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
