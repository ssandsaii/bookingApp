import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  NavigationBar
} from 'react-native';

import styles from '../styles';
import {firebaseApp} from './auth/authentication';



module.exports = React.createClass({

    getInitialState(){
      return({
        displayName:'',
    })
  },
    componentDidMount() {
      let user = firebaseApp.auth().currentUser;

      if (!user.displayName) {
        this.props.navigator.push({
          name: 'chooseName'
        })
      } else {
        // proceed normally with application
        this.setState({
          displayName: user.displayName
        })

        //this.listenForItems(topicsRef);
      }
    },


  signOut(){
    // sign out the user
    firebaseApp.auth().signOut()
      .then(() => {
        /* Sign out successful go to signIn,
        popToTop is the command to pop everything back to begining*/
        this.props.navigator.popToTop();
      }, (error) => {
        console.log(error);
      })
  },
  render() {
    return (
      <View style={styles.flexContainer}>
        <Image source={ require ('./auth/image/cover.png')} style={styles.imageHeader}></Image>
          <Text style={styles.title}>
            Hello!  {this.state.displayName}</Text>
            <Text style={styles.welcomeText}>
            plese select your reservation services.
            <TouchableOpacity
              style={styles.buttonSignOut}
              onPress={() => this.signOut()}
            >
              <Text style={styles.link3}>
                Sign out
              </Text>
            </TouchableOpacity>

          </Text>



        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'bookingSiitRoom'})}
          >
            <Image source={ require ('./auth/image/tutorroom.png')} style={styles.bodyImage}></Image>
          </TouchableOpacity>


        </View>

      </View>

    )
  }
})
