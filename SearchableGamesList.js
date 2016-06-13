import React, { Component } from 'react';

import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import { GamesList } from "./GamesList";

export class SearchableGamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
  }

  render() {
    return (
      <View style={styles.mainScreen}>
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

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  }
});
