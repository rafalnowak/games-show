import React, { Component } from 'react';

import {
  Alert,
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
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

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  }
});

AppRegistry.registerComponent('GamesShow', () => GamesShow);
