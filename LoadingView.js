import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class LoadingView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>
          Loading...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
