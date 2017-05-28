import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'TERMS AND CONDITIONS',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> TERMS AND CONDITIONS </Text>
        <Text style={styles.title}> lorem imsum </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="OK"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

