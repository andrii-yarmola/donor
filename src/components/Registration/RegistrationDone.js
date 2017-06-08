import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/actionCreators';
import { bindActionCreators } from 'redux';

class RegistrationDone extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../../images/done-bg.png')} style={styles.backgroundImage}/>
        <View>
          <Text style={styles.heading}> All done! </Text>
          <Text style={styles.caption}> Thank you for registering with Donor app. </Text>
        </View>
        <Text style={styles.text}> Remember you can always change notification preferences and personal information using settings. </Text>
        <TouchableOpacity
          onPress={() => navigate('Dashboard')}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Start </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    padding: 45,
    paddingBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 250,
    resizeMode: 'stretch'
  },
  heading: {
    fontSize: 50,
    fontFamily: 'Avenir',
    fontWeight: '100',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginBottom: 5,
    backgroundColor: 'transparent',
    color: 'white'
  },
  caption: {
    fontSize: 17,
    maxWidth: 230,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: 'white'
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#bbe172',
    paddingVertical: 10,
    paddingHorizontal: 1,
    marginBottom: 25,
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 37,
    alignSelf: 'center',
    fontFamily: 'Avenir',
    fontWeight: '100'
  },
});

const mapStateToProps = state => ({
  //hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(RegistrationDone);
