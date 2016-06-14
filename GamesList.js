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
import { LoadingView } from "./LoadingView";

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

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: true
    });
    var filterText = nextProps.filterText;
    if (filterText.length > 0) {
      var gamesApiClient = new GamesApiClient();
      gamesApiClient.searchForGames(filterText, (games) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(games),
          isLoading: false,
        });
      });
    } else {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([]),
        isLoading: false
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadingView/>
      );
    } else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(game) => this.renderGame(game)}/>
      );
    }
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
  }
});
