import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
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
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Specify your blood type</Text>
          <Form
            ref="form"
            type={structure}
            options={options}
            style={styles.form}
          />
        </View>
        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.submit}
        >
          <Text style={styles.submitText}> Continue </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    //backgroundColor: 'brown',
    paddingTop: 15
  },
  content: {

  },
  heading: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'Avenir',
    fontWeight: '100',
    textAlign: 'center',
    paddingHorizontal: 5
  },
  form: {
    padding: 10
  },
  submit: {
    alignSelf: 'center',
    marginVertical: 25
  },
  submitText: {
    fontSize: 24,
    color: '#b1e35f',
    fontFamily: 'Avenir',
  }
});

