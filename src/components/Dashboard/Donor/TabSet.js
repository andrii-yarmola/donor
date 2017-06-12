import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const TabSet = ({ tabObj }) => {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          { tabObj.tabArr.map((item, i) => 
              (
                <TouchableOpacity 
                  key={item} 
                  style={[
                    styles.button,
                    (item === tabObj.tabActive) && styles.buttonActive,
                    (i === 1) && styles.buttonRight,
                    ]} > 
                  <Text 
                    style={[styles.buttonText, (item === tabObj.tabActive) && styles.buttonTextActive]} > 
                    { item }
                  </Text>
                  { (tabObj.counts[i] > 0) && 
                    <Text
                      style={[styles.countLeft, (i === 1) && styles.countRight]} > 
                      { tabObj.counts[i] }
                    </Text>
                  }
                </TouchableOpacity>
              )  
            )
          }
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efeff4',
    padding: 15,
    alignSelf: 'center',
    width: '100%',
    borderTopColor: '#bcbdbe',
    borderTopWidth: 1,
  },
  wrapper: {
    alignSelf: 'center',
    width: 295,
    height: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#88c025',
    borderRadius: 15,
    flexDirection: 'row',
    //overflow: 'hidden',
  },
  button: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    flex: 1,
    flexDirection: 'row',
    position: 'relative'
  },
  buttonRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonActive: {
    backgroundColor: '#b1e35f',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    flex: 1,
    alignSelf: 'center',
    color: '#b1e35f',
    backgroundColor: 'transparent'

  },
  buttonTextActive: {
    color: 'white',
  },
  countLeft: {
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    left: -6,
    top: -12,
    padding: 4,
    backgroundColor: '#ff7600',
    width: 23,
    height: 23,
    borderRadius: 12,
    fontSize: 12,
    overflow: 'hidden'
  },
  countRight: {
    right: -6,
    left: null,
  }
});

export default TabSet;