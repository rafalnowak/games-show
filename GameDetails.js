import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

export class GameDetails extends Component {
  render() {
    var game = this.props.game;
    return (
      <View>
        <Text>Game details for {game.name}</Text>
      </View>
    );
  }
}
