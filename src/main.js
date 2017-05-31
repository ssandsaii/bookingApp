import React from 'react';
import {
  Navigator
} from 'react-native';

import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import chooseName from './components/auth/chooseName';
import home from './components/home';
import bookingSiitRoom from './components/bookingSiitRoom';


const routes ={
  signIn,
  signUp,
  home,
  chooseName,
  bookingSiitRoom
}

module.exports = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{name: 'signIn'}}
        renderScene={this.renderScene}
      />
    )
  },

renderScene(route,navigator){
   let Component = routes[route.name];

   return (
      <Component
        navigator={navigator}
        />
      )
    }
})
