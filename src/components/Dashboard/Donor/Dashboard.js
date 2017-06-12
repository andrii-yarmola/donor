import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actionCreators from './../../../actions/actionCreators';
import { bindActionCreators } from 'redux';

import TabSet from './TabSet';
import IncomingList from './IncomingList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabObj: {
        tabActive: 'Incoming',
        tabArr: ['Incoming', 'Accepted'],
        counts: [ 3, 2 ]
      },
      incomingData: [
        {
          bloodType: 'Whole Blood',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
        },
        {
          bloodType: 'Whole Blood 2',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
        }
      ],
      AcceptedData: [

      ],
    };
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(tabName) {
    this.setState({ tabObj : { ...this.state.tabObj, tabActive: tabName } });
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
        <IncomingList
          incomingData = {this.state.incomingData}
        />
        <TabSet 
          tabObj = { this.state.tabObj }
          onTabChange = { this.onTabChange }
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