import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { GamesApiClient } from "./GamesApiClient";
import { LoadingView } from "./LoadingView";

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
          <View style={styles.containerTop}>
            <Image
              source={{uri: "https://" + game.cover.url}}
              style={styles.gameThumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.name}>{game.name}</Text>
            </View>
          </View>
          <View style={styles.containerBottom}>
            <Text style={styles.summary}>
              {game.summary}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <LoadingView/>
      );
    }
  }
}

//TODO: reuse it with games list component
const styles = StyleSheet.create({
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  containerTop: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1
  },
  name: {
    fontSize: 19,
    marginBottom: 8,
    textAlign: 'center',
  },
  gameThumbnail: {
    width: 90,
    height: 90,
    margin: 10,
  },
  containerBottom: {
    flex: 1
  },
  summary: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    textAlign: 'justify'
  }
});
