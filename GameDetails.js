import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { GamesApiClient } from "./GamesApiClient"

export class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var gamesApiClient = new GamesApiClient();
    gamesApiClient.getGameById(this.props.game.id, (game) => {
      this.setState({
        game: game,
        loaded: true,
      });
    })
  }

  render() {
    if (this.state.loaded) {
      var game = this.state.game;
      return (
        <View>
          <View style={styles.container}>
            <Image
              source={{uri: "https://" + game.cover.url}}
              style={styles.gameThumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.name}>{game.name}</Text>
            </View>
          </View>
          <Text>
            {game.summary}
          </Text>
        </View>
      );
    } else {
      return (this.renderLoadingView());
    }
  }

  //TODO: reuse it with games list component
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>
          Loading...
        </Text>
      </View>
    );
  }
}

//TODO: reuse it with games list component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
