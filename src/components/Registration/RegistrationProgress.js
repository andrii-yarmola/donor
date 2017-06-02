import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const RegistrationProgress = ({ currentStep, amount }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> { currentStep } of { amount } </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignSelf: 'center',
    height: 45
  },
  text: {
    fontSize: 12,
    lineHeight: 15,
    color: '#8e8e93',
  }
});

export default RegistrationProgress;