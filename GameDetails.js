import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { IGDB_API_KEY } from "./apikey"

var REQUEST_URL = 'https://www.igdb.com/api/v1/games/';

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
    //TODO: create igdb client module
    fetch(REQUEST_URL + this.props.game.id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Token token="' + IGDB_API_KEY +  '"'
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        var game = responseData.game;
        this.setState({
          game: game,
          loaded: true,
        });
      })
      .catch((error => {
        console.log(error);
      }))
      .done();
  }

  render() {
    if (this.state.loaded) {
      var game = this.state.game;
      console.log("url: " + game.cover.url);
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
