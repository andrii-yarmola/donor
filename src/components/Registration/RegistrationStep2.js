import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
const t = require('tcomb-form-native/lib');

const Form = t.form.Form;

const Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

// form model
const structure = t.struct({
  name: t.String,
  lastName: t.String,
  email: t.String,
  phone: t.Number,
  age: t.Number,
  gender: Gender,
  password: t.String,
  passwordAgain: t.String,
});



// form options
const options = {
  // auto: 'placeholders',
  fields: {
    email: {
      keyboardType: 'email-address',
    },
    gender: {
      nullOption: {value: '', text: 'Specify'}
    },
    password: {
      secureTextEntry: true,
    },
    passwordAgain: {
      secureTextEntry: true,
    }
  }
}; 

export default class RegistrationStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
      this.props.saveValues(value);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.heading} allowFontScaling={true}>Personal Details</Text>
          <Form
            ref="form"
            type={structure}
            options={options}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </ScrollView>
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
    paddingHorizontal: 5,
    marginBottom: 25,
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

