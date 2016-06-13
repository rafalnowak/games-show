import React, { Component } from 'react';

import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { GamesApiClient } from "./GamesApiClient"
import { GameElement } from "./GameElement";

export class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([])
    });
  }

  componentWillReceiveProps() {
    this.setState({
      isLoading: true
    });
    console.log("searching for " + this.props.filterText);
    var gamesApiClient = new GamesApiClient();
    gamesApiClient.searchForGames(this.props.filterText, (games) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(games),
        isLoading: false,
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    } else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderGame.bind(this)}/>
      );
    }
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

  goToDetailsScreen(game) {
    this.props.navigator.push({
      id: 'GameDetails',
      data: {
        game: game
    }});
  }

  renderGame(game) {
    return (
      <TouchableHighlight onPress={() => this.goToDetailsScreen(game)}>
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
