import React, { Component } from 'react';
import {
  DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  Image,
  Picker,
  TouchableOpacity
} from 'react-native';

import styles from '../styles';

import {firebaseApp, bookingRef} from './auth/authentication';
import chooseName from './auth/chooseName'
module.exports = React.createClass({
  getInitialState() {
     return({
       ID: '',
       Time: '',
       Rnumber: ''
     })
   },

 addIdTime(){
   bookingRef.push({
     ID: this.state.ID,
     Time: this.state.Time,
     Rnumber: this.state.Rnumber
   })
 },
  render(){
    return(


      <View style={styles.flexContainer2}>
        <StatusBar
          backgroundColor="darkred"
          barStyle="light-content" />

          <View style={styles.flexContainer}>
            <Image source={ require ('./auth/image/tutor.png')} style={styles.tutorroomimage}></Image>
            </View>

          <Text style={styles.tutorroomtext}>
        Tutor Room
          </Text>
        <Text style={styles.tutorroomtexttile}>
      you can select date/time
    </Text>
    <Text style={styles.tutorroomtexttile}>
  Rangsit or Bngkadi
</Text>
<Text style={styles.tutorroomtexttile2}>
open 9.00 am - 19.00 pm
</Text>
<TextInput
            placeholder='Student ID'
            style={styles.input}
            onChangeText={(text) => this.setState({ID: text})}
          />
          <TextInput
            placeholder='Please select room number (1-8)'
            style={styles.input}
            onChangeText={(text) => this.setState({Rnumber: text})}
          />
          <TextInput
            placeholder='Select time'
            style={styles.input}
            onChangeText={(text) => this.setState({Time: text})}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.addIdTime()}
            onPress={() => {
              this.props.navigator.pop()
            }}
          >
            <Text style={styles.button}>submit</Text>
          </TouchableOpacity>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigator.pop()
              }}
              >
              <Text style={styles.link}>Back to homepage</Text>
            </TouchableOpacity>
            </View>
      </View>
    )
  }
})
