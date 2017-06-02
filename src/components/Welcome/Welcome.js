import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/actionCreators';
import { bindActionCreators } from 'redux';

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    //console.log('welcome props', this.props);
    return (
      <View style={ styles.container }>
        <SignUp navigate={ this.props.navigation.navigate }/>
        <SignIn
          login={ this.props.login }
          navigate={ this.props.navigation.navigate }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const mapStateToProps = state => ({
  //hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Welcome);
