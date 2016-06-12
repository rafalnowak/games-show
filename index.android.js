import React, { Component } from 'react';

import {
  Alert,
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { GamesList } from "./GamesList";

class GamesShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.handleSearchInput(text)}/>
        <GamesList
          navigator={this.props.navigator}
          filterText={this.state.filterText}/>
      </View>
    );
  }

  handleSearchInput(text) {
    this.setState({
      filterText: text
    });
  }
}

class GameDetails extends Component {
  render() {
    return (
      <View>
        <Text>Game details</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'GamesScreen', name: 'Games Screen'}}
        renderScene={this.renderScene}/>
    );
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'GamesScreen':
        return (
          <GamesShow navigator={navigator}/>
        );
      case 'GameDetails':
        return (
          <GameDetails navigator={navigator}/>
        );
    }
  }
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  }
});

AppRegistry.registerComponent('GamesShow', () => App);
