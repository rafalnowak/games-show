import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { GameElement } from "./GameElement"

class GamesShow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GameElement/>
        <GameElement/>
        <GameElement/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('GamesShow', () => GamesShow);
