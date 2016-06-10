import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var games = [
  {
    name: 'Stellaris',
    platform: 'PC',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  },
  {
    name: 'The Witcher 3',
    platform: 'PS4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  },
  {
    name: 'GTA V',
    platform: 'PS4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  }
];

export class GameElement extends Component {
  render() {
    return this.renderGame(this.props.game);
  }

  renderGame(game) {
    return(
      <View style={styles.container}>
        <Image
          source={{uri: game.thumbnail}}
          style={styles.gameThumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{game.name}</Text>
          <Text style={styles.platform}>{game.platform}</Text>
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
  platform: {
    textAlign: 'center',
  },
  gameThumbnail: {
    width: 53,
    height: 81,
  },

});
