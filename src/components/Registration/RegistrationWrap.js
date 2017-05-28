import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import RegistrationStep1 from './RegistrationStep1';
import RegistrationStep2 from './RegistrationStep2';
import RegistrationStep3 from './RegistrationStep3';
import RegistrationProgress from './RegistrationProgress';


export default class RegistrationWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodType: '',
      rh: '',
      isUnknownBloodType: false,
      isDonor: false,
      lastDonate: '',
      
      
      error: false,
      isLoading: false,
    };
    
    this.onNext = this.onNext.bind(this);
    this.saveValues = this.saveValues.bind(this);
  }
  
  saveValues(obj){
    this.setState(obj, this.onNext())
  }
  
  onNext(e){
    if (this.props.navigation.state.params.registrationStep === 2) {
      // send request
      // api.getBio('andrii-yarmola')
      // .then((res) => {
      //   console.log(res);
      // })
      // .then(
      //   this.props.navigation.setParams({ registrationStep: ++this.props.navigation.state.params.registrationStep})
      // )
    } else {
      this.props.navigation.setParams({ registrationStep: ++this.props.navigation.state.params.registrationStep});
    }
  }
  
  static navigationOptions = ({ navigation}) => {
    return {
      title: `Step ${ navigation.state.params.registrationStep }`,
      headerRight: (
      <Button
        title='inc'
        onPress={() => navigation.setParams({ registrationStep: navigation.state.params.registrationStep + 1})}
        />
      ),
    }
  };
  
  render() {
    const StepView = () => {
      switch (this.props.navigation.state.params.registrationStep) {
        case 1 : return <RegistrationStep1 saveValues={this.saveValues}/>
        case 2 : return <RegistrationStep2 saveValues={this.saveValues} navigate={this.props.navigation.navigate}/>
        case 3 : return <RegistrationStep3/>
        default : return <RegistrationStep1/>
      }
    }

    return (
      <View style={styles.container}>
        {StepView()}
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
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#e1e1e1',
  },
});

