import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Dashboard extends Component {
  static navigationOptions = {
    title: 'dashboard placeholder'
  };
  render() {
    return (
      <View style={ styles.container }>
       <Text> THIS IS DASHBOARD </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 45,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export default Dashboard;
