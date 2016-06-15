import React, { Component } from 'react';

import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { SearchableGamesList } from "./SearchableGamesList";
import { GameDetails } from "./GameDetails";

class App extends Component {
  render() {
    return (
      <NavigatorIOS
         style={styles.nav}
         itemWrapperStyle={styles.navWrap}
         initialRoute={{
          id: 'GamesScreen',
          title: 'Games',
          component: SearchableGamesList
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1
  },
  navWrap: {
    flex: 1,
    marginTop: 70
  }
});

AppRegistry.registerComponent('GamesShow', () => App);
