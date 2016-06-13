import React, { Component } from 'react';

import {
  AppRegistry,
  BackAndroid,
  Navigator
} from 'react-native';

import { SearchableGamesList } from "./SearchableGamesList";
import { GameDetails } from "./GameDetails";

var _navigator = null;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  } else {
    _navigator.pop();
    return true;
  }
});

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'GamesScreen'}}
        renderScene={this.renderScene}/>
    );
  }

  renderScene(route, navigator) {
    _navigator = navigator; //TODO: ugly global :(
    switch (route.id) {
      case 'GamesScreen':
        return (
          <SearchableGamesList navigator={navigator}/>
        );
      case 'GameDetails':
        return (
          <GameDetails navigator={navigator}/>
        );
    }
  }
}

AppRegistry.registerComponent('GamesShow', () => App);
