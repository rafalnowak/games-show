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

import { GameElement } from "./GameElement"

var gamesMock = [
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
  },
  {
    name: 'Hearts of Iron IV',
    platform: 'PC',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  },
  {
    name: 'Metal Gear Solid V',
    platform: 'PS4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  },
  {
    name: 'The Journey',
    platform: 'PS4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  },
  {
    name: 'Something something',
    platform: 'PS4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  },
  {
    name: 'Mortal Kombat X',
    platform: 'PS4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  },
  {
    name: 'The Last Of Us',
    platform: 'PS4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Harry_Whittier_Frees_-_What%27s_Delaying_My_Dinner.jpg'
  }
];

var IGDB_API_KEY = 'TOKEN';
var REQUEST_URL = 'https://www.igdb.com/api/v1/games/search?q=';

class GamesList extends Component {
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
            game.name + ' - ' + game.platform,
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

class GamesShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.handleSearchInput(text)}/>
        <GamesList
          filterText={this.state.filterText}/>
      </View>
    );
  }

  handleSearchInput(text) {
    this.setState({
      filterText: text
    });
  }
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  },
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

AppRegistry.registerComponent('GamesShow', () => GamesShow);
