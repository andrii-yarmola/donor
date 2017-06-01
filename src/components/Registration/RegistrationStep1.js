import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const t = require('tcomb-form-native');

const Form = t.form.Form;

const BloodType = t.enums({
  first: 'First',
  second: '2'
});

// form model
const structure = t.struct({
  bloodType: BloodType,
  isAlreadyDonor: t.Boolean,
});

// form options
const options = {
  fields: {
    bloodType: {
      label: "My blood type",
    },
    isAlreadyDonor: {
      label: "I donated in last 3 weeks",
    },
  }
}; 

export default class RegistrationStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
      this.props.saveValues(value);
      // this.props.onNext();
    }
  }
  
  static navigationOptions = {
    title: 'Step 1',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>what is your blood type?</Text>
        <Form
          ref="form"
          type={structure}
          options={options}
        />
        <Button
          onPress={this.onSubmit}
          title="Next"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'brown',
  },
});

