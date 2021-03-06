/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default function MyDemos() {
  return (
    <View style={styles.bg}>
      <View style={styles.full}>
        <Image
          style={styles.gradient}
          source={require('../assets/images/gradient_bg.png')}></Image>
      </View>
      <Text style={styles.heading}>PYTORCH</Text>
      <Text style={[styles.heading, styles.headingEnd]}>LIVE</Text>
      <Text style={styles.info}>
        Edit the code in "src/App.tsx" to see changes here.
      </Text>
      <Text style={styles.info}>
        Want to learn more? Take a look at the tutorials in our docs
        (ptyorch.org/live/tutorials/).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 40,
    backgroundColor: '#6f5dad',
    alignSelf: 'stretch',
    height: '100%',
  },
  full: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  gradient: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  heading: {
    fontSize: 32,
    letterSpacing: 15,
    fontWeight: '300',
    color: '#ffffff',
    marginBottom: 10,
  },
  headingEnd: {
    marginBottom: 50,
  },
  info: {
    fontSize: 16,
    color: '#ffffffaa',
    lineHeight: 21,
    marginBottom: 12,
    marginHorizontal: 7,
  },
});
