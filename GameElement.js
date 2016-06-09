import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class GameElement extends Component {
  render() {
    var game = {
      name: 'Some game',
      platform: 'PS4',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
    };
    return(
      <View style={styles.container}>
        <Text>{game.name}</Text>
        <Text>{game.platform}</Text>
        <Image
          source={{uri: game.thumbnail}}
          style={styles.gameThumbnail}/>
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
  gameThumbnail: {
    width: 53,
    height: 81,
  }
});
