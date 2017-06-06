import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const SignUp = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/main-bg.png')} style={styles.backgroundImage}/>
      <Image source={require('../../images/logo.png')} style={styles.logo}/>
      <TouchableOpacity
        onPress={() => navigate('RegistrationWrap', { registrationStep: 1 })}
        style={styles.button}
      >
        <Text style={styles.buttonText}> Create account </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigate('TermsAndConditions')}
      style={styles.link}
      >
        <Text style={styles.linkText}>  By signing up, you agree to our Terms & Privacy Policy </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {  
    padding: 45,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: null,
    bottom: -35,
    resizeMode: 'stretch'
  },
  button: {
    borderRadius: 30,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 1,
    marginBottom: 15,
  },
  buttonText: {
    color: '#94be45',
    fontSize: 24,
    lineHeight: 37,
    alignSelf: 'center',
    fontFamily: 'Avenir',
    fontWeight: '100'
  },
  logo: {
    marginTop: 130,
    marginBottom: 65,
    alignSelf: 'center',
  },
  link: {
    marginHorizontal: -15,
    marginBottom: 30
  },
  linkText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#b1e35f',
    backgroundColor: 'transparent',
  }
});

export default SignUp;
