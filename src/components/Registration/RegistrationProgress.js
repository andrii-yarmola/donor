import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const RegistrationProgress = ({currentStep, amount}) => {
    const typeView = {
      'request-proposal' : 'Request',
      'request-call' : 'Schedule'
    }
    return (
      <View>
        <Text> currentStep: {currentStep} </Text>
        <Text> amount: {amount} </Text>
      </View>
    );
};

export default RegistrationProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#e1e1e1',
  },
});

