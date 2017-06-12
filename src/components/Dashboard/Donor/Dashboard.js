import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actionCreators from './../../../actions/actionCreators';
import { bindActionCreators } from 'redux';

import TabSet from './TabSet';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabObj: {
        tabActive: 'Incoming',
        tabArr: ['Incoming', 'Accepted'],
        counts: [ 3, 2 ]
      }
    };

  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Incoming requests',
      headerTintColor: 'white',
      headerRight: (
        <TouchableOpacity
          onPress={
            () => {
              // navigate to settings screen
            }
          }
          style={styles.backButton}
        >
        <Icon name="md-settings" size={25} color='white' />
      </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: '#88c025', shadowColor: 'transparent' },
    }
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text> THIS IS DASHBOARD 1</Text>
        <TabSet 
          tabObj = { this.state.tabObj }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  backButton: {
    marginHorizontal: 15 
  }
});

const mapStateToProps = state => ({
  //hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Dashboard);