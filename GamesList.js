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

import { GameElement } from "./GameElement";
import { IGDB_API_KEY } from "./apikey"

var REQUEST_URL = 'https://www.igdb.com/api/v1/games/search?q=';

export class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([]),
      loaded: true
    });
  }

  componentWillReceiveProps() {
    fetch(REQUEST_URL + this.props.filterText, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Token token="' + IGDB_API_KEY +  '"'
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        var games = responseData.games
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(games),
          loaded: true,
        });
      })
      .catch((error => {
        console.log(error);
      }))
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderGame}/>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>
          Loading...
        </Text>
      </View>
    );
  }

  renderGame(game) {
    return (
      <TouchableHighlight onPress={() => Alert.alert(
            'Game details',
            `Details screen placeholder for ${game.name}`,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}>
        <View>
          <GameElement game={game}/>
        </View>
      </TouchableHighlight>);
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
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
