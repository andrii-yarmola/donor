import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";

const IncomingList = ({ incomingData }) => {
  return (
    <View style={styles.container}>
      <List>
        
          <ListItem
            roundAvatar
            title={`asd`}
            subtitle={'asddd'}
            avatar={{ uri: 'asd' }}
          />


    </List>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },

});

export default IncomingList;