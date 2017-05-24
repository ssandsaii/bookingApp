import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './src/main';

class BookingApp extends Component {
  render() {
    return (
      <Main />
    );
  }
}


AppRegistry.registerComponent('BookingApp', () => BookingApp);
