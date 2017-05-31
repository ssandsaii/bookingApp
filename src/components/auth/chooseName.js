import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';

import {firebaseApp} from './authentication';
import styles from '../../styles';

module.exports = React.createClass({
  getInitialState() {
    return({
      name: ''
    })
  },

  updateDisplayName() {
    let user = firebaseApp.auth().currentUser;
    user.updateProfile({
      displayName: this.state.name
    }).then(() => {
      this.props.navigator.push({
        name: 'home'
      })
    })
  },

  render() {
    return (
      <Image source={require("./image/bg.png")} style={styles.backgroundImage}>
      <StatusBar
        backgroundColor="darkred"
        barStyle="light-content" />
      <View style={styles.container}>
      <Image source={ require ('./image/logo.png')} style={styles.imageLogo}></Image>
      <Text style={styles.title}>
          Choose a account name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({name: text})}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.updateDisplayName()}
        >
          <Text style={styles.button}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
      </Image>
    )
  }
})
