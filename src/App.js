import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import { colors } from './styles';
import store from './store';
import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      // o provider indica o caminho da store
      <Provider store={ store }> 
        <View style={styles.container}>
            <Routes />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
});
