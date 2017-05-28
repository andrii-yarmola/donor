import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';
import SignIn from './SignIn';

export default class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Text>Welcome to the Donor app!</Text>
        <TouchableOpacity
          onPress={() => navigate('RegistrationWrap', { registrationStep: 1 })}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Create account </Text>
        </TouchableOpacity>
        <SignIn/>
      </View>
    );
  }
}

// <Image source={require('../../images/222.jpg')} style={styles.backgroundImage}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 100,
    //resizeMode: 'stretch', // or 'stretch'
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'red',
    padding: 10
  },
  buttonText: {
    color: 'purple',
  }
});

