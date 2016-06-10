import React, { Component } from 'react';

import {
  Alert,
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
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

class GamesShow extends Component {
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
    //todo: fetch data from igdb api, add search bar
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(gamesMock),
      loaded: true
    });
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

AppRegistry.registerComponent('GamesShow', () => GamesShow);
