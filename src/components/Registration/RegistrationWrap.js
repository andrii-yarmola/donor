import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import RegistrationStep1 from './RegistrationStep1';
import RegistrationStep2 from './RegistrationStep2';
import RegistrationStep3 from './RegistrationStep3';
import RegistrationProgress from './RegistrationProgress';


export default class RegistrationWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        bloodType: '',
        isAlreadyDonor: false,
        lastDonate: '',

        name: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        password: '',
        passwordAgain: '',
      },

      errors: false,
      isLoading: false,
    };
    
    this.onNext = this.onNext.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  saveValues(obj){
    this.setState(obj, this.onNext());
  }

  onChange(val){
    // it is dont need to be updatable during setState, and it returs to 'true' after settingState
    this.shouldComponentUpdate = () => false;
    const makeUpdatable = () => {
      this.shouldComponentUpdate = () => true
    };

    this.setState(val, makeUpdatable);
  }

  shouldComponentUpdate() { return true };
  
  onNext(e){
    //if (this.props.navigation.state.params.registrationStep === 2) {
      if (false) {
      // send request
      this.props.userSignupRequest(this.state.formData).then(
        () => {    
          this.props.navigation.setParams({ registrationStep: ++this.props.navigation.state.params.registrationStep});
          // TODO: and send code request
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      )
    } else {
      this.props.navigation.setParams({ registrationStep: ++this.props.navigation.state.params.registrationStep});
    }
  }
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
      <TouchableOpacity
        onPress={
          () => {
            (navigation.state.params.registrationStep === 1) ? 
            navigation.dispatch(NavigationActions.back())
            :
            navigation.setParams({ registrationStep: navigation.state.params.registrationStep - 1})
          }
        }
        style={styles.backButton}
      >
        <Icon name="ios-arrow-back" size={25} color="#b1e460" />
        <Text style={styles.back}> Back </Text>
      </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: 'white', shadowColor: 'transparent' },

    }
  };

  render() {
    const StepView = () => {
      switch (this.props.navigation.state.params.registrationStep) {
        case 1 : return <RegistrationStep1 saveValues={this.saveValues} value={this.state.formData} onChange={this.onChange}/>
        case 2 : return <RegistrationStep2 saveValues={this.saveValues} value={this.state.formData} onChange={this.onChange}/>
        case 3 : return <RegistrationStep3 saveValues={this.saveValues} value={this.state.formData} onChange={this.onChange}/>
        default : return <RegistrationStep1 saveValues={this.saveValues} value={this.state.formData} onChange={this.onChange}/>
    }
  }

  return (
    <View style={styles.container}>
      <StepView/>
      <RegistrationProgress
        currentStep = { this.props.navigation.state.params.registrationStep }
        amount = {4}
      />
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  back: {
    color: '#b1e460',
    fontSize: 17,
    lineHeight: 25,
    marginLeft: 5,
    marginBottom: 3
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15
  }
});

