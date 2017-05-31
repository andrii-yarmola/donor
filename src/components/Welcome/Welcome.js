import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';
import SignIn from './SignIn';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/actionCreators';
import { bindActionCreators } from 'redux';

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    //console.log('welcome props', this.props);
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
        <SignIn login={this.props.login}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 45,
    paddingBottom: 10,
    paddingTop: 110
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 390,
  },
  button: {
    borderRadius: 30,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 1,
    marginBottom: 60
  },
  buttonText: {
    color: '#94be45',
    fontSize: 24,
    lineHeight: 27,
    alignSelf: 'center'
  },
  logo: {
    marginBottom: 65,
    alignSelf: 'center',
  }
});

const mapStateToProps = state => ({
  //hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Welcome);
