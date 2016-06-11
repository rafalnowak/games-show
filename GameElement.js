import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class GameElement extends Component {
  render() {
    return this.renderGame(this.props.game);
  }

  renderGame(game) {
    return(
      <View style={styles.container}>
        <Image
          source={{uri: game.cover}}
          style={styles.gameThumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{game.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  gameThumbnail: {
    width: 53,
    height: 81,
  },

});
