import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
const t = require('tcomb-form-native/lib');

const Form = t.form.Form;

const Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

// form model
// const structure = t.struct({
//   name: t.String,
//   lastName: t.String,
//   email: t.String,
//   phone: t.Number,
//   age: t.Number,
//   gender: Gender,
//   password: t.String,
//   confirmPassword: t.String,
// });

// form model
const structure = t.struct({
  name: t.maybe(t.String),
  lastName: t.maybe(t.String),
  email: t.maybe(t.String),
  phone: t.maybe(t.Number),
  age: t.maybe(t.Number),
  gender: Gender,
  password: t.maybe(t.String),
  confirmPassword: t.maybe(t.String),
});


// form options
const options = {
  auto: 'placeholders',
  fields: {
    email: {
      keyboardType: 'email-address',
    },
    gender: {
      nullOption: {value: '', text: 'Male/Female'}
    },
  }
}; 

export default class RegistrationStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isAgreed: false,
      isLoading: false
    };
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }
  
  onSubmit(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
      this.props.saveValues(value);
      // this.props.onNext();
    }
  }
  
  onToggle(e) {
    this.setState({ isAgreed: !this.state.isAgreed })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={structure}
          options={options}
        />
        <View> 
          <Text onPress={ this.onToggle }> checkbox {(this.state.isAgreed).toString()} </Text>
          <Text> I agree with </Text>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={() => this.props.navigate('TermsAndConditions') }
            activeOpacity={0.5}
          >
            <Text> Terms and conditions </Text>
          </TouchableHighlight>
        </View>
        <Button
          onPress={this.onSubmit}
          title="Next"
          disabled={!this.state.isAgreed}
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
    backgroundColor: '#e1e1e1',
  },
});

